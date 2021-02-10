module.exports = {
  // 规则配置的根目录在此
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier/@typescript-eslint',
    /**
     * prettier 必须放于最后
     * @see {@link https://github.com/prettier/eslint-config-prettier | Doc}
     * @see {@link https://github.com/prettier/eslint-plugin-prettier#recommended-configuration | Doc}
     */
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments | Doc}
     */
    es2020: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    // es2020 - adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
    // ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-unused-vars': 0,
  },
};
