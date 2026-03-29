import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"
import { google } from "googleapis"

dotenv.config({ path: path.resolve(process.cwd(), ".env") })

const app = express()
const port = Number(process.env.SHEETS_API_PORT || 8787)

app.use(cors())
app.use(express.json())

function loadCredentials() {
  const credentialsPath = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || path.resolve(process.cwd(), "service-account.json")
  const credentialsText = fs.readFileSync(credentialsPath, "utf8")
  return JSON.parse(credentialsText)
}

async function appendRow(data) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID
  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID")
  }

  const auth = new google.auth.GoogleAuth({
    credentials: loadCredentials(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  const sheets = google.sheets({ version: "v4", auth })

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
}

app.post("/api/trial-signup", async (req, res) => {
  try {
    await appendRow(req.body ?? {})
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Failed to append trial signup row:", error)
    res.status(500).json({ ok: false, error: "Failed to append row" })
  }
})

app.listen(port, () => {
  console.log(`Sheets API server running on http://localhost:${port}`)
})
