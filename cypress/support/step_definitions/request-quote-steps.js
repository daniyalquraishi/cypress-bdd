const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const requestQuote = require("../../pageObjects/requestQuoteLocators");

Given("that I should land on Request Quote Page", () => {
  cy.visit("https://www.8x8.com/request-quote");
});

When("I fill {string} field with {string} on Request Quote Form", (fieldName, text) => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  let locatorName;
  if (fieldName == "Work Email") {
    locatorName = 'email'
    text = text + randomNumber + '@gmail.com';
  }
  else if (fieldName == "First Name") {
    locatorName = 'first-name'
  }
  else if (fieldName == "Last Name") {
    locatorName = 'last-name'
  }
  else if (fieldName == "Company") {
    locatorName = 'company'
  }
  else if (fieldName == "No of Employees") {
    locatorName = 'no-of-employees'
  }
  requestQuote.inputFields(locatorName).type(text);
});

When("I click on Next button for the {string} page", (index) => {
  if (index == "first") {
    locator = "0";
  }
  else if (index == "second") {
    locator = "1";
  }
  requestQuote.nextButton(locator).click();
});

When("I fill {string} Number field with {string} on Request Quote Form", (fieldName, text) => {
  let locatorName;
  if (fieldName == "Phone") {
    locatorName = 'phone'
  }
  requestQuote.inputFields(locatorName).type(text);
});

When("I click on consent checkbox", () => {
  requestQuote.clickConsentCheckbox().click();
});

When("I select {string} from the {string} dropdown", (dropdownOption, dropdownName) => {
  let dropdownLocator;
  if (dropdownName == 'Country') {
    dropdownLocator = 'Countries';
  }
  else if (dropdownName == "Primary Interest") {
    dropdownLocator = 'primaryInterest';
  }
  requestQuote.clickdropdown(dropdownLocator).click();
  requestQuote.selectOption(dropdownOption);
});

When("I click on {string} button", (buttonName) => {
  requestQuote.clickButton(buttonName);
});

Then("I should see {string} heading", (headingName) => {
  requestQuote.clickButton(headingName);
});

Given("that I am on the Signup Page", () => {
  cy.visit("https://simplestudy.cloud/signup/country");
});

// When("I click on {string} heading", (buttonName) => {
//   requestQuote.clickButton(buttonName);
// });

When("I click on {string} heading", (buttonName) => {
  requestQuote.clickHeading(buttonName);
});

When("I click on {string} link", (buttonName) => {
  requestQuote.clickLink(buttonName);
});