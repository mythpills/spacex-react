describe("renders the homepage on load", () => {
  it("it should be on the correct url", () => {
    cy.visit("/");
    cy.url().should("include", "/");
  });
  it("it renders the header on page load", () => {
    cy.visit("/");
    cy.get(".App h1").should("be.visible");
    cy.get(".App h1").contains("SpaceX iOS Challenge");
  });

  it("it renders the rockets", () => {
    cy.visit("/");
    cy.get(".card").should("have.length", 4);
  });

  it("it renders the rocket details", () => {
    cy.visit("/");
    cy.get(".card img").should("have.length", 4);
    cy.get(".card .card-title").should("have.length", 4);
    cy.get(".titleText").should("have.length", 4);
    cy.get(".badgeTitle").should("have.length", 4);
    cy.get(".badge").should("have.length", 4);
    cy.get(".card-body button").should("have.length", 4);
  });
});

describe("on clicking a rocket card", () => {
  it("it navigates to corresponding rocketDetail page and populates its details", () => {
    cy.visit("/");
    cy.get(".card-body button")
      .first()
      .click()
      .then(async () => {
        cy.url().should("include", "/5e9d0d95eda69955f709d1eb");
        cy.get(".App h1").should("be.visible");
        cy.get(".App h1").contains("SpaceX iOS Challenge");
        cy.get(".card-title").should("be.visible");
        cy.get(".card-text .badgeTitle").contains("Success rate:");
        cy.get(".card-text .titleText").then((title) => {
          expect(title[0]).to.contain.text("Status: ");
          expect(title[1]).to.contain.text("First flight date: ");
          expect(title[2]).to.contain.text("Cost per launch: ");
        });
        cy.get(".card button").should("be.visible");
        cy.get(".card button").contains("Wikipedia");
        cy.get(".card-img-top").should("have.length", 2);
        cy.get("[data-testid=backBtn]").contains("Back to Dashboard");
      });
  });
});

describe("on clicking the back button", () => {
  it("it navigates back to the dashboard and shows dashboard contents", () => {
    cy.visit("/");
    cy.get(".card-body button")
      .first()
      .click()
      .then(async () => {
        cy.url().should("include", "/5e9d0d95eda69955f709d1eb");
        cy.get("[data-testid=backBtn]")
          .click()
          .then(async () => {
            cy.url().should("include", "/");
            cy.get(".card .card-title").should("have.length", 4);
            cy.get(".card .card-title").then((card) => {
              expect(card[0]).to.contain.text("Falcon 1");
            });
          });
      });
  });
});
