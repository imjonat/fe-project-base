module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    es6: true
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it"s not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    'eol-last': 'off',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'linebreak-style': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-shadow': [
      'off',
      {
        hoist: 'all'
      }
    ],
    'no-trailing-spaces': 'error',
    'no-unsafe-finally': 'error',
    'no-var': 'error',
    'quote-props': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'prefer-promise-reject-errors': 'off'
  }
}
