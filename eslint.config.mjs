export default [
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        XMLHttpRequest: "readonly",
        localStorage: "readonly",
        md5: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"]
    }
  }
];