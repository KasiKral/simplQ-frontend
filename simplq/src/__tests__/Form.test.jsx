/* eslint-disable */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/pages/Join/Form';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});

describe('<Form>', () => {
  it('Name placholder Onchange', () => {
    const { getByPlaceholderText } = render(<Form />);

    const placeholderText = 'Name';
    let userInput = 'Adam';
    fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: userInput } });
    expect(getByPlaceholderText(placeholderText)).toHaveValue(userInput);
  });

  it('Number placholder Onchange', () => {
    const { getByPlaceholderText, getByRole } = render(<Form />);
    const prefix = getByRole('button', { name: /india: \+ 91/i });

    const placeholderText = 'Phone Number';
    let userInput = '8555214486';
    fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: userInput } });
    expect(getByPlaceholderText(placeholderText)).toHaveValue(`+${'855 521 448 6'}`);
    expect(prefix).toBeInTheDocument();
  });
});
