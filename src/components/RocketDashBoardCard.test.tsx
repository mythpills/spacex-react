import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import RocketDashBoardCard from './RocketDashBoardCard'
import { IRocket } from "../Interfaces";
import userEvent from "@testing-library/user-event";


const config = {
  rocketData: {
    id: '123abc',
    name: 'spacex1',
    description: 'spacex1 description',
    success_rate_pct: 5,
    active: true,
    first_flight: '2006-03-24',
    wikipedia: 'some url here',
    cost_per_launch: 10,
    flickr_images: ['abc.png']
  },
  dashBoardUrl: '/'
};

const history = createMemoryHistory();

const renderComponent = (rocketData: IRocket) => {
  history.push(config.dashBoardUrl)
  return render(<Router history={history}><RocketDashBoardCard rocketData={rocketData} /></Router>
  );
};

test("should render correct data based on props passed", () => {
  renderComponent(config.rocketData);
  expect(screen.getByText(/spacex1/i)).toBeInTheDocument();
  expect(screen.getByText(/first flight date:/i)).toBeInTheDocument();
  expect(screen.getByText(/2006-03-24/i)).toBeInTheDocument();
  expect(screen.getByText(/Success rate:/i)).toBeInTheDocument();
  expect(screen.getByText(/5%/i)).toBeInTheDocument();
  expect(screen.getByText(/click here for details/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /click here for details/i })).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', 'abc.png');
});

test("should redirect to rocket detail page", () => {
  renderComponent(config.rocketData);
  userEvent.click(screen.getByRole('button', { name: /click here for details/i }))
  expect(history.location.pathname).toBe(`/rocket/${config.rocketData.id}`)
});
