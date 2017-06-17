# Types B'Gone!
[![Build Status](https://travis-ci.org/azz/types-b-gone.svg?branch=master)](https://travis-ci.org/azz/types-b-gone)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


Converts your TypeScript code into JavaScript code in-place, in case you want drop TypeScript from your workflow.

### [Work in Progress]

TODO:
- [ ] Replace custom TypeScript syntax with JavaScript equavalents:

  - [ ] `constructor(private x) {}` :arrow_right: `constructor(x) { this.x = x}`
  - [x] `enum E { x = 1, y }` :arrow_right: `const E = enum({ "x": 1 }, "y")`
  - [ ] `namespace X {}`
  - [ ] Anything else?
  
- [ ]  Massage out type assertions:

  - [ ] `(f as X).foo()` :arrow_right: `x.foo()`

- [ ]  Produce JSDoc that works with TypeScript's `--checkJs`

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

## Contributing

* Tests are ran with Jest via `yarn test`.
* Linted with eslint and prettier via `yarn lint`.
