# eslint-plugin-validate-filename

ESLint rule to force file names format. You can define folder names and patterns. Create common rules for file names by folder name or regex pattern.

## Install

```sh
npm install --save-dev eslint-plugin-validate-filename
```

## Uasge

```javascript
{
  "plugins": ["validate-filename"]
}
```

### validate-filename/naming-rules

Create a rule in the name of ESLint. `index` is an option that determines whether files with index in the filename are allowed. You can set multiple `rules`.

```javascript
{
  "rules": {
    "validate-filename/naming-rules": [
      "error",
      {
        index: true,
        rules: [
          {
            type: 'camel', // camel or pascal or snake or kebab or flat
            target: "**/hooks/**",
            patterns: '^use',
          }
        ] 
      }
    ],
}
```

### validate-filename/exclude-extensions

Only certain extensions are allowed. `target` is a regular expression that identifies the folder. `extensions` you want to allow for extensions.

```javascript
{
  "rules": {
    "validate-filename/exclude-extensions": [
      "error",
      {
        rules: [
          {
            target: "**/hooks/**",
            extensions: ['.ts', '.tsx'], // This cannot be created except for .ts or .tsx under the hooks folder.
          }
        ]
      }
    ],
}
```

## Next.js structure settings example

TODO
