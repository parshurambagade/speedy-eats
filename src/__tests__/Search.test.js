import { render, screen } from "@testing-library/react"
import Body from '../components/Body';
import lists from "../mocks/mockResList.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(lists)
        }
    })
})

it("should render body with search", async () => {
    await act( async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

        
    })
    const cards = screen.getAllByTestId("res-card");

    expect(cards.length).toBe(9);   

    const searchInput = screen.getByTestId("search");

    expect(searchInput).toBeInTheDocument();
    
    
})