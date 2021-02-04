Feature: Free CRM Feature

Scenario Outline: Free CRM scneario

Given user is already page
When title of login page is FRee CRM
#Then user enter "vuduthasujatha@yahoo.com" and "Honey2003"
Then user enter "<email>" and "<password>"
Then user clicks on login button
And user on home page

Examples:
|email|password|
|vuduthasujatha@yahoo.com|Honey2003|
|kakkerenisujatha@yahoo.com|Honey2003|




