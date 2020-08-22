import headerNavPage from "../../pages/HeaderNav";
import assert from "assert";

/**
 * @param {boolean} expectedToBe If true, user should be signed in, else they should not be signed in
 */
export default expectedToBe => {
    let isActually = headerNavPage.isSignedIn();
    if (expectedToBe == true) {
        assert(
            isActually,
            `The user should have been signed in!`
        );
    } else {
        assert(
            !isActually,
            `The user should NOT be signed in!`
        );
    }
};