const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  configs: {
    recommended: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
      },
      env: {
        browser: true,
        node: true,
        commonjs: true,
        serviceworker: true,
        jest: true,
      },
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended',
        'prettier',
      ],
      plugins: ['react-hooks'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_+$' }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/camelcase': ['off', { allow: ['__webpack_public_path__'] }],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off',
        'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
        'no-shadow': 'error',
        'security/detect-child-process': 'off',
        'security/detect-object-injection': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    }
  }
}