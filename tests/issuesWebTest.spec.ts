import { expect, test } from "@playwright/test";
import { allure } from "allure-playwright";
import {
  attachJiraIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
} from "./utils";

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

    await authorize();
    await createNewEntity("issue");
  });

  test("Closing new issue for authorized user", async () => {
    allure.tag("web", "regress");
    attachJiraIssue("AE-1");
    allure.story("Close existing issue");
    attachMicroservice("Repository");
    await authorize();
    await deleteNewEntity("issue");
  });
});
