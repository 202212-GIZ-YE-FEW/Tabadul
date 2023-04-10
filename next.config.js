/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n,
    eslint: {
        dirs: ["src"],
    },
    images: {
        domains: [
            "www.greenqueen.com.hk",
            "firebasestorage.googleapis.com",
            "img.freepik.com",
        ],
    },
    reactStrictMode: true,
};
