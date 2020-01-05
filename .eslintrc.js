const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['eslint-plugin-import-helpers', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          'module',
          '/^@//',
          '/^@server/',
          '/^@libs/',
          '/^@domains/',
          '/^@helpers/',
          '/^@interfaces/',
          [('parent', 'sibling', 'index')]
        ],
        newlinesBetween: 'always'
      }
    ]
  }
}
