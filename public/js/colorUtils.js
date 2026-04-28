function isValidColorName(color) {
  return typeof color === "string" && color.trim().length > 0;
}

function formatColorName(color) {
  return color.trim().toLowerCase();
}

module.exports = {
  isValidColorName,
  formatColorName
};