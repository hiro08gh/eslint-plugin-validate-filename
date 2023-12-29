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
  messages: {
    errorNoIndex: "Don't use index filename",
    errorNoMatchCase: '{{file}} does not match filename case',
    errorNoMatchPattern: '{{file}} does not match filename pattern',
  },
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
              case: {
                enum: Object.keys(regexCaseMap),
                type: 'string',
              },
              target: {
                type: 'string',
              },
              patterns: {
                type: 'string',
              },
              excludes: {
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
  index: boolean;
  rules: [
    {
      case: keyof typeof regexCaseMap;
      target: string;
      patterns: string;
      excludes: string[];
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
        /**
         * target filename
         **/
        const dirPath = path.dirname(filePath);
        const dirName = path.basename(dirPath);
        const targetRule = rules.find(
          (v) =>
            micromatch.isMatch(filePath, v.target) &&
            !v.excludes?.includes(dirName),
        );
        if (targetRule) {
          const ext = path.extname(filePath);
          const file = path.basename(filePath);
          const filename = path.basename(filePath, ext);
          if (index === true && filename === 'index') {
            return;
          }
          /**
           * check enable index filename. default: true
           **/
          if (index === false && filename === 'index') {
            context.report({
              node,
              messageId: 'errorNoIndex',
            });

            return;
          }

          if (
            !micromatch.isMatch(
              // Consider cases with leading underscores. (ex: _document.tsx)
              filename.replace(/^_/, ''),
              regexCaseMap[targetRule.case],
            )
          ) {
            context.report({
              node,
              messageId: 'errorNoMatchCase',
              data: {
                file,
              },
            });

            return;
          }

          if (targetRule.patterns) {
            const pattern = new RegExp(targetRule.patterns);
            if (!pattern.test(file)) {
              context.report({
                node,
                messageId: 'errorNoMatchPattern',
                data: {
                  file,
                },
              });

              return;
            }
          }
        }
      },
    };
  },
};
