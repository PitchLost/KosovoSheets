// Open the spreadsheet by providing the correct spreadsheet ID
var spreadsheet = SpreadsheetApp.openById('1Voj09EpLh8ZGY2zAhq_MX1Cz5v_gE8HtT5Rr1DN6y9I');


let invSheet = spreadsheet.getSheetByName("inventory")

let activeSheet = SpreadsheetApp.getActiveSheet();



// Function To display the gang fund in the correct cell

function gangFundCell() {
  console.log('The gang fund is', gangFund);

  // Set the value of cell B1 to gangFund
  invSheet.getRange('B1').setValue(gangFund);
  console.log('B1 =', gangFund);
}

