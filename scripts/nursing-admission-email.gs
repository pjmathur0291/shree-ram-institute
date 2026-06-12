/**
 * Nursing admission form email handler.
 *
 * Deploy steps:
 * 1. Open https://script.google.com and create a new project.
 * 2. Paste this file contents into Code.gs.
 * 3. Deploy > New deployment > Web app.
 * 4. Execute as: Me | Who has access: Anyone
 * 5. Copy the web app URL into .env as VITE_NURSING_EMAIL_WEBHOOK_URL
 */

const RECIPIENT_EMAIL = "admissions.raminstitute@gmail.com";

function doGet(e) {
  const params = e.parameter || {};

  const name = params.name || "";
  const email = params.email || "";
  const phone = params.phone || "";
  const state = params.state || "";
  const city = params.city || "";
  const course = params.course || "B.Sc Nursing";
  const pageUrl = params.pageUrl || "";
  const submittedAt = params.submittedAt || "";
  const utmSource = params.utm_source || "";
  const utmMedium = params.utm_medium || "";
  const utmCampaign = params.utm_campaign || "";
  const utmTerm = params.utm_term || "";
  const utmKeyword = params.utm_keyword || "";

  const body = [
    "New Nursing Admission Inquiry",
    "",
    "Name: " + name,
    "Email: " + email,
    "Phone: " + phone,
    "State: " + state,
    "City: " + city,
    "Course: " + course,
    "Page URL: " + pageUrl,
    "Submitted At: " + submittedAt,
    "",
    "UTM Source: " + utmSource,
    "UTM Medium: " + utmMedium,
    "UTM Campaign: " + utmCampaign,
    "UTM Term: " + utmTerm,
    "UTM Keyword: " + utmKeyword,
  ].join("\n");

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: "New B.Sc Nursing Inquiry - " + (name || "Unknown"),
    body: body,
    replyTo: email || undefined,
  });

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
