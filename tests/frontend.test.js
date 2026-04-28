const { isValidColorName, formatColorName } = require("../public/js/colorUtils");

test("validates that a color name is not empty", () => {
  expect(isValidColorName("blue")).toBe(true);
  expect(isValidColorName("   ")).toBe(false);
  expect(isValidColorName("")).toBe(false);
});

test("formats color names by trimming and lowercasing", () => {
  expect(formatColorName("  RED  ")).toBe("red");
});