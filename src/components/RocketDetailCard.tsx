import React from 'react'
import {
    CardTitle,
    Button,
    Card,
    CardText,
    Container,
    Row,
    Col,
} from "reactstrap";
import { IRocket } from "../Interfaces";
import BadgeComponent from './BadgeComponent'

interface Props {
    rocketData: IRocket
}

const RocketDetailCard = ({ rocketData }: Props) => {
    return (
        <Container className="themed-container" fluid="md">
            <Row>
                <Col md={12}>
                    <Card>
                        <CardTitle tag="h5" className="text-center">
                            {rocketData?.name}
                        </CardTitle>
                        <CardText>{rocketData?.description}</CardText>
                        <BadgeComponent rocketData={rocketData} />
                        <CardText>
                            <div className="titleText">Status: </div>
                            {rocketData?.active ? "Yes" : "No"}
                        </CardText>
                        <CardText>
                            <div className="titleText">First flight date: </div>
                            {rocketData?.first_flight}
                        </CardText>
                        <CardText>
                            <div className="titleText">Cost per launch: </div>${rocketData?.cost_per_launch}
                        </CardText>
                        <Row>
                            <Col lg={3}>
                                <Button
                                    onClick={() => {
                                        window.open(`${rocketData?.wikipedia}`, "_blank");
                                    }}
                                >
                                    Wikipedia
                  </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default RocketDetailCard
