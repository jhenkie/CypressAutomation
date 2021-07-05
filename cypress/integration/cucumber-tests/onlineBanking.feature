@sapi
Feature: Check online banking page

    Scenario: Check components at online banking page
    Given I open web page
    And I should click online banking
    Then I should see 'Account Summary', 'Account Activity', 'Transfer Funds'