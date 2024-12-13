const { LoginPage } = require('../pages/login.page.js');

const { assert, equal } = require('assert');
const { By } = require('selenium-webdriver');

describe('Login Tests', function() {
    this.timeout(10000); // Tăng timeout lên 10 giây
    let login


    before(async function() {
        login = new LoginPage()


    })
    beforeEach(async function() {
        await login.openDriver()
        await login.openURL()
    });

    afterEach(async function() {
        if (login && login.driver) {
            // Kiểm tra xem driver có hợp lệ không trước khi gọi quit()
            try {
                await login.quit(); // Đảm bảo gọi quit() sau mỗi test
            } catch (error) {
                console.error("Error quitting driver:", error);
            }
        }
    });


    it('login ne', async function() {
        await login.loginSuccess()
        const actully = await login.fin
        await equal(actully, "Gợi ý để bán hàng thuận lợi hơn", "text không đúng")
        console.log("pass")

    })


});