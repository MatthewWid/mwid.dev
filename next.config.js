/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",
	distDir: "html",
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
