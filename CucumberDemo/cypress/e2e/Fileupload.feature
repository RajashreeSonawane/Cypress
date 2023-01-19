Feature: File uploaded

    Scenario: Login to Automation Testing Website
        Given user navigate to automation website
        When user select browser and choose file correctly
            | File_name |
            | Car.jpg   |
        Then verify file uploaded successfully
