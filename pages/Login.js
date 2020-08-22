class Login {
    get url() {
        return "/store/en-us/login";
    }

    get usernameInput() {
        return $("#username");
    }

    get passwordInput() {
        return $("#password");
    }

    get signInButton() {
        return $("#pearsonLoginForm button");
        // OR 
        // return $("//button[contains(text(),'Sign in')]"); 
    }

    get errorMessage() {
        // this will always select the most recent message
        return $("(//p[@class='c-alert__text'])[1]"); 
    }

    get usernameError() {
        return $("#username-error");
    }

    get passwordError() {
        return $("#password-error");
    }

    get closeCookiesButton() {
        return $("button.js-cookie-notification-accept");
    }

    /**
     * User sign in
     *
     * @param {String} username - Email
     * @param {String} password - Button
     */
    signIn(username, password) {
        this.usernameInput.waitForDisplayed(5000);
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        // this.signInButton.scrollIntoView();
        this.signInButton.click();
    }
}

module.exports = new Login();