// @ts-check
module.exports = {
    extends: [
      "next/core-web-vitals",
      "prettier",
      "plugin:react-hooks/recommended",
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {"argsIgnorePattern": "^_"}]
    }
}
