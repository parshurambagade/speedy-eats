import { fireEvent, logDOM, render, screen } from "@testing-library/react"
import Header from '../components/Header';
import { Provider } from "react-redux";
import appStore from '../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    //quering 
    const button = screen.getByRole("button", {name: 'Login'});
    
    //assertion
    expect(button).toBeInTheDocument();
});

it("Should render header component with cart", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
})

it("Should change login button into logout after click", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})