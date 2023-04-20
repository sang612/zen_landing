import { google } from "googleapis";

//https://www.youtube.com/watch?v=7N0OcQZFm3Q&t=1397s&ab_channel=Icodestuff
export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).send({ message: "Only POST requests are allowed" });
	}
	const body = await req.body;

	try {
		const auth = new google.auth.GoogleAuth({
			spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
			credentials: {
				client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
				private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
			},
			scopes: [
				"https://www.googleapis.com/auth/drive",
				"https://www.googleapis.com/auth/drive.file",
				"https://www.googleapis.com/auth/spreadsheets",
			],
		});

		const sheets = google.sheets({
			auth,
			version: "v4",
		});

		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
			range: "A1:B1",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[body.name, body.email]],
			},
		});

		return res.status(200).json({
			data: response,
		});
	} catch (error) {
		return res
			.status(500)
			.send({ message: error.message ?? "Something went wrong!!" });
	}
}
