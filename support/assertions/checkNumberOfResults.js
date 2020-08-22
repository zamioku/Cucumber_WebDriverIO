import searchResultsPage from "../../pages/SearchResults";
import assert from "assert";

export default equalOrLessThan => {
    const numberOfResults = searchResultsPage.articles.length;
    assert(
        numberOfResults <= equalOrLessThan,
        `There were ${numberOfResults} results found! Expected: ${equalOrLessThan} or fewer.`
    );
};