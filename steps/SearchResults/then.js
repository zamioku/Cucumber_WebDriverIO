import { Then } from "cucumber";
import checkNumberOfResults from "../../support/assertions/checkNumberOfResults";

// NOTE: This is very specific and should be refactored to enable reuse in other situations
Then(/^only "(\d+)" or fewer articles are listed$/, number => {
    checkNumberOfResults(number);
});

Then(/^Then the article "(.*)" should be displayed$/, article => {
    // TODO
});