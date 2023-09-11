Feature: Accessing a Product via Category with Applied Filters

  Background: user at Ebay main menu
    Given user at Ebay main Menu selection

  Scenario Outline:  Access a Product via category after applying multiple filters

    When user Navigate to Search by category > Electronics > Cell Phones & accessories
    And user click Cell Phones & Smartphones in the left hand side navigation section
    And user click - More refinements
    And user Add 3 filters - <screen> size, Price <lowValue> <maxValue> and Item <location> appearing in the pop-up and click apply
    Then user should see filter tags already applied

    Examples:
      | screen        | lowValue      | maxValue     | location   |
      | 5.0 - 5.4 in  | 5000000       | 19000000     |  Europe    |
      | 5.5 - 5.9 in  | 6000000       | 20000000     |  Asia      |
