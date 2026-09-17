import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Add the exact paths or folders you want to hide from search engines
      disallow: [
        '/admin/', 
      ], 
    },
    sitemap: 'https://www.pinnaclesystems.co.in/sitemap.xml',
  }
}