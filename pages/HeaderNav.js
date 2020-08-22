class HeaderNav {
    get cartLink(){
        return $("div.nav-cart");
    }
    get myAccountLink() {
        // this element is not the best choice as it's classes change constantly
        return $("div.myAccountLinksHeader.js-myAccount-toggle"); 
    }
    get signInLink() {
        return $("a.login-link");
    }

    /**
     * Returns TRUE if the user account area link is displayed.
     */
    isSignedIn() {
        try{
            this.myAccountLink.waitForExist(5000);
        } catch {
            // do nothing
        };
        return this.myAccountLink.isDisplayed();
    }
}

module.exports = new HeaderNav();