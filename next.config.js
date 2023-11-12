/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            
                protocol: "https",
                hostname: "www.gettyimages.com",
                port: "",
                pathname: "/detail/1339026234"
            }
        ]
    }
}

module.exports = nextConfig
