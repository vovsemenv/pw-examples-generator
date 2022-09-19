import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import { attachJiraIssue, attachMicroservice } from "./utils";
test.describe("IssuesWebTest", () => {
  test.beforeEach(() => {
    allure.label({ name: "layer", value: "web" });
    allure.owner("eroshenkoam");
    allure.feature("Issues");
  });

  test("Creating new issue authorized user", async () => {
    allure.tag("web", "critical");
    attachJiraIssue("AE-2");
    allure.story("Create new issue");
    attachMicroservice("Billing");
  });

  test("Adding note to advertisement", async () => {
    allure.tag("web", "regress");
    attachJiraIssue("AE-1");
    allure.story("Create new issue");
    attachMicroservice("Repository");
  });

  test("Closing new issue for authorized user", async () => {
    allure.tag("web", "regress");
    attachJiraIssue("AE-1");
    allure.story("Close existing issue");
    attachMicroservice("Repository");
  });
});
