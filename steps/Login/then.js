import { Then } from "cucumber";
import checkAuthError from "../../support/assertions/checkAuthError";
import checkTitle from "../../support/assertions/checkTitle";
import checkIsSignedIn from "../../support/assertions/checkIsSignedIn";
import checkInputError from "../../support/assertions/checkInputFieldError";

Then(/^the user should( not)? be signed in$/, isSignedIn => {
    // checks if optional param is null
    if(isSignedIn) { 
        checkIsSignedIn(false);
    } else {
        checkIsSignedIn(true);
    }
});

Then(/^the title of the page should be "(.*)"$/, title => {
    checkTitle(title);
});

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
    checkAuthError(errorMessage);
});

Then(/^an error message under the "(username|password)" input field should say "(.*)"$/, (inputField, errorMessage) => {
    checkInputError(inputField, errorMessage);
});