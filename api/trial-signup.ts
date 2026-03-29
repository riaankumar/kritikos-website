import type { VercelRequest, VercelResponse } from "@vercel/node"
import { google } from "googleapis"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" })
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

    if (!spreadsheetId || !clientEmail || !privateKey) {
      return res.status(500).json({ ok: false, error: "Missing required environment variables" })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const data = req.body ?? {}

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.full_name ?? "",
          data.email ?? "",
          data.school_name ?? "",
          data.school_size ?? "",
          data.school_type ?? "",
          data.grades_offered ?? "",
        ]],
      },
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Failed to append trial signup row:", error)
    return res.status(500).json({ ok: false, error: "Failed to append row" })
  }
}
