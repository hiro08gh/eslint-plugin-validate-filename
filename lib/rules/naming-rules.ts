import path from 'path';
import micromatch from 'micromatch';
import { regexCaseMap } from '../utils';

import { Rule } from 'eslint';

const meta: Rule.RuleModule['meta'] = {
  type: 'layout',
  docs: {
    description: '',
    category: '',
    recommended: false,
    url: '',
  },
  messages: {},
  schema: [
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        index: {
          type: 'boolean',
          default: true,
        },
        rules: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                enum: Object.keys(regexCaseMap),
                type: 'string',
              },
              target: {
                type: 'string',
              },
              patterns: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  ],
};

type RuleOptions = {
  index: boolean;
  rules: [
    {
      type: string;
      target: string;
      patterns: string;
    },
  ];
};

export const namingRules: Rule.RuleModule = {
  meta,
  create: (context) => {
    return {
      Program: (node) => {
        const { index, rules }: RuleOptions = context.options[0];
        const filePath = context.filename;
        if (!rules || !filePath) {
          return;
        }
      },
    };
  },
};
