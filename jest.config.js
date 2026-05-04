'use strict';

module.exports = {
  testEnvironment: 'node',
  testMatch: [
    'tests/unit/**/*.test.js',
    'tests/integration/**/*.test.js',
    'tests/property/**/*.test.js',
  ].map((p) => `<rootDir>/${p}`),
  testTimeout: 30000,
  forceExit: true,
};
