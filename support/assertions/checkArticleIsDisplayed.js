import assert from "assert";

/**
 * @param {String} keyword expected keyword to be contained
 */
export default keyword => {

    browser.waitUntil(
        () => {
            return !browser.getTitle().includes("search results");
        },
        15000,
        'Timeout: expected the page title to be changed.',
        1000
    );
    const currentURL = browser.getUrl();
    assert(
        currentURL.includes(keyword),
        `The article page, ${browser.getUrl()} did not contain "${keyword}"`
    );
};