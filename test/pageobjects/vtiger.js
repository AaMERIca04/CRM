class LeadsPage{
   get home(){
     return browser.url("http://49.249.28.218:8888/")
     }

    // get crm(){ return browser.$('(//div[@class="product"])[3]')}
    // get vtiger(){ return browser.$('//td[@data-label="Row 1"]/child::a[text()="V-Tiger"]')}
    get username(){return $('//div[@class="input"]/child::input[@type="text"]')}
    get password(){return $('//input[@type="password"]')}
    get login(){return $('//div[@class="button"]/child::input[@id="submitButton"]')}
    get lead(){ return browser.$('//td[@class="tabUnSelected"]/child::a[text()="Leads"]')}
    get createlead(){return $('//img[@title="Create Lead..."]')}
    get dropdown(){return $('//td[@class="dvtCellInfo"]/child::select[@name="salutationtype"]')}
    get firstname(){return $('//td[@class="dvtCellInfo"]/child::input[@name="firstname"]')}
    get contactclick(){return $('//td[@class="small"]/descendant::a[text()="Contacts"]')}
    get kishore(){return $('//a[text()="kishore_3657"]')}
    get edit(){return $('(input[@fdprocessedid="sdmctb"])[2]')}
    get moreinfo(){return $('(//td[@class="dvtUnSelectedCell"]/descendant::a[text()="More Information"])[1]')}
    get products(){return $('//img[@id="show_Contacts_Products"]')}
    get productsel(){return $('//input[@title="Select Products"]')}
    get canabesshampoo(){return $('//a[text()="Canabis Shampoo"]')}
    get leadsource(){return $('//select[@name="leadsource"]')}
    get edit(){return $('//a[text()="edit"]')}
    get calender(){return $('//img[@id="jscal_trigger_sales_end_date"]')}
    get monthchange(){return $('(//td[@class="button nav"])[3]')}
    get datesel(){return $('//td[text()="19"]')}
    get delprod(){return $('//a[text()="del"]')}
    get account(){return $('//img[@style="padding: 0px;padding-left:5px"]')}






    async Testcontact(usernameval,prodval){
        await browser.maximizeWindow()
        await this.username.waitForDisplayed();
        // await this.username.click();
         await this.username.setValue(usernameval);
         await this.password.setValue('admin');
         await this.login.click();      
         await this.contactclick.click()
         await browser.scroll(0,700)
         await this.kishore.click()
         await this.moreinfo.waitForDisplayed()
         await this.moreinfo.moveTo()
         await this.moreinfo.click()
         await browser.scroll(0,700)
         await this.products.click()
         const mainWindow = await browser.getWindowHandle()
         await this.productsel.click()
         const b2 = await browser.getWindowHandles()
         const newWindow = b2.find(handle => handle !== mainWindow);
         await browser.switchToWindow(newWindow) 
         await browser.maximizeWindow()
         await this.canabesshampoo.waitUntil(()=>{
           return this.canabesshampoo.isDisplayed()
         },
        {
            timeout:5000
        })
         await browser.getTitle()
         await this.canabesshampoo.click()
         await browser.switchToWindow(mainWindow)
         await this.edit.waitForDisplayed()
         await this.edit.click()
         await this.calender.click()
         for(let i=0;i<=2;i++)
        {
          await this.monthchange.click()
         }
        await this.datesel.click()
        await browser.back()
        await this.delprod.click()
        await browser.pause()
        await browser.acceptAlert()
        await this.account.click() 
    }
}
export default new LeadsPage()