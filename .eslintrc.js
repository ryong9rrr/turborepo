// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@repo/eslint-config/base.js'],
  parserOptions: {
    project: true,
  },
};
