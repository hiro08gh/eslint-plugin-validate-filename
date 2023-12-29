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
              type: 'pascal',
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
              type: 'camel',
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
              type: 'camel',
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
              type: 'pascal',
              target: '**/components/**/*.tsx',
              excludes: ['hooks'],
            },
            {
              type: 'camel',
              target: '**/utils/**/*.ts',
            },
            {
              type: 'camel',
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
              type: 'camel',
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
      filename: '/components/App/index.tsx',
      options: [
        {
          index: false,
          rules: [
            {
              type: 'pascal',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
      errors: ["Don't use index filename"],
    },
    {
      code: '',
      filename: '/components/App/App.tsx',
      options: [
        {
          rules: [
            {
              type: 'camel',
              target: '**/components/**/*.tsx',
            },
          ],
        },
      ],
      errors: ['App.tsx does not match filename type'],
    },
    {
      code: '',
      filename: '/hooks/hooks.tsx',
      options: [
        {
          rules: [
            {
              type: 'camel',
              target: '**/hooks/**/*.tsx',
              patterns: '^use',
            },
          ],
        },
      ],
      errors: ['hooks.tsx does not match filename pattern'],
    },
  ],
});
