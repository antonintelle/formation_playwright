import { test as base } from "@playwright/test";
import { FormPage } from "./form";

type Fixtures = {
  formPage: FormPage;
};  

const test = base.extend<Fixtures>({
  formPage: async ({ page }, use) => {
    await use(new FormPage(page));
  },
});

const expect = base.expect;

export { test, expect };