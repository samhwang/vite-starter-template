import '@testing-library/jest-dom';
import 'jest-extended';
import 'jest-extended/all';
import { server } from './__mocks__/msw/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
