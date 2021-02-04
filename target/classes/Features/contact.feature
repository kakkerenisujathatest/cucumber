Feature: Free CRM create contact feature

Scenario Outline: Free CRM  create new contact scneario

Given user is already page
When title of login page is FRee CRM
#Then user enter "vuduthasujatha@yahoo.com" and "Honey2003"
Then user enter "<email>" and "<password>"
Then user clicks on login button
And user on home page
Then user moves to new contact page
Then user enters "<firstname>"and "<lastname>"
Then user close browser

Examples:
|email|password|firstname|lastname|
|vuduthasujatha@yahoo.com|Honey2003|ravvikakkereni|kakkereni|
|kakkerenisujatha@yahoo.com|Honey2003|sujathakakkereni|kakkereni|
