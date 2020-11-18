import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '../components/common/InputField';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<InputField />);
  expect(asFragment()).toMatchSnapshot();
});

it('Name placholder change', () => {
  const placeholderText = 'UserInput';
  let userInput = 'Input';
  const { getByPlaceholderText } = render(<InputField placeholder={placeholderText} />);
  fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: userInput } });
  expect(getByPlaceholderText(placeholderText)).toHaveValue(userInput);
});
