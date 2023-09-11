const { Given, When, Then } = require('@wdio/cucumber-framework');

const mainPage = require('../pageobjects/mainPage');
const subPage = require('../pageobjects/subPage');
let filterScreen
let filterLocation

Given(/^user at Ebay main Menu selection$/, async () => {
    await browser.url('https://www.ebay.com/')
});


When(/^user Navigate to Search by category > Electronics > Cell Phones & accessories$/, async () => {
    await mainPage.btnCategory.click()
    await mainPage.btnCellphone.click()
});

When(/^user click Cell Phones & Smartphones in the left hand side navigation section$/, async () => {
	await subPage.btnCellphoneSmart.click()
});

When(/^user click - More refinements$/, async () => {
	await subPage.btnFilter.click()

});

When(/^user Add 3 filters - (.*) size, Price (\d*) (.*) and Item (.*) appearing in the pop-up and click apply$/,async (screen, lowValue, maxValue, location) => {
	await subPage.FbtnScreen.click()
    await subPage.cboFilter(screen).click()

    await subPage.FbtnPrice.click()
    await subPage.iptPriceLow.setValue(lowValue)
    await subPage.iptPriceMax.setValue(maxValue)

    await subPage.FbtnLocation.click()
    await subPage.cboFilterLocation(location).click()

    filterScreen = await $('//span[@data-aspecttype="aspect-Screen%20Size"]').getText()
    filterLocation = await $('//span[@data-aspecttype="location"]').getText()
    await subPage.btnApply.click()
    
});

Then(/^user should see filter tags already applied$/, async () => {
    await subPage.btnFilterapplied.click()

    //cant assert web price because there's bug it converting idr to dollar
    await $(`//span[@class="brm__item-label" and text()="Screen Size: ${filterScreen}"]`).isDisplayed()
    await $(`//span[@class="brm__item-label" and text()="Location: ${filterLocation}"]`).isDisplayed()
});

