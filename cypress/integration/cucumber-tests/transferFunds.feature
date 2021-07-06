@ayam
Feature: Check feedback page page
    Background: user login
    Given I login

    Scenario: Check feedback page
    Given I click transfer funds
    When I do transfer money '10', 'free money'
    And I confirm transfer money '10', 'free money'
    Then I should see money tranferred