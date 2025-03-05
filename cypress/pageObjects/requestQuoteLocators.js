require('cypress-xpath');
class requestQuoteLocators {
    inputFields(locatorName) {
        return cy.get(`input[name="${locatorName}"]`);
    }

    nextButton(index) {
        return cy.xpath(`//button[contains(., 'Next')]`).eq(index);
    }

    clickConsentCheckbox() {
        return cy.get(`input[name='OnlineConsent']`);
    }

    clickdropdown(dropdownLocator) {
        return cy.get(`input[id='${dropdownLocator}']`)
    }

    selectOption(optionName) {
        cy.xpath(`//div[contains(@class, 'dropdown is-active')]//*[contains(text(), '${optionName}')]`).as('option').should('be.visible').click();
    }

    clickButton(buttonName) {
        cy.xpath(`//button[contains(.,'${buttonName}')]`).click();
    }

    headingVerify(headingName) {
        cy.xpath(`//h1[contains(.,'${headingName}')]`).should('exist');
    }

    clickHeading(buttonName) {
        cy.xpath(`//h3[contains(.,'${buttonName}')]`).click();
    }

    clickLink(buttonName) {
        cy.xpath(`//a[contains(.,'${buttonName}')]`).click();
    }
}

module.exports = new requestQuoteLocators;
  