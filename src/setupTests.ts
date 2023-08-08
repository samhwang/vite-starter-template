import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterAll, afterEach, expect } from 'vitest';
import { server } from './__mocks__/msw/server';

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
