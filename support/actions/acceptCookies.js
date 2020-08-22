// import loginPage from "../../pages/Login";

export default page => {
    let cookiesMessageDisplayed = page.closeCookiesButton.isExisting();
    if (cookiesMessageDisplayed) {
        page.closeCookiesButton.click();
    }
}