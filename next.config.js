/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['**'],
        remotePatterns: [{
            protocol: 'https',
            hostname: '**',
        }],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 64, 96, 128, 256],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },
    eslint: {
        // 如果您想在构建时忽略 ESLint 错误
        ignoreDuringBuilds: true,
    },
    // 使用函数来动态设置 basePath 和 assetPrefix
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;