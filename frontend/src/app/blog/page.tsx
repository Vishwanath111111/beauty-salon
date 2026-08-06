import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Card } from '@/components/ui/Card';
import { salonBlogPosts } from '@/data/salonData';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Wellness & Skincare Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0A0E0C]">
            Lumière Beauty Chronicles
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D]">
            Expert insights, cellular skincare science, and holistic self-care protocols authored by our master aestheticians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {salonBlogPosts.map((post) => (
            <Card key={post.id} className="p-0 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#0A0E0C]">
                  {post.category}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-2xl font-bold text-[#0A0E0C] group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-[#4A524D] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-[#0A0E0C]">{post.author.name}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
