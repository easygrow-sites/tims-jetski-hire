import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Tims Jetski Hire Gold Coast',
  description: 'Tips, guides, and news about jetskiing on the Gold Coast. Learn from the experts at Tims Jetski Hire.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Jetski Blog & Tips</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert advice, safety tips, and the latest news from Gold Coast's premier jetski hire service.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're working on creating amazing content for you. Check back soon for tips, guides, and stories about jetskiing on the Gold Coast.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏄</div>
              <h3 className="font-bold text-gray-900 mb-2">Beginner Guides</h3>
              <p className="text-gray-600 text-sm">Tips for first-time riders</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Safety Tips</h3>
              <p className="text-gray-600 text-sm">Stay safe on the water</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Best Locations</h3>
              <p className="text-gray-600 text-sm">Where to ride on Gold Coast</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Advanced Skills</h3>
              <p className="text-gray-600 text-sm">Take your riding to the next level</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
