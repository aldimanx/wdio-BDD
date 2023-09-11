Feature: Access a Product via Search

  Background: user at Ebay main menu
    Given user at Ebay main Menu selection

  Scenario Outline:  User Access a Product via search bar and verify the result

    When user Type <item> search string in the search bar
    And user Change the Search <categories> and click search
    Then user Verify that the first result name matches with the <item> search string

    Examples:
      | item     | categories      |
      | MacBook  | 58058           |
      | Samsung  | 15032           |
      | PS5      | 1249            |

