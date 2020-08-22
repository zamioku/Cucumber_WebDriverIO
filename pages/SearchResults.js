class SearchResults {
    get articles(){
        return $$("article.productItem");
    }
    get nextButton(){
        return $(".arrowRight");
    }
    get closeCookiesButton() {
        return $("#cookie-notification-policy-accept-continue");
    }
}

module.exports = new SearchResults();