# Types B'Gone!

### [Work in Progress]

Converts your TypeScript code into JavaScript code in-place, in case you want drop TypeScript from your workflow.

## Install

```bash
yarn global add types-b-gone
```
## Usage - CLI

Single file:

```bash
types-b-gone < MyFile.ts > MyFile.js
rm MyFile.ts
```

## Usage - Programatic

```js
const bGone = require("types-b-gone");

bGone("function f<T>(): T {}"); // ==> "function f() {}"
```
