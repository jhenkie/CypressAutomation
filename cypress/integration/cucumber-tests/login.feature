Feature: Login

    Scenario Outline: Valid login
    Given I go to login page
    And I want to wait 2000 milliseconds
    And I see "Zero - Log in" in the title
    When I fill in my data with '<user>' and '<pass>'
    Then I should see login page

    Examples: 
    |user|pass|
    |username|password|
    |peter|parker|
