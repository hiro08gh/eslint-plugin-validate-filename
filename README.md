# eslint-plugin-validate-filename

ESLint rule to force file names format. Create common rules for file names by folder name or regex pattern.

## Install

```sh
npm install --save-dev eslint-plugin-validate-filename
```

## Usage

```javascript
{
  "plugins": ["validate-filename"]
}
```

### validate-filename/naming-rules

Create a rule in the name of ESLint. You can set multiple `rules`.

```javascript
{
  "rules": {
    "validate-filename/naming-rules": [
      "error",
      {
        rules: [
          {
            case: 'pascal', // camel or pascal or snake or kebab or flat
            target: "**/components/**", // target "components" folder
            excludes: ['hooks'], // "hooks" folder is excluded.
          },
          {
            case: 'camel',
            target: "**/hooks/**", // target "hooks" folder
            patterns: '^use', // file names begin with "use".
          },
          {
            target: '/schemas/**', // target "schemas" folder
            patterns: '^[a-z][a-zA-Z0-9]*\\.schema\\.ts$', // file names that contain 'schema'. ex: user.schema.ts
          },
        ] 
      }
    ],
}
```

### validate-filename/limit-extensions

Only certain extensions are allowed. `target` is a regular expression that identifies the folder. `extensions` you want to allow for extensions.

```javascript
{
  "rules": {
    "validate-filename/limit-extensions": [
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

## Development

First, install npm dependencies.

```bash
npm install
```

Running unit test. This library uses vitest.

```bash
npm run test
```

Build modules.

```bash
npm run build
```


## Next.js structure settings example

See [Next.js naming conventions are checked with ESLint rules](https://medium.com/@hiro08gh/next-js-naming-conventions-are-checked-with-eslint-rules-946371d67882)
 article.

## License

MIT License.© [hiro08gh](https://github.com/hiro08gh)
