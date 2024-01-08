/// <reference types="cypress"/>

import Base from "../pages/Base";
import Home from "../pages/Home";
import { h1HomePage, h2HomePage } from "../fixtures/homePage.json";
import Login from "../pages/Login";
import {
	validUsername,
	invalidUsername,
	validPasswd,
	invalidPasswd,
	successfulLogin,
	invalidUsernameError,
	invalidPasswordError,
} from "../fixtures/loginPage.json";

describe("Login Tests", () => {
	beforeEach("Visit the herokuapp page and go to login page", () => {
		Base.openHomePage();
		Home.homePageHeader1.should("include.text", h1HomePage);
		Home.homePageHeader2.should("include.text", h2HomePage);
		Home.clickOnLoginPage();
		cy.url().should("include", "login");
		Login.usernameBox.should("be.visible"); // checking if the form is visible
		Login.passwordBox.should("be.visible"); // checking if the form is visible
	});

	it("Login with valid username and password", () => {
		Login.typeUsername(validUsername);
		Login.usernameBox.should("have.value", validUsername);
		Login.typePassword(validPasswd);
		Login.passwordBox.should("have.value", validPasswd);
		Login.clickOnSubmitBtn();
		Login.loginPageMessage.should("include.text", successfulLogin);
	});

	it("Login with empty username field ", () => {
		Login.typePassword(validPasswd);
		Login.passwordBox.should("have.value", validPasswd);
		Login.clickOnSubmitBtn();
		Login.loginPageMessage.should("include.text", invalidUsernameError);
	});

	it("Login with empty password field", () => {
		Login.typeUsername(validUsername);
		Login.usernameBox.should("have.value", validUsername);
		Login.clickOnSubmitBtn();
		Login.loginPageMessage.should("include.text", invalidPasswordError);
	});

	it("Login with invalid username", () => {
		Login.typeUsername(invalidUsername);
		Login.usernameBox.should("have.value", invalidUsername);
		Login.typePassword(validPasswd);
		Login.passwordBox.should("have.value", validPasswd);
		Login.clickOnSubmitBtn();
		Login.loginPageMessage.should("include.text", invalidUsernameError);
	});
	it("Login with invalid password", () => {
		Login.typeUsername(validUsername);
		Login.usernameBox.should("have.value", validUsername);
		Login.typePassword(invalidPasswd);
		Login.passwordBox.should("have.value", invalidPasswd);
		Login.clickOnSubmitBtn();
		Login.loginPageMessage.should("include.text", invalidPasswordError);
	});
});
