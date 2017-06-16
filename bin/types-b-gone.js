#!/usr/bin/env node

"use strict";

const bGone = require("../");

require("get-stream")(process.stdin).then(input => {
  process.stdout.write(bGone(input));
});
