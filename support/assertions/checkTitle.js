import assert from "assert";

/**
 * @param {String} title expected title
 */
export default title => {
    assert(
        browser.getTitle() === title,
        `Title, ${browser.getTitle()} not equal to "${title}"`
    );
};