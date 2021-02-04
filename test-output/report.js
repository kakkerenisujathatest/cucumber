$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kakke/OneDrive/Desktop/Eclipse/CucumberFreeCRMBDD/src/main/java/Features/contact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contact feature",
  "description": "",
  "id": "free-crm-create-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM  create new contact scneario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FRee CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user enter \"vuduthasujatha@yahoo.com\" and \"Honey2003\""
    }
  ],
  "line": 8,
  "name": "user enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cfirstname\u003e\"and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 16,
      "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;;1"
    },
    {
      "cells": [
        "vuduthasujatha@yahoo.com",
        "Honey2003",
        "ravvikakkereni",
        "kakkereni"
      ],
      "line": 17,
      "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;;2"
    },
    {
      "cells": [
        "kakkerenisujatha@yahoo.com",
        "Honey2003",
        "sujathakakkereni",
        "kakkereni"
      ],
      "line": 18,
      "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM  create new contact scneario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FRee CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user enter \"vuduthasujatha@yahoo.com\" and \"Honey2003\""
    }
  ],
  "line": 8,
  "name": "user enter \"vuduthasujatha@yahoo.com\" and \"Honey2003\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"ravvikakkereni\"and \"kakkereni\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefination.user_is_already_page()"
});
formatter.result({
  "duration": 15575110500,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.title_of_login_page_is_FRee_CRM()"
});
formatter.result({
  "duration": 24697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vuduthasujatha@yahoo.com",
      "offset": 12
    },
    {
      "val": "Honey2003",
      "offset": 43
    }
  ],
  "location": "loginstepdefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 502572100,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 113311300,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_on_home_page()"
});
formatter.result({
  "duration": 12367300,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 51448200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\" div:nth-child(1) div.ui.fluid.container div.ui.left.fixed.vertical.icon.menu.sidebar-dark.left-to-right:nth-child(1) div.menu-item-wrapper:nth-child(3) \u003e a.item\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027LAPTOP-029NRPGB\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\kakke\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61656}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dc6bbf0850d0cfac4eff2693da812e0a\n*** Element info: {Using\u003dcss selector, value\u003d div:nth-child(1) div.ui.fluid.container div.ui.left.fixed.vertical.icon.menu.sidebar-dark.left-to-right:nth-child(1) div.menu-item-wrapper:nth-child(3) \u003e a.item}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat Stepdefinationfile.loginstepdefination.user_moves_to_new_contact_page(loginstepdefination.java:63)\r\n\tat ✽.Then user moves to new contact page(C:/Users/kakke/OneDrive/Desktop/Eclipse/CucumberFreeCRMBDD/src/main/java/Features/contact.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravvikakkereni",
      "offset": 13
    },
    {
      "val": "kakkereni",
      "offset": 33
    }
  ],
  "location": "loginstepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstepdefination.user_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM  create new contact scneario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm--create-new-contact-scneario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FRee CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then user enter \"vuduthasujatha@yahoo.com\" and \"Honey2003\""
    }
  ],
  "line": 8,
  "name": "user enter \"kakkerenisujatha@yahoo.com\" and \"Honey2003\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"sujathakakkereni\"and \"kakkereni\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefination.user_is_already_page()"
});
formatter.result({
  "duration": 11077297200,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.title_of_login_page_is_FRee_CRM()"
});
formatter.result({
  "duration": 18251500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kakkerenisujatha@yahoo.com",
      "offset": 12
    },
    {
      "val": "Honey2003",
      "offset": 45
    }
  ],
  "location": "loginstepdefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 616546400,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 141546500,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_on_home_page()"
});
formatter.result({
  "duration": 15137000,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 41126800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\" div:nth-child(1) div.ui.fluid.container div.ui.left.fixed.vertical.icon.menu.sidebar-dark.left-to-right:nth-child(1) div.menu-item-wrapper:nth-child(3) \u003e a.item\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027LAPTOP-029NRPGB\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\kakke\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5dc012514cdb70f00ff97b4058b5a3c1\n*** Element info: {Using\u003dcss selector, value\u003d div:nth-child(1) div.ui.fluid.container div.ui.left.fixed.vertical.icon.menu.sidebar-dark.left-to-right:nth-child(1) div.menu-item-wrapper:nth-child(3) \u003e a.item}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat Stepdefinationfile.loginstepdefination.user_moves_to_new_contact_page(loginstepdefination.java:63)\r\n\tat ✽.Then user moves to new contact page(C:/Users/kakke/OneDrive/Desktop/Eclipse/CucumberFreeCRMBDD/src/main/java/Features/contact.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sujathakakkereni",
      "offset": 13
    },
    {
      "val": "kakkereni",
      "offset": 35
    }
  ],
  "location": "loginstepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginstepdefination.user_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});