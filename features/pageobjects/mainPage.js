
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage{
    /**
     * define selectors using getter methods
     */
    get btnCategory () {
        return $('#gh-shop-a');
    }

    get btnCellphone () {
        return $('a*=Cell phones');
    }

    get iptSearchBar () {
        return $('#gh-ac')
    }

    get lstCategories(){
        return $('#gh-cat')
    }

    get btnSearch(){
        return $('#gh-btn')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

module.exports = new MainPage();
