import React from 'react'
import {
    CardText,
    Badge,
} from "reactstrap";
import { IRocket } from "../Interfaces";
import '../App.css'

interface Props {
    rocketData: IRocket
}

const getBadgeColor = (rocketData: IRocket) => {
    const { success_rate_pct } = rocketData;
    if (success_rate_pct <= 29) {
        return 'danger'
    } else if (success_rate_pct >= 30 &&
        success_rate_pct <= 59) {
        return 'warning'
    } else if (success_rate_pct >= 60 &&
        success_rate_pct <= 100) {
        return 'success'
    }
}

const BadgeComponent = ({ rocketData }: Props) => {
    return (
        <CardText>
            <span className="badgeTitle">Success rate:  </span>
            <Badge data-testid="badgeTest" color={getBadgeColor(rocketData)}>{rocketData.success_rate_pct}%</Badge>
        </CardText>

    )
}

export default BadgeComponent
