import loginPage from "../../pages/Login";

export default () => {
    let cookiesMessageDisplayed = loginPage.closeCookiesButton.isExisting();
    if (cookiesMessageDisplayed) {
        loginPage.closeCookiesButton.click();
    }
}