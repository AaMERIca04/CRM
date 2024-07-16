// import fs from "fs"
// class practice{
//    get dropdown(){ return $('//section[text()="Dropdown"]') }
//    get mouseaction(){return $('//section[text()="Mouse Actions"]')}
//    get clickhold(){return $('//section[text()="Click & Hold"]')}
//    get circleclick(){return $('//div[@id="circle"]')}
//    get textbox(){return $('//ul[@class="mt-1 ps-3 pe-4"]/descendant::section[text()="Text Box"]')}
//    get textfield(){return $('//input[@id="name"]')}
//    get submit(){return $('//button[@type="submit"]')}
//    get checkbox(){}
//    get check(){return $('//input[@id="domain1"]')}
//    get movetoelement(){return $('//input[@id="mode6"]')}
//    get scrolltoelem(){return $('//section[text()="Others"]')}
//    get dropdown(){return $('//section[text()="Dropdown"]')}
//    get dropdownclick(){return $('//select[@id="select3"]')}
//    get submitbtn(){return $('//button[@id="continuebtn"]')}
//    get sourceelm(){return $('//img[@alt="The peaks of High Tatras"]')}
//    get destinationelem(){return $('//div[@id="trash"]')}


//    //bl
//    async test(){
//    await browser.maximizeWindow()
//    await this.dropdown.click()
//    await this.mouseaction.waitForDisplayed({timeout:3000}) //waitfordisplayed
//    await this.mouseaction.click()
//    const text= await this.mouseaction.getText()           //gettext()
//    await this.clickhold.click()                           //click
//    await this.circleclick.doubleClick()                   //doubleclick
//    await browser.pause(5000)                              //pause()
//    console.log(text);
//    }

//    async test1(){
//       await this.textbox.click()             
//       const val = await this.textbox.getAttribute('class')           //getAttribute()       
//       const val1= await this.submit.getCSSProperty('disabled')       //getCssProperty()  
//       const isdisp = await this.textfield.isDisplayed()              //isDisplayed()
//       const isview = await this.textfield.isDisplayedInViewport()    //isDisplayedInViewport()
//       const isenable = await this.textfield.isEnabled()              //isEnabled()
//       const isexist = await this.textfield.isExisting()              //isExisting()
//       const isfocus = await this.textfield.isFocused()               //isFocused()
//       await this.textfield.addValue("testing.!!!")                   //addValue()

//       console.log(val)
//       console.log(val1)
//       console.log(isdisp)
//       console.log(isview)
//       console.log(isenable)
//       console.log(isexist)
//       console.log(isfocus)
//    }

//    async test2(){
//       await this.check.waitForDisplayed({timeout:3000})
//       await this.check.click()
//       const issel = await this.check.isSelected()                       //isSelected()
//       await this.movetoelement.moveTo()                                 //moveTo()
//       await this.scrolltoelem.scrollIntoView()
//       await this.dropdown.click()
//       await this.dropdownclick.selectByAttribute('id','countryOpt2')    //selectByattribute,selectByIndex(),selectByVisibletext()
//       await this.dropdownclick.setTimeouts(3000)                        //setTimeouts for element
//       const html =  await this.dropdownclick.getHTML()                  //getHTML()
//       const location = await this.dropdownclick.getLocation()           //getLocation()
//       await this.dropdownclick.waitUntil(()=>{                          //waituntil()
//         return this.dropdownclick.isDisplayed()
//       },{
//          timeout:5000
//         })
//       await browser.pause(5000)   
//       const screenshot = await browser.takeScreenshot()                         //takeScreenshot()
//       fs.writeFileSync('./Screenshots/screenshot2.png',screenshot,'base64')     //writeFileSync()
//       const size = await this.submitbtn.getSize()  
//       console.log(issel)
//       console.log(html);
//       console.log(location);
//       console.log(size);
//     //   console.log(sc);
//    }

//    async test3(){

//       const sourceLocation = await this.sourceelm.getLocation()
//       const destinationLocation = await this.destinationelem.getLocation()

//       await browser.performActions([
//         {
//             type:'pointer',
//             id:'mouse',
//             parameters: {
//                 poinertype:'mouse',
//                 actions: [
//                     {type:'pointerMove', duration: 0, x:sourceLocation.x + 50, y:sourceLocation.y + 50},
//                     {type:'pointerDown', button: 0},
//                     {type:'pointerMove', duration: 1000, x:destinationLocation.x +50, y:destinationLocation.y +50},
//                     {type:'pointerUp', button:0}
//                 ]
//             }
//         }
//       ])
//     //   await browser.pause(5000)
//    }
// }

// export default new practice()