import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import { notes } from "./notes";
import { attachJiraIssue, attachMicroservice,   authorize,   createNewEntity, deleteNewEntity  } from "./utils";

test.describe("e2eManPageTests", () => {
  test.beforeEach(async () => {
    allure.label({ name: "layer", value: "e2e" });
    allure.owner("eroshenkoam");
    allure.feature("Payments widget on main page");
    await authorize();
  });

  notes.forEach((noteName) => {
    test(`End user should be able to create a new payment request: ${noteName}`, () => {
      allure.tag("e2e", "critical", "regress", "release","regular", "nightly");
      attachJiraIssue("AD-2");
      allure.story("Manage payments via main page widget");
      attachMicroservice("Billing");
      allure.addParameter("Title", noteName);
      createNewEntity("payment");
    });
  });

  notes.forEach((noteName) => {
    test(`End user should be able to cancel created payment request: ${noteName}`, () => {
      allure.tag("e2e", "regress", "critical", "release", "regular", "nightly");
      attachJiraIssue("AD-3");
      allure.story("Manage payments via main page widget");
      attachMicroservice("Billing");
      allure.addParameter("Title", noteName);
      deleteNewEntity("payment");
    });
  });
});
