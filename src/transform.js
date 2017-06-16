"use strict";

const parse = require("typescript-eslint-parser").parse;
const print = require("recast").print;

function transform(text) {
  const ast = parse(text);
  convert(ast, undefined, { text });
  return print(ast).code;
}

const remove = Symbol("remove");

// eslint-disable-next-line no-unused-vars
function convert(node, parent, opts) {
  if (!node || !node.type) {
    return node;
  }

  if (node.type === "TSEnumDeclaration") {
    return require("./enum")(node, parent, opts);
  }

  if (
    node.type.startsWith("TS") ||
    node.type.indexOf("Type") > -1 ||
    node.type.indexOf("Annotation") > -1 ||
    node.type === "DeclareFunction"
  ) {
    return remove;
  }

  Object.keys(node).forEach(property => {
    if (Array.isArray(node[property])) {
      node[property] = node[property]
        .map(child => convert(child, node, opts))
        .filter(child => child !== remove);
    } else {
      const child = convert(node[property], node, opts);
      if (child === remove) {
        delete node[property];
      } else if (child) {
        node[property] = child;
      }
    }
  });

  return node;
}

module.exports = transform;
