import path from 'path';
import micromatch from 'micromatch';

import { Rule } from 'eslint';

const meta: Rule.RuleModule['meta'] = {
  type: 'layout',
  docs: {
    description: 'Only certain extensions are allowed.',
    recommended: false,
    url: '',
  },
  messages: {
    errorNoMatchExtensionType:
      '{{filename}} does not match filename extension type. Only {{extensions}} is allowed.',
    errorNoMatchExtensionTypes:
      '{{filename}} does not match filename extension type. Only {{extensions}} are allowed.',
  },
  schema: [
    {
      type: 'object',
      additionalProperties: false,
      properties: {
        rules: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            properties: {
              target: {
                type: 'string',
              },
              extensions: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  ],
};

type RuleOptions = {
  rules: [
    {
      target: string;
      extensions: string[];
    },
  ];
};

export const limitExtensions: Rule.RuleModule = {
  meta,
  create: (context) => {
    return {
      Program: (node) => {
        const { rules }: RuleOptions = context.options[0];
        const filePath = context.filename;
        if (!rules || !filePath) {
          return;
        }
        /**
         * check target filename
         **/
        const targetRule = rules.find((v) =>
          micromatch.isMatch(filePath, v.target),
        );
        if (targetRule) {
          const filename = path.basename(filePath);
          const ext = path.extname(filePath);
          if (!targetRule.extensions.includes(ext)) {
            context.report({
              node,
              messageId:
                targetRule.extensions.length === 1
                  ? 'errorNoMatchExtensionType'
                  : 'errorNoMatchExtensionTypes',
              data: {
                filename,
                extensions: targetRule.extensions.join(', '),
              },
            });

            return;
          }
        }
      },
    };
  },
};
