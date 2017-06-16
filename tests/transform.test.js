"use strict";

const fs = require("fs");
const relative = require("path").relative;
const glob = require("glob");

describe("types-b-gone", () => {
  let bGone;

  beforeEach(() => {
    bGone = require("../");
  });

  it("exports a function", () => {
    expect(typeof bGone).toBe("function");
  });

  it("given an empty string, returns a string", () => {
    expect(bGone("")).toEqual("");
  });

  glob.sync(__dirname + "/*/**/*.[jt]s").forEach(testFile => {
    const source = fs.readFileSync(testFile).toString();

    it(`transforms ${relative(__dirname, testFile)}`, () => {
      const output = bGone(source);
      const actual = raw(source + "~".repeat(80) + "\n" + output);
      expect(actual).toMatchSnapshot(testFile);
    });
  });
});

function raw(string) {
  if (typeof string !== "string") {
    throw new Error("Raw snapshots have to be strings.");
  }
  return { [Symbol.for("raw")]: string };
}
