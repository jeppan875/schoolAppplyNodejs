const webdriver = require('selenium-webdriver')

var Page = function () {
    var By = webdriver.By
    var until = webdriver.until
    this.driver = new webdriver.Builder().forBrowser('chrome').build()
    var driver = this.driver

    this.visit = function (url) {
        return driver.get(url)
    }

    this.quit = function () {
        return driver.quit
    }

    this.find = function (element) {
        driver.wait(until.elementLocated(By.css(element)), 5000)
        return driver.findElement(By.css(element))
    }

    this.findAll = function (element) {
        driver.wait(until.elementLocated(By.css(element)), 5000)
        return driver.findElements(By.css(element))
    }

    this.setText = function (element, text) {
        return this.find(element).sendKeys(text)
    }
}

module.exports = Page
