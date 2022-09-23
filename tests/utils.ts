import test, { expect } from "@playwright/test";
import { allure } from "allure-playwright";

export const attachJiraIssue = (val: string) => {
  allure.label({ name: "jira", value: val });
};

export const attachMicroservice = (val: string) => {
  allure.label({ name: "msrv", value: val });
};

const isTimeToThrow = () => {
  if (Math.random() > 0.95) {
    throw new Error("net::ERR_CONNECTION_REFUSED");
  }
};

export const authorize = async () =>
  await test.step("Authorize", async () => {
    let status = "anonymous" as "anonymous" | "authorized";
    await expect(status, "expect status to be anonymous before login").toBe(
      "anonymous"
    );
    await test.step("Go to login page", async () => {
      isTimeToThrow();
    });
    await test.step("Enter Login", async () => {
      isTimeToThrow();
    });
    await test.step("Enter Password", async () => {});
    await test.step("Press Submit", async () => {
      isTimeToThrow();
    });
    status = "authorized";
    await expect(status, "expect status to be authorized before login").toBe(
      "authorized"
    );
  });

interface Issue {
  name: "New issue";
  status: "open" | "closed";
}
const newIssue = { name: "New issue", status: "open" } as Issue;

interface Payment {
  name: "New payment";
  status: "created" | "closed";
}

const newPayment = { name: "New payment", status: "created" } as Payment;

export const createNewEntity = async (entityName: "issue" | "shipment" | "payment") =>
  await test.step(`Create new ${entityName}`, async () => {
    const issuesList: typeof newIssue[] = [];
    expect(
      issuesList,
      `check ${entityName} count before creation`
    ).toHaveLength(0);
    await test.step(`Go to ${entityName} page`, async () => {
      isTimeToThrow();
    });
    await test.step(`Click 'New ${entityName}' button`, async () => {});
    await test.step(`Enter ${entityName} Info`, async () => {
      isTimeToThrow();
    });
    await test.step(`Confirm new ${entityName} creation`, async () => {
      issuesList.push(newIssue);
    });
    expect(
      issuesList,
      `check if ${entityName} list contain new ${entityName}`
    ).toContainEqual(newIssue);
  });

export const deleteNewEntity = async (entityName: "issue" | "pull request" | "payment") =>
  await test.step(`Close ${entityName}`, async () => {
    const issuesList: typeof newIssue[] = [newIssue];
    await test.step(`Go to ${entityName} page`, async () => {
      isTimeToThrow();
    });
    await test.step(`Open new ${entityName} page`, async () => {});
    expect(
      issuesList[0].status,
      `Check ${entityName} status before closing`
    ).toBe("open");
    await test.step(`Click '${entityName}' button`, async () => {});
    issuesList[0].status = "closed";
    expect(
      issuesList[0].status,
      `Check ${entityName} status after closing`
    ).toBe("closed");
  });
