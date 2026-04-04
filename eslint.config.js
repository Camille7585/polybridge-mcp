/**
 * eslint.config.js
 *
 * ESLint configuration using the "flat config" format (ESLint 9+).
 *
 * What is ESLint ?
 * ----------------
 * ESLint is a "linter" — a tool that scans your code and reports potential
 * problems without running it. It catches things like :
 *   - Variables declared but never used
 *   - Missing `await` before async calls
 *   - Inconsistent code style
 *
 * Run it with : npm run lint
 *
 * The @typescript-eslint rules extend ESLint with TypeScript-aware checks.
 */

import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.recommended,

  {
    // Apply these rules to all TypeScript source files.
    files: ['src/**/*.ts'],

    rules: {
      // Allow `_` prefixed variables to be intentionally unused.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // `any` is sometimes unavoidable at boundary points.
      '@typescript-eslint/no-explicit-any': 'warn',

      // Require consistent use of `type` for type-only imports.
      '@typescript-eslint/consistent-type-imports': 'error',

      // Avoid floating promises (missing await).
      '@typescript-eslint/no-floating-promises': 'error',

      // Disallow using a variable before it is defined.
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    },
  },

  {
    // Exclude compiled output and third-party code.
    ignores: ['dist/', 'node_modules/', 'jest.config.js', 'eslint.config.js'],
  }
)
