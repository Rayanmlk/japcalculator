import { render } from '@testing-library/react';
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
