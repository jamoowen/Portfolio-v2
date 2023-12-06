/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            
                protocol: "https",
                hostname: "www.gettyimages.com",
                port: "",
                pathname: "/detail/1339026234"
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "next-auth.js.org",
                port: "",
            },
            {
                protocol: "https",
                hostname: "www.toptal.com",
                port: "",
            },
            // https://www.toptal.com/developers/feed2json/convert?url=https://medium.com/feed/@jamesowen.dev
            

        ]
    }
}

module.exports = nextConfig
