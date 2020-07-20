module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'xo-space',
    'xo-react/space',
    'xo-typescript/space',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-tag-spacing': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    semi: ['error', 'never'],
    'valid-jsdoc': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off'
  }
}
