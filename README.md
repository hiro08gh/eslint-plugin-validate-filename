# eslint-plugin-validate-filename

ESLint rule to force file names format. You can define folder names and patterns. Create common rules for file names by folder name or regex pattern.

## Install

```sh
npm install --save-dev eslint-plugin-validate-filename
```

## Uasge

TODO

```javascript
{
  "plugins": ["validate-filename"]
}
```

TODO


### validate-filename/naming-rules

```javascript
{
  "rules": {
    "validate-filename/naming-rule": [
      "error",
      {
        index: true,
        rules: [
          {
            type: 'camel',
            target: "**/hooks/",
            patterns: ['/^use/'],
          }
        ] 
      }
    ],
}
```

### validate-filename/exclude-extension

```javascript
{
  "rules": {
    "validate-filename/exclude-extension": [
      "error",
      {
        rules: [
          {
            target: "**/hooks/",
            extensions: ['.ts'],
          }
        ]
      }
    ],
}
```

## Next.js structure setting example

TODO