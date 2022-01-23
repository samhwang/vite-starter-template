import type { Config } from '@jest/types';

const baseConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  testPathIgnorePatterns: ['dist'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  roots: ['<rootDir>/src'],
  resetMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.+(ts|tsx|js)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mocks__/file-mock.js`,
  },
};

export default baseConfig;
