import AutomationPracticeFormPage from "../../pageObjects/AutomationPracticeFormPage";

context("Automation practice form Page", () => {
  context("Automation practice form scenarios", () => {
    beforeEach(() => {
      AutomationPracticeFormPage.visit();
    });
//.skip <--- skippot scenaariju
//.only <--- izpildiit tikai testus ar .only tag
    it("Student Registration Form", () => {
      cy.fixture('automationPracticeFormPageData').then((data) => {
        AutomationPracticeFormPage.firstName.type(data.firstName);
        AutomationPracticeFormPage.lastName.type(data.lastName);
        AutomationPracticeFormPage.userEmail.type(data.email);
        AutomationPracticeFormPage.genderRadio.click({ force: true });
        AutomationPracticeFormPage.userNumber.type(data.number);
        AutomationPracticeFormPage.dateOfBirthInput.click();
        AutomationPracticeFormPage.dateOfBirthYearDropDown.click();
        AutomationPracticeFormPage.dateOfBirthYearList.select("1930");
        AutomationPracticeFormPage.dateOfBirthMonthDropDown.click();
        AutomationPracticeFormPage.dateOfBirthMonthList.select("February");
        AutomationPracticeFormPage.dateOfBirthInputDay.click();
        AutomationPracticeFormPage.subjectsContainer.type(data.subject+"{enter}");
        AutomationPracticeFormPage.hobbiesCheckbox.click({ force: true });
        AutomationPracticeFormPage.uploadPicture.selectFile('cypress/files/profile.png');
        AutomationPracticeFormPage.currentAddress.type(data.address);
        AutomationPracticeFormPage.state.click();
        AutomationPracticeFormPage.stateSelect.should("contain","NCR").click();
        AutomationPracticeFormPage.city.click();
        AutomationPracticeFormPage.citySelect.should("contain","Delhi").click();
        AutomationPracticeFormPage.submit.click();

        AutomationPracticeFormPage.findTableRow("Student Name").should("contain","Joe Trump");
        AutomationPracticeFormPage.findTableRow("Student Email").should("contain","hello@cypress.io");
        AutomationPracticeFormPage.findTableRow("Gender").should("contain","Male");
        AutomationPracticeFormPage.findTableRow("Mobile").should("contain","1234567890");
        AutomationPracticeFormPage.findTableRow("Date of Birth").should("contain","28 February,1930");
        AutomationPracticeFormPage.findTableRow("Subjects").should("contain","Economics");
        AutomationPracticeFormPage.findTableRow("Hobbies").should("contain","Music");
        AutomationPracticeFormPage.findTableRow("Picture").should("contain","profile.png");
        AutomationPracticeFormPage.findTableRow("Address").should("contain","my street 4");
        AutomationPracticeFormPage.findTableRow("State and City").should("contain","NCR Delhi");
    });
  });
  });
});
