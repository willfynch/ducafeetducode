
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const sitemap:MetadataRoute.Sitemap = [
    {
      url: 'https://ducafeetducode.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]

  return sitemap
}