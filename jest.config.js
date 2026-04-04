/**
 * jest.config.js
 *
 * Jest test runner configuration.
 *
 * We use the ts-jest preset to compile TypeScript test files on the fly,
 * so you don't need to run `npm run build` before running tests.
 *
 * ESM :
 * -----
 * This project uses ES modules (type: "module" in package.json). Jest
 * needs special flags to support ESM. The `extensionsToTreatAsEsm` and
 * the `NODE_OPTIONS` in package.json scripts handle this.
 */

export default {
  preset              : 'ts-jest/presets/default-esm',
  testEnvironment     : 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper    : {
    // Remap .js imports to .ts source files so ts-jest can find them.
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM        : true,
        tsconfig      : { module: 'NodeNext' },
      },
    ],
  },
  testMatch   : ['**/__tests__/**/*.test.ts'],
  collectCoverage    : false,
  coverageDirectory  : 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
}
