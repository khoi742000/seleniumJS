const { it } = require('node:test');
const LoginPage = require('../pages/login.page');
const driverChrome = require('../utils/driver');

describe('Login Tests', () => {
    let driver;
    let login

    before(async() => {
        driver = new driverChrome();
        login = new LoginPage();

    });

    after(async() => {
        if (driver) {
            await driver.quit();
        }
    });

    it('login ne', () => {
        login.LoginPage()

    })


});