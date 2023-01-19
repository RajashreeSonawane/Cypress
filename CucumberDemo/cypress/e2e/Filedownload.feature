Feature: File downloded

    Scenario: Login to Automation Testing Website
        Given user navigate to automation website
        When enter data and click generate file button
            | download_file |
            | info.txt      |
        Then verify file downloaded successfully
