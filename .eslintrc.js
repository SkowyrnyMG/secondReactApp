module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: 0,
    'no-confusing-arrow': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'linebreak-style': 0,
    'max-len': ['error', { code: 120 }],
    'implicit-arrow-linebreak': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
  },
};
