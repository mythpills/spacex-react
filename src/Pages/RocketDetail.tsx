import React, { FC } from "react";
import { useHistory, Redirect, useParams } from "react-router-dom";
import { IRocket } from "../Interfaces";
import useRocket from '../CustomHooks/useRockets'
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import RocketDetailCard from '../Components/RocketDetailCard'
import RocketDetailImageGrid from '../Components/RocketDetailImageGrid'
import "../App.css";

const Rocket: FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const rockets = useRocket();
  const rocketData = rockets.filter((rocket: IRocket) => rocket.id === id)[0];
  const idArray = rockets?.map((rocket: IRocket) => rocket.id);
  return idArray?.includes(rocketData?.id) ? (
    <div className="rocketDetails">
      <RocketDetailCard rocketData={rocketData} />
      {rocketData?.flickr_images?.length && (
        <RocketDetailImageGrid rocketData={rocketData} />
      )}
      <Container className="themed-container" fluid="md">
        <Row>
          <Col md={12}>
            <Button
              data-testid="backBtn"
              className="text-center"
              onClick={() => {
                history.push("/");
              }}
            >
              Back to Dashboard
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <Redirect to="/errorPage" />
  );
};

export default Rocket;
