import homePage from "../../pages/Home";

/**
 * Search for a keyword
 * 
 * @param {String} keyword keyword to search for
 */
export default keyword => {
  homePage.search(keyword);
};