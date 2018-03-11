var webdriver = require ('../../node_modules/selenium-webdriver');
By = webdriver.By,
until = webdriver.until;
const test = require('../../node_modules/selenium-webdriver/testing');
var assert = require('assert');
var Page = require ('../../lib/Base_Page');
var page

test.describe('Sydney Testers', function() {
	
	test.before(function() {
	page = new Page();
  });
  
   test.it('Sydney Testers Life Insurance', function() {
	   
         page.getUrl().clickQuote()
		.enterAge('98').selectGender()
		.selectOccupation().selectState()
		.enterEmail().clickGetQuote();
	     page.wait(3);
								
  })

   test.it('Sydney Testers Insurance Payment', function() {
	   
	   page.clickPayment().enterCardholdername('xioza01')
	  .enterMail('xioza01@test.com').selectYearAndmonth().clickPay();
	  page.wait(3);
});

  test.it('Payment Sucessful', function() {
	  
	 	page.driver.getTitle()
		 .then (function(title){
		  console.log('title->'+title);
		  assert.ok(title==='SydneyTesters QuickQuote');
		});
		
		page.driver.manage().timeouts().implicitlyWait(5000);
		
	 });
  
    test.after(() => page.driver.quit());
  
  
  
});

