import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { salonBlogPosts } from '@/data/salonData';
import { ArrowLeft, Clock } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = salonBlogPosts.find((p) => p.slug === id || p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="px-3 py-1 bg-[#D4AF37]/15 text-[#9A7B1C] rounded-full font-semibold">{post.category}</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A0E0C] leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
            />
            <div>
              <p className="text-sm font-serif font-bold text-[#0A0E0C]">{post.author.name}</p>
              <p className="text-xs text-[#D4AF37]">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-80 sm:h-[450px] object-cover"
          />
        </div>

        {/* Article Body */}
        <Card className="p-8 sm:p-12 prose prose-amber max-w-none text-[#4A524D] leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* CTA Footer Box */}
        <div className="p-8 bg-[#0A0E0C] text-[#FAF8F5] rounded-3xl text-center space-y-4 shadow-2xl">
          <h3 className="font-serif text-2xl font-bold text-white">Experience This Ritual in Person</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Book a consultation with {post.author.name} to receive a customized skincare diagnostic.
          </p>
          <Link href="/book" className="inline-block pt-2">
            <Button variant="primary" size="md">
              Reserve Appointment
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
