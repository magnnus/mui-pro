module.exports = {
  // 规则配置的根目录在此
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier/@typescript-eslint',
    'prettier/react',
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
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'anchor-is-valid': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'typescript-eslint/lines-between-class-members': 'off',
    // 'react/static-property-placement': ['warn', 'static public field'],
    'react/static-property-placement': 'off',

    'no-unused-vars': 0,
    'react/no-unused-state': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': 'off',
  },
};
