function openSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
};


function updateMenu() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Launch', 'openSidebar')
    .addToUi();
}

function onOpen(e) {
  updateMenu();
}

function testFunc() {
  console.log('success');
  return 'Hello from Apps Script';
}