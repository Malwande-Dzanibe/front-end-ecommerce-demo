/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            }
        ]
    }
}

module.exports = nextConfig

// 2023-11-10