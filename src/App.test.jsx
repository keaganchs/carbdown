import { render, screen } from '@testing-library/react';
import App from './App';

test('Check app renders homepage', () => {
  render(<App />);
  const homeHeader = screen.getByText("Carbdown");
  expect(homeHeader).toBeInTheDocument();
});
