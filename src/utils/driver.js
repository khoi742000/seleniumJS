const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

class driverChrome {
    constructor() {
        const options = new chrome.Options();
        options.addArguments('--no-sandbox', '--disable-dev-shm-usage');

        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }
}


module.exports = driverChrome;