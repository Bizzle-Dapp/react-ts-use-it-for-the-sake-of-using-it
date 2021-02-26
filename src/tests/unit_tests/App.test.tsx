import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';


// Big brain, GO!
test('Determines the truthyness of being true', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
 

test('If Routing from App to Time on App works.',  () => {
  render(<App />)
  let header = screen.getByText((content, element) => {
    return element?.tagName.toLowerCase() === 'h1' && content.startsWith('Home');
  })
  expect(header).toBeDefined();
  screen.getByText('Time on App').click();
  header = screen.getByText((content, element) => {
    return element?.tagName.toLowerCase() === 'h1' && content.startsWith('Time on App');
  })
  expect(header).toBeDefined();
})
