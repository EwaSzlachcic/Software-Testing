class LoginPage {
	get loginFormBox() {
		return cy.get("....");
	}

	get usernameBox() {
		return cy.get("#username");
	}

	get passwordBox() {
		return cy.get("#password");
	}

	typeUsername(username) {
		this.usernameBox.type(username);
	}

	typePassword(password) {
		this.passwordBox.type(password);
	}

	get submitLoginBtn() {
		return cy.get("button.radius");
	}

	clickOnSubmitBtn() {
		this.submitLoginBtn.click();
	}

	get loginPageMessage() {
		return cy.get("#flash");
	}
}

export default new LoginPage();
