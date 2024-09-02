import { RuleTester } from 'eslint';

import { namingRules } from '../../lib/rules/naming-rules';

const ruleTester = new RuleTester();

ruleTester.run('naming-rules', namingRules, {
  valid: [
    {
      code: '',
      filename: '/components/App.tsx',
      options: [
        {
          rules: [
            {
              case: 'pascal',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: '/components/App.stories.tsx',
      options: [
        {
          rules: [
            {
              case: 'pascal',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: '/components/_document.tsx',
      options: [
        {
          rules: [
            {
              case: 'camel',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: 'components/hooks/useHooks.tsx',
      options: [
        {
          rules: [
            {
              case: 'pascal',
              target: '**/components/**/*.tsx',
              excludes: ['hooks'],
            },
            {
              case: 'camel',
              target: '**/utils/**/*.ts',
            },
            {
              case: 'camel',
              target: '**/hooks/**/*.tsx',
              patterns: '^use',
            },
          ],
        },
      ],
    },
    {
      code: '',
      filename: '/components/hooks/useHooks.tsx',
      options: [
        {
          rules: [
            {
              case: 'camel',
              target: '**/hooks/**/*.tsx',
              patterns: '^use',
            },
          ],
        },
      ],
    },
  ],
  invalid: [
    {
      code: '',
      filename: '/components/App/App.tsx',
      options: [
        {
          rules: [
            {
              case: 'camel',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
      errors: [
        'App.tsx does not match filename case. Rename it to camel case.',
      ],
    },
    {
      code: '',
      filename: '/hooks/hooks.tsx',
      options: [
        {
          rules: [
            {
              case: 'camel',
              target: '**/hooks/**/*.tsx',
              patterns: '^use',
            },
          ],
        },
      ],
      errors: ['hooks.tsx does not match filename pattern.'],
    },
  ],
});
