
const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTotal } = require("./app");

test("calculates checkout total correctly", () => {
  assert.equal(calculateTotal(500, 2), 1000);
});
