/*const webdriver = require('selenium-webdriver')
var { describe, it, after, before } = require('selenium-webdriver/testing')
var By = webdriver.By
var until = webdriver.until
var driver

describe('sign up on school apply', function () {
    this.timeout(50000)
    beforeEach(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build()
        driver.get('http://schoolapply.com')
        driver.manage().window().maximize()
    });
    afterEach(function() {
        driver.quit()
    })

    it('signup new user', function() {
        driver.findElement(By.css('#lnkLoginLi')).click()
        driver.wait(until.elementIsVisible(driver.findElement(By.css('#loginBlock > h4:nth-child(1)'))))//header login
        driver.findElement(By.css('#loginBlock > div:nth-child(2) > p:nth-child(5) > a:nth-child(1)')).click()

        driver.wait(until.elementIsVisible(driver.findElement(By.css('#page-signup > div:nth-child(1) > h4:nth-child(1)'))))//header signup
        driver.findElement(By.css('#txtRegFirstName')).sendKeys('jesep')
        driver.findElement(By.css('#txtRegLastName')).sendKeys('nils')
        driver.findElement(By.css('#txtRegUserName')).sendKeys('jeppan85gmail.com')
        driver.findElement(By.css('#txtRegPassword')).sendKeys('012345')
        driver.findElement(By.css('#btnSignUp')).click()

    })

    it('login new user', function() {
        driver.findElement(By.css('#lnkLoginLi')).click()
        driver.wait(until.elementIsVisible(driver.findElement(By.css('#loginBlock > h4:nth-child(1)'))))//header login
        driver.findElement(By.css('#txtLoginUserName')).sendKeys('jeppan85gmail.com')
        driver.findElement(By.css('#txtLoginPassword')).sendKeys('012345')
        driver.findElement(By.css('#btnLogin')).click()
        
    })
    
})
*/
