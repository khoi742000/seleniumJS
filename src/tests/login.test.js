const LoginPage = require('../pages/login.page');
const driver = require('../utils/driver')

describe('Login Tests', () => {
    let driver;
    let loginPage;

    before(async() => {
        driver = new driverChrome();
        console.log('cc')
        loginPage = new LoginPage();
        await loginPage.open();
        await loginPage.focusSelector()
    });

    after(async() => {
        if (driver) {
            await driver.quit();
        }
    });


});