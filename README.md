# GAS-permission-denied
Minimal reproduction of GAS V8 bug

1. Deploy this to an Apps Script project that is published in the Marketplace as a Sheets Add-On
    1. Bump the deployed script version number
2. Install the Add-On in a template sheet
3. Open the template sheet using this URL structure: `<sheet_url>/template/preview`
    1. Remove `/edit` from the sheet URL, if present
4. Click the blue 'Use Template' button in the top right corner of the page
5. Wait for the template to be copied and the "Document add-ons" sidebar to open
6. Click the 'Use' button, see console errors reported: `We're sorry, a server error occurred while reading from storage. Error code PERMISSION_DENIED.`

For contrast, try using the Add-On through the menu bar, and it works as expected. Only the 'Use' button is broken.
