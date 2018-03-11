var webdriver = require ('../node_modules/selenium-webdriver');
By = webdriver.By,
until = webdriver.until;


var Page = function () {
	
	this.driver = new webdriver.Builder().usingServer().withCapabilities({browserName: 'firefox'}).build();
	var driver = this.driver;
	
	this.getUrl = function () {
		 driver.get('http://sydneytesters.herokuapp.com/');
		 this.wait(5);
		 return this;
	}
	this.clickQuote = function () {
		
		driver.findElement(By.css('#getlifequote')).click();
		this.wait(3);
		return this;
	}
	this.enterAge = function (txt){
		
		driver.findElement(By.xpath('//input[@placeholder="Enter your age"]')).sendKeys(txt);
		this.wait(3);
		return this;
	}
	this.selectGender = function () {
		
		driver.findElement(By.css('#female')).click();
		this.wait(3);
		return this;
	}
	this.selectOccupation = function () {
		
		driver.findElement(By.css('#occupation')).click();
		this.wait(3);
		driver.findElement(By.xpath('//option[text()="Medium Risk"]')).click();
		this.wait(3);
		return this;
	}
	this.selectState = function () {
		
		driver.findElement(By.css('#state')).click()
		this.wait(3);
		driver.findElement(By.xpath('//option[text()="Victoria"]')).click();
		this.wait(3);
		return this;
	}
	this.enterEmail  = function () {
		
		driver.findElement(By.xpath('//input[@placeholder="Enter your email address"]')).sendKeys('xiong@test.com');
		this.wait(3);
		return this;
	}
	this.clickGetQuote = function () {

		driver.findElement(By.css('#getquote')).click();
		this.wait(3);
		return this;
	}
	this.clickPayment = function () {
		
		driver.findElement(By.css('#payment')).click();
	    this.wait(3);
		return this
	}
	
	this.enterCardholdername = function (txt) {
		
		
		driver.findElement(By.css('#cardholdername')).sendKeys(txt);
		this.wait(3);
		return this
	} 
	
	this.enterMail = function (mail){
		
		driver.findElement(By.xpath('//input[@placeholder="This will be your login for the website"]')).sendKeys(mail);
		this.wait(3);
		driver.findElement(By.css('input[id="password"][class="form-control"]')).sendKeys(mail);
		this.wait(3);
		driver.findElement(By.css('#card-number')).sendKeys('4716570373579415');
		this.wait(3);
		driver.findElement(By.css('#cvv')).sendKeys('096');
		return this;
	}
	
	this.selectYearAndmonth  = function () {
		
		driver.findElement(By.css('#expiry-month')).click();
		driver.findElement(By.xpath('//option[text()="Feb (02)"]')).click();
		this.wait(3);
		driver.findElement(By.name('expiry-year')).click();
		this.wait(3);
		driver.findElement(By.xpath('//option[text()="2014"]')).click();
		this.wait(3);
		return this;
	}
	this.clickPay = function () {
		
		
		driver.findElement(By.css('#pay')).click();
		this.wait(3);
		return this;
	}
	
	
	this.wait  = function (sec) {
		
		//driver.sleep(sec*1000);
		driver.manage().timeouts().implicitlyWait(sec*1000);
	}
}

module.exports=Page