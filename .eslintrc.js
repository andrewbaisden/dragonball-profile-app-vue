module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  "plugins": [
    "prettier"
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    "prettier/prettier": [
      "error",
      {
          "trailingComma": "none",
          "singleQuote": true,
          "printWidth": 120
      }
  ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}