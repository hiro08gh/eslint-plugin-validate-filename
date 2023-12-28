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

### validate-filename/naming-rules

```javascript
{
  "rules": {
    "validate-filename/naming-rules": [
      "error",
      {
        index: true,
        rules: [
          {
            type: 'camel',
            target: "**/hooks/**",
            patterns: '^use',
          }
        ] 
      }
    ],
}
```

### validate-filename/exclude-extension

Only certain extensions are allowed. `target` is a regular expression that identifies the folder. `extensions` you want to allow for extensions.

```javascript
{
  "rules": {
    "validate-filename/exclude-extension": [
      "error",
      {
        rules: [
          {
            target: "**/hooks/**",
            extensions: ['.ts'], // This cannot be created except for .ts under the hooks folder.
          }
        ]
      }
    ],
}
```

## Next.js structure setting example

TODO
