Feature: Request Quote Form

    # Scenario Outline: As a user, I should be able to fill the Request Quote Form
    #     Given that I should land on Request Quote Page
    #     When I fill "Work Email" field with "<Email>" on Request Quote Form
    #     And I click on Next button for the "first" page
    #     And I fill "First Name" field with "<First Name>" on Request Quote Form
    #     And I fill "Last Name" field with "<Last Name>" on Request Quote Form
    #     And I fill "Phone" Number field with "<Phone Number>" on Request Quote Form
    #     And I click on Next button for the "second" page
    #     And I fill "Company" field with "<Company Name>" on Request Quote Form
    #     And I fill "No of Employees" field with "<No of Employees>" on Request Quote Form
    #     And I select "Canada" from the "Country" dropdown
    #     And I select "Trunking" from the "Primary Interest" dropdown
    #     And I click on consent checkbox
    #     And I click on "Submit" button
    #     Then I should see "Thank You" heading

    #     Examples:
    #         | Email              | First Name | Last Name | Phone Number     | Company Name | No of Employees |
    #         | daniyalqureshi212+ | Daniyal    | Qureshi   | +92 334 324 1003 | XYZ Company  | 20              |


Scenario: As a user, I should be able to fill the Request Quote Form

        Given that I am on the Signup Page
        And I click on "United Kingdom" heading
        And I click on "Select my region" button
        And I click on "A-Level" heading    
        And I click on "Select my exam" button
        And I click on "Biology" heading    
        And I click on "Continue" button
        And I click on "Sign up with Apple" link

        # Given that I should land on Request Quote Page
        # When I fill "Work Email" field with "<Email>" on Request Quote Form
        # And I click on Next button for the "first" page
        # And I fill "First Name" field with "<First Name>" on Request Quote Form
        # And I fill "Last Name" field with "<Last Name>" on Request Quote Form
        # And I fill "Phone" Number field with "<Phone Number>" on Request Quote Form
        # And I click on Next button for the "second" page
        # And I fill "Company" field with "<Company Name>" on Request Quote Form
        # And I fill "No of Employees" field with "<No of Employees>" on Request Quote Form
        # And I select "Canada" from the "Country" dropdown
        # And I select "Trunking" from the "Primary Interest" dropdown
        # And I click on consent checkbox
        # And I click on "Submit" button
        # Then I should see "Thank You" heading
