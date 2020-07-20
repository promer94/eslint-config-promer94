## Install

```
$ npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-config-xo eslint-config-xo-react eslint-config-xo-space eslint-config-xo-typescript eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-promer94
```

## Standalone Usage

Add some ESLint config to your package.json (or `.eslintrc`):

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"promer94"
		]
	}
}
```

*Note:* If your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"promer94"
		],
		"parserOptions": {
			"project": "some-path/tsconfig.json"
		}
	}
}
```
