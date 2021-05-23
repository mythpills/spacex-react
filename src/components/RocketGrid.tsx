import React from "react";
import { Container, Row, Col } from "reactstrap";
import RocketDashBoardCard from "./RocketDashBoardCard";
import { IRocket } from "../Interfaces";

interface Props {
  rockets: IRocket[]
}

const RocketGrid = ({ rockets }: Props) => {
  return (
    rockets?.length ? (
      <Container>
        <Row>
          {rockets.map((rocket: IRocket) => {
            return (
              <Col data-testid="dashBoardCardTest" key={rocket.id} md={6} xs={12}>
                <RocketDashBoardCard rocketData={rocket} />
              </Col>
            );
          })}
        </Row>
      </Container>
    ) : null
  );
};

export default RocketGrid;
