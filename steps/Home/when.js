import { When } from "cucumber";
import search from "../../support/actions/search";
import waitForPageToLoad from "../../support/actions/waitForPageToLoad";

When(/^the user searches for "(.*)"$/, keyword => {
    search(keyword);
});

When(/^the page is loaded$/, () => {    
    waitForPageToLoad();
});