import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '../components/common/ClickableLogo';

afterEach(cleanup);

it('renders correctly', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
});

it("click event", () => {
    const click = jest.fn();
    const { getByText, container } = render(<Logo onClick={click} />);
    fireEvent.click(getByText("SimplQ"));
    fireEvent.click(container.firstChild);
    fireEvent.click(container.querySelector("img"));
    // User clicked on 3 different dom elements
    expect(click).toHaveBeenCalledTimes(3);
});

it("component's elements are setup correctly", () => {
    const { container } = render(<Logo />);
    expect(container.querySelector("img")).toHaveAttribute("src");
    expect(container.querySelector("img")).toHaveAttribute("alt");
    expect(container.firstChild).toHaveClass('logo');
});
