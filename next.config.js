/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains:['ichef.bbci.co.uk', 'livedoor.blogimg.jp', 'media.loom-app.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.wired.com',
              port: '',
              pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.vox-cdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.kinja-img.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.arstechnica.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.insider.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.npr.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'a.fsdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's.yimg.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.journals.aps.org',
                port: '',
                pathname: '/**',
            },
          ],
    },
}

module.exports = nextConfig