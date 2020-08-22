class Home {
    get url() {
        return "/";
    }
    get learnersLink() {
        return $("//a[@class='dropdown-toggle' and contains(text(), 'Learners')]");
    }
    get searchInput() {
        return $("input[name='q']");
    }
    get submitSearchtButton() {
        return $("button.search-box-icon");
    }

    /**
     * Search for an article by keyword 
     *
     * @param {String} keyword - the word to search by
     */
    search(keyword){
        this.searchInput.waitForDisplayed(5000);
        this.searchInput.setValue(keyword);
        this.submitSearchtButton.click();
    }
}

module.exports = new Home();