import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import {
  attachJiraIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
} from "./utils";
test.describe("PullRequestsWebTest", () => {
  test.beforeEach(() => {
    allure.label({ name: "layer", value: "web" });
    allure.owner("eroshenkoam");
    allure.feature("Pull Requests");
  });
  test("Creating new pull request for authorized user", async () => {
    allure.tag("web", "regress", "smoke");
    attachJiraIssue("AE-1");
    attachJiraIssue("AE-2");
    allure.story("Create new pull request");
    attachMicroservice("Billing");

    await authorize();
    await createNewEntity("pull request");
  });
  test("Deleting existing pull request for authorized user", async () => {
    attachJiraIssue("AE-2");
    allure.tag("web", "regress");
    allure.story("Close existing pull request");
    attachMicroservice("Repository");

    await authorize();
    await deleteNewEntity("pull request");
  });
});
