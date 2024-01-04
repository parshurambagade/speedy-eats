import { render, screen } from "@testing-library/react"
import Card, { PureVegCard } from "../components/Card"
import mockRestaurant from "../mocks/mockRestaurant.json"
import mockVegRestaurant from "../mocks/mockVegRestaurant.json"
import "@testing-library/jest-dom";

it("Should render card component with name of restaurant", () => {

    render(<Card restaurant={mockRestaurant.info}/>);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
})

it("Should HOC render a card with pure veg label", () => {
    const WithPureVeg = PureVegCard(Card);

    render(<WithPureVeg restaurant={mockVegRestaurant.info} />);

    const label = screen.getByText("Pure Veg");

    expect(label).toBeInTheDocument();
})