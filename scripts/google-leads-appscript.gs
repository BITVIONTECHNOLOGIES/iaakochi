/**
 * IAA Kochi — Google Docs lead collector
 *
 * SETUP (bind this to your IAA_WEB_LEADS Google Doc):
 * 1. Open the editable Google Doc (not the /pub link).
 * 2. Extensions → Apps Script
 * 3. Paste this entire file and Save.
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL into your project `.env.local`:
 *    GOOGLE_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
 * 6. Restart the Next.js server.
 *
 * Field order matches the website enquiry form:
 * Timestamp → Full Name → Phone → Email → Qualification → Course → Message → Source
 */

var HEADER_TITLE = "IAA WEB LEADS";
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
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();

    ensureHeader_(body);

    var values = {
      Timestamp: data.submittedAt || new Date().toISOString(),
      "Full Name": data.fullName || "",
      "Phone Number": data.phone || "",
      Email: data.email || "",
      Qualification: data.qualification || "",
      "Course Interested In": data.course || "",
      Message: data.message || "",
      "Source Page": data.source || "",
    };

    body.appendParagraph("────────────────────────────────").setForegroundColor("#888888");
    body.appendParagraph("NEW ENQUIRY").setBold(true).setForegroundColor("#0f766e");

    for (var i = 0; i < FIELD_ORDER.length; i++) {
      var key = FIELD_ORDER[i];
      var line = body.appendParagraph(key + ": " + String(values[key] || "—"));
      line.setForegroundColor("#222222");
      line.setSpacingAfter(2);
    }

    body.appendParagraph("");
    doc.saveAndClose();

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

function ensureHeader_(body) {
  if (body.getNumChildren() === 0) {
    body.appendParagraph(HEADER_TITLE).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(
      "Leads collected from iaakochi.com enquiry forms (in form field order)."
    ).setForegroundColor("#666666");
    body.appendParagraph("");
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
