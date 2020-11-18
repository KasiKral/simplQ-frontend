import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/common/Header/Header';

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});

it('contains correct class', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toHaveClass('header');
});

it('contains correct class', () => {
  const { getByText } = render(<Header children={'Some Heading'} />);
  expect(getByText('Some Heading')).toBeTruthy();
});

it('contains class from props', () => {
  const { container } = render(<Header className="style" />);
  expect(container.firstChild).toHaveClass('style');
});
