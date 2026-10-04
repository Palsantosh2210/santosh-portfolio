// Real endpoint: GET /developer/santosh-pal (also /api/profile). Free Vercel serverless function.
import { payload } from "../shared/payload.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300");
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    return res.end(JSON.stringify({ error: "Method not allowed. Use GET." }));
  }
  res.statusCode = 200;
  res.end(JSON.stringify(payload, null, 2));
}
