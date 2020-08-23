import loginPage from "../../pages/Login";
import assert from "assert";

export default (inputField, errorMessage) => {
    let actualMessage = "";

    switch (inputField) {
        case "username":
            actualMessage = loginPage.usernameError
                .getText()
                .trim();
            break;
        case "password":
            actualMessage = loginPage.passwordError
                .getText()
                .trim();
            break;
        default:
            console.log(`Invalid field, "${inputField}"`);
    }
    assert(
        actualMessage.includes(errorMessage),
        `Input error message, ${actualMessage} did not match ${errorMessage}`
    );
};