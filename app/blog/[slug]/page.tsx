import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Tims Jetski Hire Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords.join(', '),
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-blue-200 mb-4">
            {new Date(post.date).toLocaleDateString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • By {post.author}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-blue-100">{post.excerpt}</p>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="py-8 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* Additional Images */}
          {post.images && post.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.images.map((img: string, idx: number) => (
                <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`${post.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Author & Date */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">
                  Published on {new Date(post.date).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword: string, idx: number) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  {relatedPost.featuredImage && (
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your Gold Coast jetski adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300555123"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Call: 1300 555 123
            </a>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
