module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint
    "plugin:@typescript-eslint/recommended",
    // https://eslint.vuejs.org/
    "plugin:vue/vue3-recommended",
    // https://github.com/prettier/eslint-config-prettier
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  ignorePatterns: ["src/shims-vue.d.ts", "src/shims-heroicons.d.ts"],
};
