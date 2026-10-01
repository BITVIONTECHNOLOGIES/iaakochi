/**
 * IAA Kochi — Google Sheet lead collector
 *
 * The website posts each enquiry here. Google only accepts that post when
 * the web app is deployed as: Execute as Me, Who has access: Anyone.
 * Anything stricter returns "Access denied" and the form shows
 * "Unable to save your enquiry".
 *
 * SETUP
 * 1. Open the IAA leads Google Sheet (create one if you only have a Doc).
 * 2. Extensions → Apps Script.
 * 3. Replace the script with this file and Save.
 * 4. Deploy → Manage deployments → Edit (pencil).
 *    If this is the first deploy: Deploy → New deployment → Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Version: New version
 * 5. Authorize the script when Google asks.
 * 6. Copy the Web App URL ending in /exec.
 *    If it changed, set GOOGLE_LEADS_WEBHOOK_URL in Netlify and redeploy.
 *
 * Columns, in form order:
 * Timestamp, Full Name, Phone Number, Email, Qualification,
 * Course Interested In, Message, Source Page
 */

var SHEET_NAME = "Leads";
var FIELD_ORDER = [
  "Timestamp",
  "Full Name",
  "Phone Number",
  "Email",
  "Qualification",
  "Course Interested In",
  "Message",
  "Source Page",
];

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    var data = JSON.parse(raw);
    var sheet = getSheet_();
    ensureHeader_(sheet);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.fullName || "",
      data.phone || "",
      data.email || "",
      data.qualification || "",
      data.course || "",
      data.message || "",
      data.source || "",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    service: "IAA_WEB_LEADS",
    fields: FIELD_ORDER,
  });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(FIELD_ORDER);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, FIELD_ORDER.length).setFontWeight("bold");
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
