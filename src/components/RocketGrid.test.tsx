import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RocketGrid from './RocketGrid'
import { IRocket } from "../Interfaces";

const config = {
    rocketData: [{
        id: '123abc',
        name: 'title',
        description: 'spacex1 description',
        success_rate_pct: 5,
        active: true,
        first_flight: '2006-03-24',
        wikipedia: 'some url here',
        cost_per_launch: 10,
        flickr_images: ['abc.png']
    }],
};

const renderComponent = (rocketData: IRocket[]) => {

    return render(<RocketGrid rockets={rocketData} />
    );
};

test("should render correct data based on props passed", () => {
    renderComponent(config.rocketData);
    const dashBoardCards = screen.queryAllByTestId("dashBoardCardTest");
    expect(dashBoardCards).toHaveLength(1);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/first flight date:/i)).toBeInTheDocument();
    expect(screen.getByText(/2006-03-24/i)).toBeInTheDocument();
    expect(screen.getByText(/success rate:/i)).toBeInTheDocument();
    expect(screen.getByText(/5%/i)).toBeInTheDocument();
    expect(screen.getByText(/click here for details/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /click here for details/i })).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'abc.png');
});
