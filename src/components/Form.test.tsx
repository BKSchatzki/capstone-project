// Form.test.tsx

import { BrowserRouter as Router } from 'react-router-dom';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

const renderForm = () => {
  render(
    <Router>
      <Form />
    </Router>
  );
};

describe('Form Component', () => {
  test('renders the form correctly', () => {
    renderForm();
    expect(screen.getByLabelText(/Date/i)).toBeDefined();
    expect(screen.getByLabelText(/Time/i)).toBeDefined();
    expect(screen.getByLabelText(/Name/i)).toBeDefined();
    expect(screen.getByLabelText(/# Guests/i)).toBeDefined();
    expect(screen.getByLabelText(/Email/i)).toBeDefined();
    expect(screen.getByLabelText(/Phone Number/i)).toBeDefined();
    expect(screen.getByLabelText(/Special Notes/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Confirm reservation/i })).toBeDefined();
  });

  test('validates and submits the form correctly', async () => {
    renderForm();
    const user = userEvent.setup();
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    const nameInput = screen.getByLabelText(/Name/i);
    const guestsInput = screen.getByLabelText(/# Guests/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const specialNotesInput = screen.getByLabelText(/Special Notes/i);
    await user.clear(dateInput);
    await user.type(dateInput, '2024-01-01');
    await user.clear(timeInput);
    await user.type(timeInput, '18:00');
    await user.type(nameInput, 'John Doe');
    await user.clear(guestsInput);
    await user.type(guestsInput, '4');
    await user.type(emailInput, 'john.doe@example.com');
    await user.type(phoneInput, '1234567890');
    await user.type(specialNotesInput, 'Special notes');
    const submitButton = screen.getByRole('button', { name: /Confirm reservation/i });
    fireEvent.click(submitButton);
    const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
    expect(savedData.date).toBe('2024-01-01');
    expect(savedData.time).toBe('18:00');
    expect(savedData.name).toBe('John Doe');
    expect(savedData.guests).toBe(4);
    expect(savedData.email).toBe('john.doe@example.com');
    expect(savedData.phone).toBe('1234567890');
    expect(savedData.specialNotes).toBe('Special notes');
    expect(window.location.pathname).toBe('/success');
  });

  test('shows validation errors', async () => {
    renderForm();
    const submitButton = screen.getByRole('button', { name: /Confirm reservation/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/Please select a date/i)).toBeDefined();
    expect(screen.getByText(/Please select a time/i)).toBeDefined();
    expect(screen.getByText(/Please enter your name/i)).toBeDefined();
    expect(screen.getByText(/Please enter the number of guests/i)).toBeDefined();
    expect(screen.getByText(/Please enter your email/i)).toBeDefined();
    expect(screen.getByText(/Please enter your phone number/i)).toBeDefined();
  });

  test('applies correct styling when there are validation errors', () => {
    renderForm();
    const submitButton = screen.getByRole('button', { name: /Confirm reservation/i });
    fireEvent.click(submitButton);
  });
});
