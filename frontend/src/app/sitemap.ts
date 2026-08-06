import { MetadataRoute } from 'next';
import { salonServices, salonBlogPosts } from '@/data/salonData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lumierebeautylounge.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/services',
    '/packages',
    '/experts',
    '/gallery',
    '/pricing',
    '/testimonials',
    '/blog',
    '/contact',
    '/book',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = salonServices.map((service) => ({
    url: `${baseUrl}/treatments/${service.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = salonBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
