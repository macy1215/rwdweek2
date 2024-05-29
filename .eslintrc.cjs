module.exports = {
  globals: {
    $: 'readonly', // jQuery，避免出現 '$' is not defined
    jQuery: 'readonly', // jQuery，避免出現 'jQuery' is not defined
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'], // 使用分号
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
      },
    ],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'], // 启用尾随逗号
  },
};
