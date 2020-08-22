export default () => {    
    browser.waitUntil(
        () => {
            const state = browser.execute(function () {
                return document.readyState;
            });
            return state === 'complete';
        },
        60000,
        'Oops, browser timed out after 1 minute!',
        500
    );
};
