import LeadsPage from "../pageobjects/vtiger.js";
import fs, { readFileSync } from "fs"

const data = readFileSync('./test/TESTDATA/addData.json')
const cread = JSON.parse(data)
describe('Leadpagemodule', async() => {  
    //   let prod = cread.productselect;
    //   let uid1 = cread.us1
    it('testcases',async()=>{
        await LeadsPage.home
        await LeadsPage.Testcontact('admin','Products');
        // await LeadsPage.hp();
    })
 })