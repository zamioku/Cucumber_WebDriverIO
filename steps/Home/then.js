import { Then } from "cucumber";
import checkInputDisplayed from "../../support/assertions/checkInputDisplayed";

// NOTE: This is very specific and should be refactored to enable reuse in other situations
Then(/^the "(.*)" input field should be visible$/, inputName => {
    checkInputDisplayed(inputName);
});