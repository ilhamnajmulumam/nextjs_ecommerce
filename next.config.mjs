/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.amazon.com',
                port: '',
                pathname: '/images/P/**',
            },
        ],
    },
};

export default nextConfig;
