const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
				port: "",
				pathname: "/img/**",
			},
		],
	},
}

module.exports = nextConfig
