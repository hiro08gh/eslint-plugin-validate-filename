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
    errorNoMatchExtensionType: "Don't match extension type.",
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

export const excludeExtensions: Rule.RuleModule = {
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
          const ext = path.extname(filePath);
          if (!targetRule.extensions.includes(ext)) {
            context.report({
              node,
              messageId: 'errorNoMatchExtensionType',
            });

            return;
          }
        }
      },
    };
  },
};
