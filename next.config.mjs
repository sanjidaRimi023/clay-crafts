/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                // hostname: ["i.ibb.co.com", "i.imgur.com"]
                hostname: "*"
            },
            

        ]
    }
};

export default nextConfig;
