module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: [
    "html",
    "prettier"
  ],
  extends: ['standard', 'prettier'],
  rules: {
    "prettier/prettier": ["error"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    'comma-dangle': ['error', {
      'objects': 'only-multiline',
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
