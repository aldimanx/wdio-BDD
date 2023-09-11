
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubPage{
    /**
     * define selectors using getter methods
     */


    get btnCellphoneSmart () {
        return $('a*=Cell Phones & Smartphones');
    }

    get btnFilter(){
        return $('//button[@aria-label="All Filters"]')
    }

    get FbtnScreen(){
        return $('//*[@id="c3-mainPanel-Screen%20Size"]')
    }

    get FbtnPrice(){
        return $('//*[@id="c3-mainPanel-price"]')
    }

    get FbtnLocation(){
        return $('//*[@id="c3-mainPanel-location"]')
    }

    cboFilter(value){
        return $(`//span[@class="cbx x-refine__multi-select-cbx" and text()="${value}"]`)
    }

    cboFilterLocation(location){
        return $(`//input[@role="radio" and @value="${location}"]`)
    }

    get iptPriceLow(){
        return $('//input[@aria-label="Minimum Value, US Dollar"]')
    }

    get iptPriceMax(){
        return $('//input[@aria-label="Maximum Value, US Dollar"]')
    }

    get btnApply(){
        return $('//button[@aria-label="Apply"]')
    }

    get btnFilterapplied(){
        return $('(//span[@class="brm__flyout__btn-label"])[1]')
    }

    get txtSearchResult1(){
        return $('//span[@role="heading"]/child::span[@class="BOLD"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

module.exports = new SubPage();
