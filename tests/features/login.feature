Feature: Login functionality

    Scenario: Verify login with valid credentials
        Given User Launch the Application
        When User enter username "Admin" and password "admin123"
        And User clicks login button
        Then User should be navigated to dashboard page

    Scenario: Verify login with valid username and invalid password
        Given User Launch the Application
        When User enter username "Admin" and password "fbgvdfnjdnb"
        And User clicks login button
        Then User should Login error Message

    Scenario: Verify login with invalid username and valid password
        Given User Launch the Application
        When User enter username "fgbhr" and password "admin123"
        And User clicks login button
        Then User should Login error Message

    Scenario: Verify login with inmvalid username and invalid password

        Given User Launch the Application
        When User enter username "fgbhr" and password "admin123"
        And User clicks login button
        Then User should Login error Message