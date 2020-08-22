class Home {
    get url() {
        return "/";
    }
    get learnersLink() {
        return $("//a[@class='dropdown-toggle' and contains(text(), 'Learners')]");
    }
    get searchInput() {
        return $("input");
    }
}

module.exports = new Home();