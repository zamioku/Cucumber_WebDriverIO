@search
Feature: Search results

    As a user, I want to be able to search for articles
    so that I can read one.

    Background:
        Given the browser is at the "Home" page

    Scenario: The Search input field should be displayed
        When the page is loaded
        Then the "search" input field should be visible

    Scenario Outline: Search results page should have at most 10 articles
        When the user searches for "<keyword>"
        Then only "10" or fewer articles are listed

        Examples:
            | keyword |
            | ac      |
            | ba      |

    Scenario Outline:  Clicking on Next button should display 10 more results
        When the user searches for "<keyword>"
        And the user clicks the Next results button
        Then only "10" or fewer articles are listed

        Examples:
            | keyword |
            | ac      |
            | ba      |

    @a
    Scenario Outline: The third searched element should redirect to the proper article
        When the user searches for "<keyword>"
        And the user clicks on result number "3" in the list
        Then the article "<title>" should be displayed

        Examples:
            | keyword | title |
            | course  | c     |
            | store   | s     |



