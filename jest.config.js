module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/.*.stories.[jt]sx?$',
    '/.*.test.[jt]sx?$',
    '/node_modules'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['<rootDir>/tests/utils/setupTests.ts'],
  moduleDirectories: ['node_modules', __dirname],
  testPathIgnorePatterns: ['/node_modules/']
};
