const webdriver = require('selenium-webdriver')
const assert = require('assert')
var { describe, it, after, before } = require('selenium-webdriver/testing')
const chromeDriver = require('selenium-webdriver/chrome')
var By = webdriver.By
var until = webdriver.until
const options = new chromeDriver.Options()
options.addArguments('headless', 'disable-gpu')

let pages = ['file:///C:/Users/Jesper/Desktop/linne/1me321/U3/start.html', 'https://www.schoolapply.com/schools/bachelors-degree/canadian-university-dubai/']

describe('checking page', function () {
    this.timeout(0)
    for (let i = 0; i < pages.length; i++) {
        var img = 0
        it(` ${pages[i]}`, function () {
            var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build()
            driver.get(pages[i])
            //description
            driver.findElements(By.name('description')).then(function (tags) {
                assert.equal(tags.length, 1, 'description: ')
            })            
            //h1
            driver.findElements(By.css('h1')).then(function (tags) {
                assert.equal(tags.length, 1, 'h1: ')
            })
            //img
            driver.findElements(By.css('img')).then(function (tags) {
                 img = tags.length
            })
            driver.findElements(By.css('img[alt]')).then(function (alt) {
                assert.equal(alt.length, img, 'alt: ')
            })
            driver.quit()
        })
    }
})