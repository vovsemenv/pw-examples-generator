import { allure } from "allure-playwright";

export const attachJiraIssue = (val: string) => {
  allure.label({ name: "jira", value: val });
};

export const attachMicroservice = (val: string) => {
  allure.label({ name: "microservice", value: val });
};
