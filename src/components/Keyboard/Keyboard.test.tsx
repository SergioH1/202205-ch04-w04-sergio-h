import { render, screen } from '@testing-library/react';
import { Keyboard } from './Keyboard';

/* eslint-disable no-undef */
describe('Given the component Keyboard', () => {
  const mockKeyboard = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'delete',
  ];
  describe('When calling it with a key', () => {
    test('Then it should be rendered', () => {
      render(<Keyboard item={mockKeyboard} />);

      // Assert
      expect(screen.getAllByRole('listitem')).toHaveLength(mockKeyboard.length);
    });
  });
});
