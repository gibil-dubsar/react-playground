// eslint.config.ts
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
    { ignores: ['dist'] },
    eslint.configs.recommended,
    {
      files: ['src/**/*.{ts,tsx}'],
      extends: [
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      ],
      languageOptions: {
        parserOptions: {
          project: true,
        },
        globals: {
          ...globals.browser,
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-undef': 'off',
      },
    },

    {
      files: ['src/**/*.{js,jsx}'],
      languageOptions: {
        globals: { ...globals.browser },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    },
    {
      files: [
        '**/*.config.{js,cjs,mjs,ts,cts,mts}',
        'vite.config.*',
        'eslint.config.*',
      ],
      languageOptions: {
        globals: { ...globals.node },
        parserOptions: { project: null },
      },
      rules: {
        'no-undef': 'off',
      },
    }
)
