import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  {
    ignores: ['__generated__/**', 'node_modules/**', 'dist/**', 'build/**'],
  }
);