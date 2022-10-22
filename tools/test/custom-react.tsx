import React, { FC, ReactElement } from 'react';
// This is the file where we're redefining testing library
// eslint-disable-next-line no-restricted-imports
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@app';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line no-restricted-imports
export * from '@testing-library/react';
export { customRender as render };
