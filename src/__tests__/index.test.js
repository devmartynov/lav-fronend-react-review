jest.mock("react-dom");

describe("App Entry Point - /src/index.js", () => {
  it("renders app without error", () => {
    require("../../src/index.js");
  });
});