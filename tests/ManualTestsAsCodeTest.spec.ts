import { expect, test } from "@playwright/test";
import { allure } from "allure-playwright";
import {
  attachJiraIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
  manualTest,
} from "./utils";

test.describe("IssuesWebTest", () => {
  test.beforeEach(async () => {
    allure.layer("e2e");
    allure.owner("egorivanov");
    allure.feature("Manual tests as code");
  });

  test("Manual test as code ", async () => {
    allure.tags("web", "critical", "regress");
    allure.story("manual tests as code in plywright");
    attachMicroservice("Support");
    manualTest();
    await createNewEntity("issue");
    await authorize();
  });

});
