// get-refresh-token.js
// Run ONCE on your local machine to generate a long-lived refresh token
// for the GitHub Actions workflow.
//
// Usage:
//   1. cd into a folder on your machine
//   2. npm init -y
//   3. npm install googleapis open
//   4. Save this file as get-refresh-token.js
//   5. Set env vars and run:
//        GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy node get-refresh-token.js
//   6. Browser opens → sign in with the Google account that owns Scuffed House
//   7. Approve the permissions
//   8. Copy the printed refresh_token into your GitHub repo secret GOOGLE_REFRESH_TOKEN

import { google } from "googleapis";
import http from "http";
import { URL } from "url";
import open from "open";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5757/oauth2callback";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars first.");
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Scopes — read-only access to your Business Profile
const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",     // <-- required for refresh_token
  prompt: "consent",          // <-- forces refresh_token even if previously authed
  scope: SCOPES,
});

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith("/oauth2callback")) {
    res.writeHead(404); res.end(); return;
  }
  const url = new URL(req.url, REDIRECT_URI);
  const code = url.searchParams.get("code");
  if (!code) {
    res.writeHead(400); res.end("No code in callback"); return;
  }
  try {
    const { tokens } = await oauth2Client.getToken(code);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html><body style="font-family:system-ui;padding:40px;max-width:600px">
        <h1>✅ Got the tokens</h1>
        <p>Check your terminal — the refresh_token is printed there.</p>
        <p>You can close this tab.</p>
      </body></html>
    `);
    console.log("\n========== COPY THIS ==========");
    console.log("REFRESH TOKEN:");
    console.log(tokens.refresh_token);
    console.log("================================\n");
    console.log("Paste the value above into your GitHub repo secret named:");
    console.log("  GOOGLE_REFRESH_TOKEN");
    console.log("\nFull token response (for reference):");
    console.log(tokens);
    setTimeout(() => process.exit(0), 500);
  } catch (err) {
    console.error("Token exchange failed:", err);
    res.writeHead(500); res.end("Token exchange failed — see terminal.");
  }
});

server.listen(5757, () => {
  console.log("Local auth server on http://localhost:5757");
  console.log("Opening browser for Google sign-in...");
  open(authUrl);
});
