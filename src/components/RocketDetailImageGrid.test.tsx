import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import RocketDetailImageGrid from './RocketDetailImageGrid'
import { IRocket } from "../Interfaces";

const config = {
    rocketData: {
        id: '123abc',
        name: 'title',
        description: 'spacex1 description',
        success_rate_pct: 5,
        active: true,
        first_flight: '2006-03-24',
        wikipedia: 'some url here',
        cost_per_launch: 10,
        flickr_images: ['abc.png']
    },
};

const history = createMemoryHistory();

const renderComponent = (rocketData: IRocket) => {
    history.push(`/rocket/${config.rocketData.id}`)
    return render(<Router history={history}><RocketDetailImageGrid rocketData={rocketData} /></Router>
    );
};

test("should render correct data based on props passed", () => {
    renderComponent(config.rocketData);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'abc.png');
});

