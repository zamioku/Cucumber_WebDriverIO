@regression @login
Feature: Login

    As a user, I want to be able to log into the application

    Background:
        Given the browser is at the "Login" page

    Scenario Outline: Attempting to login with valid credentials; <username>
        When the user tries to enter "valid" credentials, "<username>" to login
        Then the user should be signed in
        And the title of the page should be "Store | Learner US Site"

        @dev
        Examples:
            | username     |
            | sorindr_test |

        @stage
        Examples:
            | username           |
            | sorindr_stage_test |

    @dev
    Scenario Outline: Attempting to login with invalid credentials; <username>
        When the user tries to enter "invalid" credentials, "<username>" to login
        Then the user should not be signed in
        And the title of the page should be "Login | Learner US Site"
        And an authentication error message should say "<error>"

        Examples:
            | username      | error                                                                   |
            | joe_tester123 | Sorry, the credentials you have entered do not match. Please try again. |
            | random_userX  | Sorry, the credentials you have entered do not match. Please try again. |