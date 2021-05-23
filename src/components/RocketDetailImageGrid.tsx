import React from 'react';
import {
    Container,
    Row,
    Col,
    CardImg
} from "reactstrap";
import { IRocket } from "../Interfaces";

interface Props {
    rocketData: IRocket
}

const RocketDetailImageGrid = ({ rocketData }: Props) => {
    return (
        <Container>
            <Row>
                {rocketData?.flickr_images.map((rocket: string, index: number) => {
                    return (
                        <Col key={`rocket-${index}`} md={12} xs={12}>
                            <CardImg top src={rocket} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
}

export default RocketDetailImageGrid
