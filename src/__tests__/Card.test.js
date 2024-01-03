import { render, screen } from "@testing-library/react"
import Card from "../components/Card"
import mockRestaurant from "../mocks/mockRestaurant"
import "@testing-library/jest-dom";

const restaurant = mockRestaurant;

it("Should render card component with name of restaurant", () => {

    render(<Card restaurant={restaurant.info}/>);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
})
