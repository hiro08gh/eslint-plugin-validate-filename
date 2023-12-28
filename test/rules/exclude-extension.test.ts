import { RuleTester } from 'eslint';

import { excludeExtension } from '../../lib/rules/exclude-extension';

const ruleTester = new RuleTester();

ruleTester.run('exclude-extension', excludeExtension, {
  valid: [
    {
      code: '',
      filename: '/components/App.tsx',
      options: [
        {
          rules: [
            {
              target: '*',
              extensions: ['.tsx', '.ts'],
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: '/components/App.ts',
      options: [
        {
          rules: [
            {
              target: '*',
              extensions: ['.tsx', '.ts'],
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: '/components/App/App.tsx',
      options: [
        {
          rules: [
            {
              target: '**/components/**',
              extensions: ['.tsx'],
            },
          ],
        },
      ],
    },
  ],
  invalid: [
    {
      code: '',
      filename: '/components/App/index.vue',
      options: [
        {
          rules: [
            {
              target: '**/components/**',
              extensions: ['.tsx'],
            },
          ],
        },
      ],
      errors: ["Don't match extension type."],
    },
  ],
});
