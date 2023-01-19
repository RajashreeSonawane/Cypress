Feature: Login

  Scenario Outline: Login to Orange CRM Website
    Given User is at the login page
    When  User enters username "Admin"
    When User enters password "admin123"
    Then User is able to successfully login to the Website



