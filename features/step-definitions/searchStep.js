const { Given, When, Then} = require('@wdio/cucumber-framework');

const mainPage = require('../pageobjects/mainPage');
const subPage = require('../pageobjects/subPage');



When(/^user Type (.*) search string in the search bar$/,async (item) => {
    await mainPage.iptSearchBar.setValue(item)
});

When(/^user Change the Search (\d*) and click search$/,async (categories) => {
	await mainPage.lstCategories.selectByAttribute('value',`${categories}`)
    await mainPage.btnSearch.click()
});

Then(/^user Verify that the first result name matches with the (.*) search string$/,async (item) => {
	const condition = subPage.txtSearchResult1
    if(condition.isExisting){
          expect(subPage.txtSearchResult1).toHaveTextContaining(`${item}`)
    }else{
        const condition1 = $('(//span[@role="heading"])[2]') 
         expect(condition1).toHaveTextContaining(item)
    }
});
