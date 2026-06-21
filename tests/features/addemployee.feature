Feature: Add employee functionality

    Background: Navigate to add employee  page

        Given User Launch the Application
        When User enter username "Admin" and password "admin123"
        And User clicks login button
        Then User should be navigated to dashboard page
        When User clicks on PIM menu
        And User clicks on Add employee submenu


    Scenario Outline: Verify add employee with mandatory details

        And User enter firstname "<firstname>" and lastname "<lastname>"
        And user clicks on Save button
        Then Employee should be created
        Examples:
            | firstname | lastname |
            | Raju      | G        |
            | Venkat    | M        |
            | Vittal    | P        |

    Scenario: Verify add employee wiht PNG file
        And User enter firstname "Guru" and lastname "Rao"
        And  user uploads a PNG file
        And user clicks on Save button
        Then Employee should be created

    Scenario: Verify add employee wiht JPG file
        And User enter firstname "Guru" and lastname "Rao"
        And  user uploads a JPG file
        And user clicks on Save button
        Then Employee should be created

    Scenario: Verify add employee wiht GIF file
        And User enter firstname "Guru" and lastname "Rao"
        And  user uploads a GIF file
        And user clicks on Save button
        Then Employee should be created
