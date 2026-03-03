Feature: User Authenticateion tests

    Background:
        Given User navigates to the application
        And User click on the login link

    Scenario: Login Should be success
        And User enter the username as "pankaj123"
        And User enter the password as "pankaj@123RAJ"
        When User click on the login button
        Then Login should be success

    
    Scenario: Login Should not be success
        And User enter the username as "pankaj1"
        And User enter the password as "12345"
        When User click on the login button
        Then Login should not be success