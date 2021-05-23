import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BadgeComponent from "./BadgeComponent";
import { IRocket } from "../Interfaces";

const defaultRocket = {
  id: '',
  name: '',
  description: '',
  active: false,
  first_flight: '',
  wikipedia: '',
  cost_per_launch: 0,
  flickr_images: ['']
}

const config = {
  danger: { ...defaultRocket, success_rate_pct: 5 },
  warning: { ...defaultRocket, success_rate_pct: 40 },
  success: { ...defaultRocket, success_rate_pct: 92 },
};

const renderComponent = (rocketData: IRocket) => {
  return render(<BadgeComponent rocketData={rocketData} />);
};

test("should render the badge", () => {
  renderComponent(config.danger);
  expect(screen.getByText(/success rate:/i)).toBeInTheDocument();
  const badge = screen.getByTestId("badgeTest");
  expect(badge).toBeInTheDocument();
});

test("should render red badge if sucess rate is <= 29", () => {
  renderComponent(config.danger);
  expect(screen.getByText(/success rate:/i)).toBeInTheDocument();
  const badge = screen.getByTestId("badgeTest");
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass("badge badge-danger");
});

test("should render red badge if sucess rate is between 30 & 59", () => {
  renderComponent(config.warning);
  expect(screen.getByText(/success rate:/i)).toBeInTheDocument();
  const badge = screen.getByTestId("badgeTest");
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass("badge badge-warning");
});

test("should render red badge if sucess rate is >60 & <=100", () => {
  renderComponent(config.success);
  expect(screen.getByText(/success rate:/i)).toBeInTheDocument();
  const badge = screen.getByTestId("badgeTest");
  expect(badge).toBeInTheDocument();
  expect(badge).toHaveClass("badge badge-success");
});
