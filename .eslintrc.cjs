module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [
      'error',
      'always'
    ],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'no-trailing-spaces': 'warn',
    'padded-blocks': 'warn',
    'no-multiple-empty-lines': 'warn',
    indent: [
      'warn',
      2
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  },
  ignorePatterns: [
    'dist',
    'build',
    'tsup.config.js',
    'vite.config.ts'
  ]
};
