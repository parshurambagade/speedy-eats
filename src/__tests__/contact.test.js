import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Contact from '../components/Contact';

test("should render heading", () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
})