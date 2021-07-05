@ayam
Feature: Check feedback page page
    Background: user login
    Given I login

    Scenario: Check feedback page
    Given I open web page
    And I should click feedback
    When I fill in feedback form 'test', 'test@gmail.com', 'compliment', 'this is awesome!'
    Then I should see my feedback submitted