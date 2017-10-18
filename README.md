## Don't Use This!

Awesome work is happening in babel. Check out the new [`babel-preset-typescript`](https://github.com/babel/babel/tree/master/packages/babel-preset-typescript) that does the same thing as this package, except better.

---

# Types B'Gone!
[![Build Status](https://travis-ci.org/azz/types-b-gone.svg?branch=master)](https://travis-ci.org/azz/types-b-gone)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


Converts your TypeScript code into JavaScript code in-place, in case you want drop TypeScript from your workflow.


TODO:
- [ ] Replace custom TypeScript syntax with JavaScript equavalents:

  - [ ] `constructor(private x) {}` :arrow_right: `constructor(x) { this.x = x }`
  - [x] `enum E { x = 1, y }` :arrow_right: `const E = enum({ "x": 1 }, "y")`
  - [ ] `namespace X {}`
  - [ ] Anything else?

- [ ]  Massage out type assertions:

  - [ ] `(x as X).foo()` :arrow_right: `x.foo()`

Stretch goals:

- Produce JSDoc that works with TypeScript's `--checkJs`.
- Convert from TypeScript to Flow.
- Produce `types.d.ts` file containing interfaces and types.

## why?

TypeScript is great, but its always nice to be able to back-out of a tool if you decide its not the right tool for the job. Kinda similar to [flow-remove-types](https://github.com/flowtype/flow-remove-types).

## install

```bash
yarn global add types-b-gone
```
## cli

Single file:

```bash
$ types-b-gone < ./src/MyFile.ts > ./src/MyFile.js
$ rm ./src/MyFile.ts
```

## api

```js
const bGone = require("types-b-gone");

bGone("function f<T>(): T {}"); // ==> "function f() {}"
```

## contributing

* Tests are ran with Jest via `yarn test`.
* Linted with eslint and prettier via `yarn lint`.
