import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';
import { server } from './__mocks__/msw/server';

declare global {
  namespace Vi {
    interface JestAssertion<T = unknown> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
