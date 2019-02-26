function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = x;  // First row of data to process
  var numRows = y;   // Number of rows to process
  // Fetch the range of cells A1:B100
  var dataRange = sheet.getRange(startRow, x, numRows, y)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0];  // First column
    var message = row[1];       // Second column
    var subject = "test email";
    MailApp.sendEmail(emailAddress, subject, message);
  }
