module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/self-closing-comp": 0,
    "no-param-reassign": 0,
    "import/prefer-default-export": 0,
    "no-eval": 0,
    "no-use-before-define": 0,
  },
};
