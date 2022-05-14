import BasePage from "./BasePage";

class AutomationPracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
  static get firstName() {
    return cy.get("#firstName");
  }
  static get lastName() {
    return cy.get("#lastName");
  }
  static get userEmail() {
    return cy.get("#userEmail")
  }
  static get genderRadio() {
    return cy.get("#gender-radio-1");
  }
  static get userNumber() {
    return cy.get("#userNumber");
  }
  static get dateOfBirthInput() {
    return cy.get("#dateOfBirthInput");
  }
  static get dateOfBirthYearDropDown() {
    return cy.get(".react-datepicker__year-dropdown-container");
  }
  static get dateOfBirthYearList() {
    return cy.get(".react-datepicker__year-select");
  }
  static get dateOfBirthMonthDropDown() {
    return cy.get(".react-datepicker__month-dropdown-container");
  }
  static get dateOfBirthMonthList() {
    return cy.get(".react-datepicker__month-select");
  }
  static get dateOfBirthInputDay() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get subjectsContainer() {
    return cy.get("#subjectsContainer");
  }
  static get hobbiesCheckbox() {
    return cy.get("#hobbies-checkbox-3");
  }
  static get uploadPicture() {
    return cy.get("#uploadPicture");
  }
  static get currentAddress() {
    return cy.get("#currentAddress");
  }
  static get state() {
    return cy.get("#state");
  }
  static get stateSelect() {
    return cy.get("#react-select-3-option-0");
  }
  static get city() {
    return cy.get("#city");
  }
  static get citySelect() {
    return cy.get("#react-select-4-option-0");
  }
  static get submit() {
    return cy.get("#submit");
  }
  static get table() {
    return cy.get(".table-hover");
  }
  static findTableRow(value){
    return this.table.contains(value).parent();
  }
}

export default AutomationPracticeFormPage;
