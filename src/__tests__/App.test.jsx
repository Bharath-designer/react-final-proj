import { render, waitFor } from '@testing-library/react';
import App from '../App'; 
import '@testing-library/jest-dom';

test('renders "page loading..." text', async () => {
  const { getByText } = render(<App />);

  await waitFor(() => {
    const textElement = getByText(/page loading.../i);
    expect(textElement).toBeInTheDocument();
  });
});
