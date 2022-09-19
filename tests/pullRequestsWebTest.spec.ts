import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import { attachJiraIssue, attachMicroservice } from "./utils";
test.describe("IssuesWebTest", () => {
  test.beforeEach(() => {
    allure.label({ name: "layer", value: "web" });
    allure.owner("eroshenkoam");
    allure.feature("Pull Requests");
  });
  test("Creating new issue for authorized user", async () => {
    allure.tag("web", "regress", "smoke");
    attachJiraIssue("AE-1");
    attachJiraIssue("AE-2");
    allure.story("Create new pull request");
    attachMicroservice("Billing");
  });
  test("Deleting existing issue for authorized user", async () => {
    attachJiraIssue("AE-2");
    allure.tag("web", "regress");
    allure.story("Close existing pull request");
    attachMicroservice("Repository");
  });
});
