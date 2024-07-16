// // import addDatapage from "../../pageobjects/addDatapage.js"
// // import fs from "fs"

// // let data = fs.readFileSync("./test/TESTDATA/addData.json")
// // let cred = JSON.parse(data)

// // describe('data driven example', async() => { 
// //     let un = cred.usn;
// //     let pw = cred.pwd;
// //     it('login in app',async()=>{
// //         await browser.url("https://practicetestautomation.com/practice-test-login/")
// //         await addDatapage.Logintest(un,pw)
// //     })
// //  })

// import TestrunOB from "../../pageobjects/onlineBankingSystem.js"
// import fs from "fs"

// let data1 = fs.readFileSync("./test/TESTDATA/addData.json")
// let credentials = JSON.parse(data1) //converting json object into javascript object

// describe('OB test', async() => { 
//    let uid = credentials.useridval;
//    let pwd = credentials.passval;
//     it('Testcases',async()=>{
//         await browser.url("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php")
//         await TestrunOB.Test(uid,pwd);
//     })
// })