import { When } from "cucumber";
import searchResultsPage from "../../pages/SearchResults";
import waitForPageToLoad from "../../support/actions/waitForPageToLoad";
import acceptCookies from "../../support/actions/acceptCookies";

When(/^the user clicks the Next results button$/, () => {
    if (searchResultsPage.acceptCookiePolicy.isDisplayed()) {
        searchResultsPage.acceptCookiePolicy.click();
    }
    searchResultsPage.nextButton.click();
    waitForPageToLoad();
});

When(/^the user clicks on result number "(\d+)" in the list$/, number => {
    waitForPageToLoad();
    acceptCookies(searchResultsPage);
    let resultLink = searchResultsPage.articles[number].$("a");
    resultLink.click();
});