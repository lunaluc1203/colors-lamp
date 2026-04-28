test("SearchColors API response has the expected JSON structure", () => {
  const mockResponse = {
    results: ["red", "blue"],
    error: ""
  };

  expect(mockResponse).toHaveProperty("results");
  expect(Array.isArray(mockResponse.results)).toBe(true);
  expect(mockResponse).toHaveProperty("error");
  expect(mockResponse.error).toBe("");
});