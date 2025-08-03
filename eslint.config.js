import { globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  [
    globalIgnores([
      'dist/**',
      '**/dist',
      '**/dist/**',
      'public/**/*.js',
      'node_modules/**'
    ])
  ],
  {
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', {
          'argsIgnorePattern': '^_|_',
          'vars': 'all',
          'args': 'after-used',
          'ignoreRestSiblings': false,
          'varsIgnorePattern': '^I[A-Z]|^_',
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
)
