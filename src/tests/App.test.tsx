import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Big brain, GO!
test('Determines the truthyness of being true', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
