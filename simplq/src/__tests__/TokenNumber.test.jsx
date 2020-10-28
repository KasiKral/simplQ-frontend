import React from 'react';
import { render, fireEvent, cleanup, getByTitle } from '@testing-library/react';
import '@testing-library/jest-dom';
import Token from '../components/pages/Status/TokenNumber';

afterEach(cleanup);

it('renders correctly', () => {
    const { asFragment } = render(<Token />);
    expect(asFragment()).toMatchSnapshot();
});

it('generate token on page', () => {
    const { getByText, getByRole } = render(<Token tokenNumber="1234" />);
    expect(getByText("1234")).toBeTruthy();
});

it("component's elements are setup correctly", () => {
    const { container } = render(<Token />);;
    expect(container.firstChild).toHaveClass('token-number');
});