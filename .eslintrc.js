module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:promise/recommended',
        'prettier',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    plugins: ['react', 'jsx-a11y', 'prettier', 'react-hooks', 'promise', 'babel'],
    rules: {
        'react/prop-types': 0,
        'no-console': 1,
    },
};
