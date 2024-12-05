const { By } = require('selenium-webdriver');
const data = require('../data/LoginData.json')
const configs = require('../configs/testConfigs')


class LoginPage {
    constructor() {
        this.selectors = {
            emailInput: By.xpath("//input[@id='Username']"),
            passwordInput: By.xpath("//input[@id='Password']"),
            loginButton: By.xpath("//button[@id='btn-submit-login']"),
        };

    }

    async open() {
        await this.driver.get(configs.baseUrl);
    }
    async inputEmail() {

        const elementInput = await this.driver.findElement(this.selectors.emailInput);
        await elementInput.sendKeys(data.validUser.email);
    }
    async inputPassword() {
        const elementPasword = await this.driver.findElement(this.selectors.passwordInput);
        await elementPasword.sendKeys(data.validUser.password)
    }
    async btnLogin() {
        const elementLoginBtn = await this.driver.findElement(this.selectors.loginButton);
        await elementLoginBtn.click()
    }

}

module.exports = LoginPage;