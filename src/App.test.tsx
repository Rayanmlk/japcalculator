import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from './App';

// jest.mock("mapbox-gl", () => {
//   return {
//     Map: function() {
//       (this as any).on = jest.fn();
//     },
//     Marker: function() {
//       (this as any).setLngLat = function() {
//         return this;
//       };
//       (this as any).addTo = jest.fn();
//     }
//   };
// });

test('renders App', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('reset button sets the counters back to 0', () => {
  const { getAllByText, getByText } = render(<App />);

  // add one sushi (45 kcal)
  fireEvent.click(getAllByText('+')[0]);
  expect(getByText('45 Kcal')).toBeInTheDocument();

  fireEvent.click(getByText('Reset'));
  expect(getByText('0 Kcal')).toBeInTheDocument();
});
