/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import { Key } from './key';

describe('Given the component Key', () => {
  const mockKey = '1';
  describe('When calling it with a key', () => {
    test('Then it should be rendered', () => {
      render(<Key item={mockKey} />);

      // Assert
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});
