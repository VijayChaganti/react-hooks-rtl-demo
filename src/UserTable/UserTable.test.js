import React from 'react';
import { render } from '@testing-library/react';
import UserTable from './UserTable';

test('renders actions table header', () => {
  const { getByText } = render(<UserTable />);
  const actionsHeaderElement = getByText(/actions/i);
  expect(actionsHeaderElement).toBeInTheDocument();
});

test('renders user Bob', () => {
    const users = [{id: 1, name: 'Bob', username: 'BurgerMan'}];
    const { getByText } = render(<UserTable users={users} />);
    const bobTextElement = getByText(/bob/i);
    expect(bobTextElement).toBeInTheDocument();
})