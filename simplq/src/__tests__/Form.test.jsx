import React from 'react';
import { render, fireEvent, cleanup, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/pages/Join/Form';

afterEach(cleanup);

it('renders correctly', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
});

describe("<Form>", () => {
    it("Name placholder change", () => {
        const { getByPlaceholderText } = render(<Form />);

        const placeholderText = 'Name';
        let userInput = "Adam";
        fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: userInput } });
        expect(getByPlaceholderText(placeholderText)).toHaveValue(userInput);
    });

    it("Number placholder change", () => {
        const { getByPlaceholderText } = render(<Form />);

        const placeholderText = 'Phone Number';
        let userInput = "8555214486";
        fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: userInput } });
        expect(getByPlaceholderText(placeholderText)).toHaveValue(`+${"855 521 448 6"}`);
    });

    it("Contains submit button", () => {
        const { getByText, container } = render(<Form />);
        fireEvent.click(getByText('Join Queue'));
    });
});