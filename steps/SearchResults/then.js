import { Then } from "cucumber";
import checkNumberOfResults from "../../support/assertions/checkNumberOfResults";
import checkArticleIsDisplayed from "../../support/assertions/checkArticleIsDisplayed";
import waitForPageToLoad from "../../support/actions/waitForPageToLoad";

// NOTE: This is very specific and should be refactored to enable reuse in other situations
Then(/^only "(\d+)" or fewer articles are listed$/, number => {
    checkNumberOfResults(number);
});

Then(/^an article containing "(.*)" should be displayed$/, title => {
    waitForPageToLoad();
    checkArticleIsDisplayed(title);
});