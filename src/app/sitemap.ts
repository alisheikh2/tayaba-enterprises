import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tayaba-enterprises.vercel.app';
  const lastModified = new Date();

  const routes = [
    '',
    '/about-us',
    '/about-us/why-choose-us',
    '/services',
    '/services/photocopying',
    '/services/printing',
    '/services/typing',
    '/services/scanning',
    '/services/laminating',
    '/services/fax',
    '/machine-brands',
    '/clients',
    '/contact-us',
    '/contact-us/career',
    '/contact-us/request-quote',
    '/privacy-policy',
    '/terms-of-service',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.7,
  }));
}
