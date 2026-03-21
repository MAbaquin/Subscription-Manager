/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(svg|png|jpg|jpeg|gif|webp)$': '<rootDir>/src/tests/__mocks__/fileMock.cjs',
    '\\.(css|less|scss)$': '<rootDir>/src/tests/__mocks__/fileMock.cjs',
  },
};

module.exports = config;
