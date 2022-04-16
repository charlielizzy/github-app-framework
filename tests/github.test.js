const GitAccount = require("../classes/github.js");
const axios = require("axios");
const OCTOCAT_DATA = require("../mocks/github_stats.js");

jest.mock("axios");

describe("GitHub API getUserData method", () => {
  it("should return back octocat's data", async () => {
    axios.get.mockResolvedValue(OCTOCAT_DATA);
    const data = await new GitAccount().getUserData("octocat");
    expect(data.repos).toEqual(8);
  });

  //   it("should throw an error if API call fails", async () => {
  //     axios.get.mockRejectedValue(new Error());
  //     const account = new GitAccount();
  //     await expect(account.getUserData("octocat")).rejects.toThrow("new error");
  //   });
});
