Feature: Product tests

    Background: 
        Given User navigates to the application
        And User click on the login link

    Scenario Outline: Add to cart
        Given User enter the username as "<username>"
        And User enter the password as "<password>"
        And User click on the login button
        When User search for a "<book>"
        And User add the book to the cart
        Then the cart badge should be updated

        Examples:
            | username  | password      | book    |
            | pankaj123 | pankaj@123RAJ | Rommies |
            | pankaj123 | pankaj@123RAJ | Rommies |


