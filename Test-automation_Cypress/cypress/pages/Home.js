class Home {
	get homePageHeader1() {
		return cy.get("h1.heading");
	}
	get homePageHeader2() {
		return cy.get("div#content h2");
	}
	get loginPage() {
		return cy.get('a[href="/login"]');
	}
	clickOnLoginPage() {
		this.loginPage.click();
	}
}

export default new Home();
