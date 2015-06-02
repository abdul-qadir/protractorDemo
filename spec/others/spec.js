// spec.js
describe('Protractor Demo App', function() {
  var viewAllLink = element(by.css('.viewAll'));
 // var secondNumber = element(by.model('second'));
  //var goButton = element(by.id('gobutton'));
  //var latestResult = element(by.binding('latest'));
  //var history = element.all(by.repeater('result in memory'));

  function viewAllChallenges() {
   // firstNumber.sendKeys(a);
   // secondNumber.sendKeys(b);
    viewAllLink.click();
  }

  beforeEach(function() {
    browser.get('http://www.topcoder-dev.com/challenges');
  });

  it('should have a history', function() {
    viewAllChallenges();

   // expect(history.count()).toEqual(2);

   // add(5, 6);

    //expect(history.count()).toEqual(0); // This is wrong!
  });
});