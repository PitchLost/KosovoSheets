
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
// Get the active sheet
var invSheet = spreadsheet.getSheetByName('inventory');


// Function To display the gang fund in the correct cell

function gangFundCell() {
  console.log('The gang fund is', gangFund);

  // Set the value of cell B1 to gangFund
  invSheet.getRange('B1').setValue(gangFund);
  console.log('B1 =', gangFund);
}

