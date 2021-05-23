import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { IRocket } from "../Interfaces";
import BadgeComponent from './BadgeComponent'

interface Props {
  rocketData: IRocket
}

const RocketDashBoardCard = ({ rocketData }: Props) => {
  const history = useHistory();
  return (
    <Card>
      <CardImg top src={rocketData.flickr_images[0]} alt={rocketData.name} />
      <CardBody>
        <CardTitle tag="h5">{rocketData.name}</CardTitle>
        <CardText>
          <div className="titleText">First flight date: </div>
          {rocketData.first_flight}
        </CardText>
        <BadgeComponent rocketData={rocketData} />
        <Button
          onClick={() => {
            history.push(`/rocket/${rocketData.id}`);
          }}
        >
          Click here for details
        </Button>
      </CardBody>
    </Card>
  );
};

export default RocketDashBoardCard;
