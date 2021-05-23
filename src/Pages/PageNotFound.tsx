import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button, Container, Row, Col, CardText, Alert } from "reactstrap";

const PageNotFound = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Container className="themed-container" fluid="md">
      <Row>
        <Col md={12}>
          <CardText>
            <Alert color="warning">
              Sorry this page {location.pathname} does not exist. Click the
              button below to move to Dashboard
            </Alert>
          </CardText>
          <Button
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
  );
};

export default PageNotFound;
