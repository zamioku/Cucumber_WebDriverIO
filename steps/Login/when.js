import { When } from "cucumber";
import signin from "../../support/actions/signIn";
import acceptCookies from "../../support/actions/acceptCookies";
import loginPage from "../../pages/Login";

When(/^the user tries to enter "(valid|invalid)" credentials, "(.*)" to login$/, (valid, username) => {
    acceptCookies(loginPage);
    signin(valid==="valid" ? true : false, username);
});