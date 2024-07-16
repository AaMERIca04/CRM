
// class TestrunOB {
//     // get home(){ return browser.url("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php")}
//     get stafflogin(){ return $('//div[@class="navBar"]//child::a[text()="Staff Login"]')}
//     get userid(){ return $('//div[@class="input_field"]/child::input[@type="text"]')}
//     get pass(){ return $('//div[@class="input_field"]/child::input[@type="password"]')}
//     get loginbtn(){return $('//input[@class="login-btn"]')}
//     get logoutbtn(){return $('//a[@class="staff_logout"]/child::input[@name="logout_btn"]')}
//     get active(){return $('//div[@class="staff_options"]/child::input[@name="viewdet"]')}
//     get scrollendy(){return $('//td[text()="255"]')}
//     get scrollendx(){return $('//td[text()="ACTIVE"]')}
//     get customercontainer(){return $('//div[@class="active_customers_container"]')}
//     get homeback(){return $('//a[@class="staff_home"]/child::input[@type="button"]')}
//     get accountno(){return $('//td[text()="1011801011046"]')}
//     get viewcust(){return $('//div[@class="staff_options"]/child::input[@name="view_cust_by_ac"]')}
//     get searchcust(){return $('//input[@name="account_no"]')}
//     get submit(){return $('//input[@name="submit_view"]')}


//     async Test(useridval,passval){
//     await browser.maximizeWindow()
//     await browser.pause(3000);
//     await this.stafflogin.click()
//     await this.userid.setValue(useridval)
//     await this.pass.setValue(passval)
//     await this.loginbtn.doubleClick()
//     await this.active.click()
//     await browser.pause(3000)
//     await this.scrollendy.scrollIntoView() 
//     const text = await this.accountno.getText()
//     await this.homeback.click()
//     await this.viewcust.click()
//     await this.searchcust.setValue(text)
//     await this.submit.click()
//     await browser.scroll(0,600)

//     await browser.pause(5000);
// }
// }
// export default new TestrunOB()