


// Function to Clear the cells from selling section


function clearCells() {
    console.log('Setting values to Null')
  sheet.getRange('F2').setValue(null)
  sheet.getRange('C2').setValue(null)
  sheet.getRange('E2').setValue(null)
  sheet.getRange('B2').setValue(null)
  sheet.getRange('A2').setValue(null)
  sheet.getRange('D2').setValue(null)
  
  console.log('Values Set')
  }
  
  // Record Sale
  
  function recordSale() {
    // Get a reference to the "Sales" sheet
    var salesSheet = spreadsheet.getSheetByName('Sales');
    
    // Get the values from the selling section
    var itemName = sheet.getRange('C2').getValue();
    var itemAmount = sheet.getRange('E2').getValue();
    var fullPrice = sheet.getRange('F2').getValue();
    var seller = sheet.getRange('B2').getValue();
    var dateOfSale = sheet.getRange('A2').getValue();
    var buyer = sheet.getRange('D2').getValue();
  
    // Append the values to the "Sales" sheet
    salesSheet.appendRow([dateOfSale, itemName, itemAmount, fullPrice, seller, buyer]);
  
    // Clear the cells on the selling sheet
    clearCells();
  }
  