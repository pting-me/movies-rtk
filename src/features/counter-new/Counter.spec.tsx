import { Counter } from './Counter';
import { render } from '@custom-testing-library/react';

import { describe, it, expect } from 'vitest';

describe('Counter', () => {
  it('should render', () => {
    const { baseElement } = render(<Counter />);
    expect(baseElement).toBeInTheDocument();
  });
});
