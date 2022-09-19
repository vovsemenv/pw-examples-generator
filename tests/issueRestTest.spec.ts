import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import { notes } from "./notes";
import { attachJiraIssue, attachMicroservice } from "./utils";

test.describe("IssuesWebTest", () => {
  test.beforeEach(() => {
    allure.label({ name: "layer", value: "rest" });
    allure.owner("baev");
    allure.feature("Issues");
  });

  notes.forEach((noteName) => {
    test(`Should create user note: ${noteName}`, async () => {
      allure.tag("api", "critical");
      attachJiraIssue("AE-2");
      allure.story("Create new issue");
      attachMicroservice("Billing");
    });
  });

  notes.forEach((noteName) => {
    test(`Should delete user note: ${noteName}`, async () => {
      allure.tag("api", "regress");
      attachJiraIssue("AE-1");
      allure.story("Close existing issue");
      attachMicroservice("Repository");
      allure.addParameter("Title", noteName);
    });
  });
});
