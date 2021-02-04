package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C:\\Users\\kakke\\OneDrive\\Desktop\\Eclipse\\CucumberFreeCRMBDD\\src\\main\\java\\Features\\contact.feature"
		,glue= {"Stepdefinationfile"},
		format = {"pretty", "html:test-output","junit:junit_xml/cucmber.xml"},
		monochrome=true,
		dryRun = false
				)

public class testrunner{
	
}
				
	
