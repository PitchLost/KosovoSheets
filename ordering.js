let orderSheet = spreadsheet.getSheetByName('Ordering')


let oB2 = orderSheet.getRange('B2').getValue()
let oC2 = orderSheet.getRange('C2').getValue()
let oE2 = orderSheet.getRange('E2').getValue()
let oF2 = orderSheet.getRange('F2').getValue()
let oA2 = orderSheet.getRange('A2').getValue()
let oD2 = orderSheet.getRange('D2').getValue()





// Declaring Vars

let ogangFund = 550000
let oitemNameCell = oC2; 
let oitemAmountCell = oE2;
let ofullPriceCell = oF2;
let osellerCell = oB2;
let odateOfSale = oA2;
let obuyer = oD2;

let placeOrderCalled = false
function placeOrder() { 
  console.log('Order Script Called')
 placeOrderCalled = true;


// Clear the Cells on the Ordering Section 







 // Record Order

}
function clearOrderingCells() { 
    console.log('Setting values to Null')
orderSheet.getRange('F2').setValue(null)
orderSheet.getRange('C2').setValue(null)
orderSheet.getRange('E2').setValue(null)
orderSheet.getRange('B2').setValue(null)
orderSheet.getRange('A2').setValue(null)
orderSheet.getRange('D2').setValue(null)
}

