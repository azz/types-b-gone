"use strict";

const b = require("ast-types").builders;

// eslint-disable-next-line no-unused-vars
module.exports = function(node, parent, opts) {
  return b.variableDeclaration("const", [
    b.variableDeclarator(
      node.name,
      b.callExpression(b.identifier("__enum"), buildEnumMembers(node))
    )
  ]);
};

function buildEnumMembers(node) {
  return node.members.map(member => {
    return member.initializer
      ? b.arrayExpression([b.literal(member.name.name), member.initializer])
      : b.literal(member.name.name);
  });
}
