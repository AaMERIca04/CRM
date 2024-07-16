import practice from "../pageobjects/practice.js";
import fs from "fs";

let datas = fs.readFileSync('./test/TESTDATA/addData.json');
let credentials = JSON.parse(datas)

describe('qspiderapp', async() => { 
    it('testcases',async()=>{
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await practice.test(); 
    })
    it('testcase2',async()=>{
        await browser.url("https://demoapps.qspiders.com/ui?scenario=1");
        await practice.test1();
    })
    it('testcase3',async()=>{
        await browser.url('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
        await practice.test2();
    })
    // it('testcase3',async()=>{
    //     await browser.url('https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager')
    //     await practice.test3();
    // })
 })