/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
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

module.exports = config;
