Feature:Verify Register Data

    Scenario: Login to Automation Testing Website
        Given user navigate to automation website
        When user enter register data credentials
            | firstName | lastName | address | email   | phone      |
            | Rajashree | Sonawane | Pune    | Raj@123 | 9657344065 |
        Then user should be register successfully