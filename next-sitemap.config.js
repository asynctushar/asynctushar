/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://asynctushar.vercel.com",
    generateRobotsTxt: true,
    exclude: ["/api/*"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api"],
            },
        ],
    },
};
