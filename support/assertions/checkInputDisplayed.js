import homePage from "../../pages/Home";
import assert from "assert";

/**
 * @param {boolean} inputName the name of the input to check
 */
export default inputName => {
    switch (inputName) {
        case "search":
            assert(
                homePage.searchInput.isDisplayed(),
                `The ${inputName} was not displayed!`
                );
            break;
        case "other":
            assert(
                true,
                `The ${inputName} was not displayed!`
                );
            break;
        default:
            console.log(`Invalid Input ${inputName}`);
    }
};