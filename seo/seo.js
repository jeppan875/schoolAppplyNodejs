const webdriver = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome')
var By = webdriver.By
var until = webdriver.until
const options = new chromeDriver.Options()
options.addArguments('headless', 'disable-gpu')

let pages = ['https://www.schoolapply.com/schools/bachelors-degree/canadian-university-dubai/']
//let pages = ['https://www.schoolapply.com/', 'https://www.schoolapply.com/howwehelp/','https://www.schoolapply.com/listing/']
//file:///C:/Users/Jesper/Desktop/linne/1me321/U3/start.html
//https://www.schoolapply.com/schools/bachelors-degree/canadian-university-dubai/
for (let i = 0; i < pages.length; i++) {

    var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build()
    driver.get(pages[i])

    //title
    driver.getTitle().then(function (title) {
        console.log(`\ntitle: ${title}`)
    })
    //description
    driver.findElements(By.name('description')).then(function (tags) {
        console.log(`\ndescription: ${tags.length}`)
    })
    driver.findElements(By.name('description')).then(function (tags) {
        tags.map(function (elements) {
            elements.getAttribute('content').then(function (text) {
                console.log(`description text: ${text}`)
            })
        })
    })    
    //canonical
    driver.findElements(By.css('link')).then(function (tags) {
        tags.filter(function (elements) {
            elements.getAttribute('rel').then(function (text) {
                if (text === 'canonical') {
                    elements.getAttribute('href').then(function (href) {
                        console.log(`\ncanonical: ${href}`)
                    })
                }
            })
        })
    })    
    //h1
    driver.findElements(By.css('h1')).then(function (tags) {
        console.log(`\nh1: ${tags.length}`)
    })
    driver.findElements(By.css('h1')).then(function (tags) {
        tags.map(function (elements) {
            elements.getText().then(function (text) {
                console.log(`h1 text: ${text}`)
            })
        })
    })
    //img
    driver.findElements(By.css('img')).then(function (tags) {
        console.log(`\nimg: ${tags.length}`)
    })
    driver.findElements(By.css('img[alt]')).then(function (tags) {
        console.log(`img[alt]: ${tags.length}`)
    })
    driver.findElements(By.css('img')).then(function (tags) {
        tags.filter(function (elements) {//filter
            elements.getAttribute('alt').then(function (alt) {
                elements.getAttribute('src').then(function (src) {
                    console.log(`\nalt: ${alt}\nsrc: ${src}`)
                })
            })
        })
    })
    driver.quit()
}