import { RuleTester } from 'eslint';

import { limitExtensions } from '../../lib/rules/limit-extensions';

const ruleTester = new RuleTester();

ruleTester.run('limit-extensions', limitExtensions, {
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
