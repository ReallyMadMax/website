// scripts/discover-ids.js
// Run ONCE locally to find your Business Profile account ID + location ID(s).
// Copy the IDs into the GitHub Actions workflow.
//
// Usage:
//   GOOGLE_CLIENT_ID=xxx \
//   GOOGLE_CLIENT_SECRET=yyy \
//   GOOGLE_REFRESH_TOKEN=zzz \
//   node discover-ids.js

import { google } from "googleapis";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
  console.error("Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN env vars.");
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function main() {
  const { token } = await oauth2Client.getAccessToken();

  // 1. Accounts
  const accountsRes = await fetch(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const accounts = await accountsRes.json();
  console.log("\n=== ACCOUNTS ===");
  console.log(JSON.stringify(accounts, null, 2));

  if (!accounts.accounts || accounts.accounts.length === 0) {
    console.log("No accounts found. Make sure the Google account you authed with is the verified owner.");
    return;
  }

  // 2. Locations under each account
  for (const acct of accounts.accounts) {
    console.log(`\n=== LOCATIONS UNDER ${acct.name} (${acct.accountName}) ===`);
    const locsRes = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${acct.name}/locations?readMask=name,title,storeCode`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const locs = await locsRes.json();
    console.log(JSON.stringify(locs, null, 2));
  }

  console.log("\n→ Copy the account name (e.g. 'accounts/12345') and the location name");
  console.log("  (e.g. 'locations/67890'). You'll add them as repo secrets:");
  console.log("    GOOGLE_ACCOUNT_ID = 12345");
  console.log("    GOOGLE_LOCATION_ID = 67890");
}

main().catch((e) => { console.error(e); process.exit(1); });
