import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from '../02/ToggleButton';

describe('ToggleButton', () => {
  test('Displays initial text', () => {
    render(<ToggleButton />);
    const initalTextElement = screen.getByText(/początkowy tekst/i);
    expect(initalTextElement).toBeInTheDocument();
  });

  test('Changes text on button click', () => {
    render(<ToggleButton />);
    const buttonElement = screen.getByRole('button', { name: /zmień tekst/i });
    fireEvent.click(buttonElement);
    const changedTextElement = screen.getByText(/zmieniony tekst/i);
    expect(changedTextElement).toBeInTheDocument();
  });
});
