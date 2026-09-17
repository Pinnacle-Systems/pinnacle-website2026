import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pinnaclesystems.co.in'

  return [
    // Core Company Pages ( SEO Priority )
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },

    // Primary Service Pages ( SEO Priority )
    { url: `${baseUrl}/custom-erp-software`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/web-application-development-company`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mobile-app-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-services-in-tirpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/website-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Textile ERP Service Pages ( SEO Priority )
    { url: `${baseUrl}/textile-erp-software`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/textile-erp-software/spinning-management-software`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/knitting-manufacturing-software/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/textile-dyeing-processing-erp/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/cutting-management-software/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/textile-printing-erp/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/embroidery-job-work-software/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/garment-erp-software/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/textile-erp-software/textile-payroll-software/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
   
    // Blog Index & Individual Posts ( SEO Priority )
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog/erp-for-garment-exporters`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}