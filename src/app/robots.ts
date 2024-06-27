import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/login/', '/preview/', '/dashboard'],
      },
      {
        userAgent: 'Googlebot',
        disallow: ['/login/', '/preview/', '/dashboard', '/og'],
      },
      {
        userAgent: 'Baiduspider',
        disallow: ['/'],
      },
      {
        userAgent: 'Sogou',
        disallow: ['/'],
      },
      {
        userAgent: 'Sogou web spider',
        disallow: ['/'],
      },
      {
        userAgent: 'Sogou mobile spider',
        disallow: ['/'],
      },
      {
        userAgent: 'YisouSpider',
        disallow: ['/'],
      },
      {
        userAgent: '360Spider',
        disallow: ['/'],
      },
    ],
  }
}
