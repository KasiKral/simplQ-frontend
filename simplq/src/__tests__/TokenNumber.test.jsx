import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Token from '../components/pages/Status/TokenNumber';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<Token />);
  expect(asFragment()).toMatchSnapshot();
});

it('generate token on page', () => {
  const arr = ['1234', '2356', '2349', '4103'];
  const token = arr[Math.floor(Math.random() * arr.length)];
  const { getByText } = render(<Token tokenNumber={token} />);
  expect(getByText(token)).toBeInTheDocument();
});

it("component's elements are setup correctly", () => {
  const { container } = render(<Token />);
  expect(container.firstChild).toHaveClass('token-number');
});
