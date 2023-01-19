Feature: Verify Register Data
    Scenario: Register Data user with correct firstName,lastName,address,email and phone
        Given user navigate to automation website
        When user enter register data credentials
        Then user should be register

Feature: File downloaded
    Scenario: File downloaded Successfully
        Given user navigate to automation website
        When enter data and click generate file button
        Then verify downloaded file


Feature: File uploaded
    Scenario: File uploaded Successfully
        Given user navigate to automation website
        When user select browser and choose file correctly
        Then Verify file uploaded Successfully


