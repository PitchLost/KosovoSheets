


var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
// Get the active sheet
let sheet = spreadsheet.getSheetByName('Selling');









let B2 = sheet.getRange('B2').getValue()
let C2 = sheet.getRange('C2').getValue()
let E2 = sheet.getRange('E2').getValue()
let F2 = sheet.getRange('F2').getValue()
let A2 = sheet.getRange('A2').getValue()
let D2 = sheet.getRange('D2').getValue()

// Declaring Vars

let gangFund = 1280000;
let itemNameCell = C2; 
let itemAmountCell = E2;
let fullPriceCell = F2;
let sellerCell = B2;
let dateOfSale = A2;
let buyer = D2;

// Function to Update Gang Fund

function updateGangFund() { 

    // Increase the gang fund

    

    gangFund = fullPriceCell + gangFund;
    console.log('The Gang fund is at',gangFund)


    // Decrease the Gang Fund 

    if (placeOrderCalled) {

    gangFund = ofullPriceCell - gangFund;
    console.log('The gang fund is decreasing to',gangFund);
    recordOrder()
    }



recordSale()

    // Logs




gangFundCell()


// clear the cells on the selling sheet
clearCells()

//Clear the cells on the ordering sheet 


}

