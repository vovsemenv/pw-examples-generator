import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import { notes } from "./notes";
import { attachJiraIssue, attachMicroservice } from "./utils";

test.describe("e2eManPageTests", () => {
  test.beforeEach(() => {
    allure.label({ name: "layer", value: "e2e" });
    allure.owner("eroshenkoam");
    allure.feature("Main Page payments");
  });

  notes.forEach((noteName) => {
    test(`End user should be able to create a new payment request: ${noteName}`, async () => {
      allure.tag("e2e", "critical", "regress", "release","regular", "nightly");
      attachJiraIssue("AD-2");
      allure.story("Create new payment request");
      attachMicroservice("Billing");
      allure.addParameter("Title", noteName);
    });
  });

  notes.forEach((noteName) => {
    test(`End user should be able to create a new payment request: ${noteName}`, async () => {
      allure.tag("e2e", "regress", "critical", "release", "regular", "nightly");
      attachJiraIssue("AD-3");
      allure.story("Cancel created payment request");
      attachMicroservice("Billing");
      allure.addParameter("Title", noteName);
    });
  });
});
