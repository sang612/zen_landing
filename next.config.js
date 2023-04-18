/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: {
		NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL:
			process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
		NEXT_PUBLIC_GOOGLE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
		NEXT_PUBLIC_GOOGLE_SHEET_ID: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
	},
};

module.exports = nextConfig
