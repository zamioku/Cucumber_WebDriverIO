import { When } from "cucumber";
import search from "../../support/actions/search";
import selectMenuOption from "../../support/actions/selectMenuOption";
import waitForPageToLoad from "../../support/actions/waitForPageToLoad";

When(/^the user searches for "(.*)"$/, keyword => {
    search(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, option => {
    selectMenuOption(option);
});

When(/^the page is loaded$/, () => {    
    waitForPageToLoad();
});