package Stepdefinationfile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class loginstepdefination {
	
	WebDriver driver;
	
@Given("^user is already page$")
public void user_is_already_page() throws InterruptedException{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\kakke\\OneDrive\\Documents\\chrome\\chromedriver.exe");
	driver = new ChromeDriver();
	Thread.sleep(5000);
	driver.get(" https://ui.cogmento.com/");
	}



@SuppressWarnings("deprecation")
@When("^title of login page is FRee CRM$")
public void title_of_login_page_is_FRee_CRM() {
	String title = driver.getTitle();
	System.out.println(title);
 Assert.assertEquals("Cogmento CRM", title);
}

@Then("^user enter \"(.*)\" and \"(.*)\"$")
public void user_enter_username_and_password(String email, String password) {
	
	driver.findElement(By.name("email")).sendKeys(email);
	driver.findElement(By.name("password")).sendKeys(password);
}


@Then("^user clicks on login button$")
public void user_clicks_on_login_button() {
	WebElement loginbtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
	
	loginbtn.click();
}

@SuppressWarnings("deprecation")
@Then("^user on home page$")
public void user_on_home_page() {
	String title= driver.getTitle();
	System.out.println("Home page title" +title);
	Assert.assertEquals("Cogmento CRM", title);



}

@Then("^user moves to new contact page$")
public void user_moves_to_new_contact_page() {
	driver.findElement(By.xpath("//span[text()='Contacts']")).click();
	driver.findElement(By.xpath("//span[text()='Contacts']//parent::a//following-sibling::button")).click();

}


@Then("^user enters \"([^\"]*)\"and \"([^\"]*)\"$")
public void user_enters_and(String firstname, String lastname) {
	driver.findElement(By.xpath ("//*[@id=\"main-content\"]/div/div[2]/form/div[1]/div[1]/div/div/input")).click();
	driver.findElement(By.xpath ("//*[@id=\"main-content\"]/div/div[2]/form/div[1]/div[2]/div/div/input")).click();
    driver.findElement(By.xpath ("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]/i")).click();
}

@Then("^user close browser$")
public void user_close_browser(){
	driver.quit();
}

}