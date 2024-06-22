import { render } from '@testing-library/react';
import React from 'react';

import ListGenre from './app';

describe('List Genre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListGenre />);
    expect(baseElement).toBeTruthy();
  });
});
