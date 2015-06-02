// spec.js

var LoginPage = function() {
  this.userInput = element(by.model('vm.username'));
  this.passwordInput = element(by.model('vm.password'));
  this.loginButton = element(by.css('.submit'));
 
  this.get = function() {
    browser.get('https://www.topcoder-dev.com/work/#/login');
  };
 
  this.login = function(username, password) {
    this.userInput.sendKeys(username);
    this.passwordInput.sendKeys(password);
    var EC = protractor.ExpectedConditions;
    
    this.loginButton.click().then(function(){
    browser.driver.sleep(1);
//browser.waitForAngular();`
    	element.all(by.css('.label')).each(function(element, index) {
    	browser.wait(EC.not(EC.presenceOf(element)), 10000);
 	 // Will print 0 First, 1 Second, 2 Third.
 		 element.getText().then(function (text) {
 	   	console.log(index, text);
 	 });
	});
	});
  };
  
  this.newProject = function () {
	var elementList = element.all(by.css('.label'));
	browser.pause();
	elementList.get(2).click();
	browser.pause();
		//browser.driver.wait(protractor.until.elementIsNotVisible(this.submitWorkFlow));
		//this.submitWorkFlow.click();
	};
  
};


 
describe('login', function() {
  it('welcomes the user', function() {
    var loginPage = new LoginPage();
    loginPage.get();
    loginPage.login('aqmansuri', 'appirio123');
  });
});