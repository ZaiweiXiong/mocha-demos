var webdriver = require ('../../node_modules/selenium-webdriver');
By = webdriver.By,
until = webdriver.until;
const test = require('../../node_modules/selenium-webdriver/testing');
var assert = require('assert');


test.describe('Sydney Testers', function() {
	var driver = null;
	test.before(function() {
	return driver = new webdriver.Builder().usingServer().withCapabilities({
      browserName: 'firefox'
    }).build();
  });
  
   test.it('Sydney Testers Life Insurance', function() {
	   
         driver.get('http://sydneytesters.herokuapp.com/')
        .then (_ => driver.findElement(By.css('#getlifequote')).click())
		.then (_=> driver.sleep(3000))
		.then (_=> driver.findElement(By.xpath('//input[@placeholder="Enter your age"]')).sendKeys('29'))
		.then (_=> driver.findElement(By.css('#female')).click())
		.then (_=> driver.findElement(By.css('#occupation')).click())
		.then (_=> driver.findElement(By.xpath('//option[text()="Medium Risk"]')).click())
		.then (_=> driver.findElement(By.css('#state')).click())
		.then (_=> driver.findElement(By.xpath('//option[text()="Victoria"]')).click())
		.then (_=> driver.findElement(By.xpath('//input[@placeholder="Enter your email address"]')).sendKeys('xiong@test.com'))
		.then (_=> driver.findElement(By.css('#getquote')).click())
		.then (_=> driver.sleep(5000))
		.then (_=> driver.findElement(By.css('#payment')).click())
		.then (_=> driver.sleep(3000));
		 console.log('test..Sydney Testers Life Insurance');
       
  })

   test.it('Sydney Testers Insurance Payment', function() {
	    driver.findElement(By.css('#cardholdername')).sendKeys('xiong')
	   .then (_=> driver.sleep(2000))
	   .then(_ => driver.findElement(By.xpath('//input[@placeholder="This will be your login for the website"]')).sendKeys('xiong@test.com'))
	   .then (_=> driver.sleep(2000))
	   .then(_ => driver.findElement(By.css('input[id="password"][class="form-control"]')).sendKeys('password'))
	   .then (_=> driver.sleep(3000))
	   .then(_ => driver.findElement(By.css('#card-number')).sendKeys('4716570373579415'))
	   .then(_ => driver.findElement(By.css('#expiry-month')).click())
	   .then(_ => driver.findElement(By.xpath('//option[text()="Feb (02)"]')).click())
	   .then (_=> driver.sleep(2000))
	   .then(_ => driver.findElement(By.name('expiry-year')).click())
	   .then (_=> driver.sleep(3000))
	   .then(_ => driver.findElement(By.xpath('//option[text()="2014"]')).click())
	   .then(_ => driver.findElement(By.css('#cvv')).sendKeys('096'))
	   .then (_=> driver.sleep(2000))
	   .then(_ => driver.findElement(By.css('#pay')).click())
	   .then (_=> driver.sleep(3000));
});

  test.it('Payment Sucessful', function() {
	 
		 driver.getTitle()
		 .then (function(title){
		  console.log('title->'+title);
		  assert.ok(title==='SydneyTesters QuickQuote');
		});
		
		driver.manage().timeouts().implicitlyWait(5000);
		
	    driver.findElements(By.xpath('//b')).then (function (array){
			console.log ('array.length->'+array.length);
			
			array.map (function (el){
				
				el.getText().then (function (txt) {
					
					console.log ('text '+txt);
				});
			});
			
			
			assert(array.length, 1);
			
			
		})
		
	 
	 });
  
    test.after(() => driver.quit());
  
  
  
});

