// scripts/fetch-reviews.js
// Runs in GitHub Actions once a day. Fetches Google Business Profile reviews
// for the configured location and writes them to public/reviews.json.

import { google } from "googleapis";
import fs from "fs";
import path from "path";

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_ACCOUNT_ID,
  GOOGLE_LOCATION_ID,
} = process.env;

for (const [k, v] of Object.entries({
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN,
  GOOGLE_ACCOUNT_ID, GOOGLE_LOCATION_ID,
})) {
  if (!v) { console.error(`Missing env: ${k}`); process.exit(1); }
}

const oauth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function main() {
  const { token } = await oauth2Client.getAccessToken();

  // Google Business Profile v4 — reviews list (paginated)
  const base = `https://mybusiness.googleapis.com/v4/accounts/${GOOGLE_ACCOUNT_ID}/locations/${GOOGLE_LOCATION_ID}/reviews`;
  const all = [];
  let pageToken = "";
  do {
    const url = pageToken ? `${base}?pageToken=${pageToken}` : base;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      const text = await res.text();
      console.error(`API error ${res.status}: ${text}`);
      process.exit(1);
    }
    const data = await res.json();
    if (data.reviews) all.push(...data.reviews);
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  // Normalize to the shape the site uses
  const ratingMap = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
  const reviews = all
    .map((r) => ({
      id: r.reviewId,
      author: r.reviewer?.displayName || "Anonymous",
      rating: ratingMap[r.starRating] || 0,
      text: r.comment || "",
      date: r.createTime,
    }))
    .filter((r) => r.rating >= 4 && r.text.trim().length > 0)  // 4★+ with text only
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const summary = {
    fetchedAt: new Date().toISOString(),
    count: all.length,
    avgRating:
      all.length > 0
        ? all.reduce((s, r) => s + (ratingMap[r.starRating] || 0), 0) / all.length
        : 0,
    reviews,
  };

  const outDir = "public";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "reviews.json");
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
  console.log(`Wrote ${reviews.length} reviews (of ${all.length} total) to ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
