module.exports = {
   env: {
      es6: true,
      browser: true,
      node: true,
   },
   plugins: ['@typescript-eslint', 'import'],
   extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'airbnb-typescript/base',
      'plugin:@typescript-eslint/recommended',
   ],

   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json',
      parser: '@typescript-eslint/parser',
      tsconfigRootDir: __dirname,
      extraFileExtensions: ['.vue']
   },

   settings: {
      'import/resolver': {
         node: { extensions: ['.js', '.mjs', '.ts', '.vue'] },
         typescript: {}
      },
   },

   overrides: [
      {
         files: ['*.vue'],
         parser: 'vue-eslint-parser',
         parserOptions: {
            parser: '@typescript-eslint/parser',
         },
         rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',

            'vue/html-indent': ['error', 3],
            'vue/component-tags-order': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/max-attributes-per-line': [
               'error',
               {
                  singleline: 3,
                  multiline: {
                     max: 1,
                     allowFirstLine: false,
                  },
               },
            ],
         },
      },
   ],

   rules: {
      'no-console': 'off',
      'no-debugger': 'off',

      'max-len': ['error', 150],
      'no-plusplus': 'off',
      'comma-dangle': 'off',
      'linebreak-style': 'off',

      '@typescript-eslint/indent': ['error', 3],
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-empty-function': 'off',

      'no-param-reassign': 'warn',
      'import/no-absolute-path': 'warn',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': [
         'error',
         {
            devDependencies: true,
         },
      ]
   },
};
