import Link from 'next/link';
import Image from 'next/image';
import BlurImage from '@/components/BlurImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium animate-float">
              👋 Welcome to my digital garden
            </span>
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">
              Hello, I&apos;m Li Xiaoyao.
            </h1>
          </div>
          <p className="text-2xl text-gray-600 leading-relaxed animate-fade-in animate-delay-100">
            I&apos;m a Ph.D. student passionate about AI, exploring the frontiers of machine learning and human-computer interaction.
          </p>
          
          {/* Quick Links */}
          <div className="flex gap-4 pt-4 animate-fade-in animate-delay-200">
            <Link href="/about" 
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-orange-200">
              About Me
            </Link>
            <Link href="/blog"
              className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all hover:scale-105">
              Read My Blog
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] animate-fade-in animate-delay-100">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg transform -rotate-2 transition-all duration-300 hover:rotate-0 shadow-xl">
            <BlurImage
              src="/your-photo.jpg"
              alt="Profile photo"
              className="object-cover rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 animate-fade-in">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Work</h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-orange-500 to-transparent rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} 
                 className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 style={{ animationDelay: `${item * 100}ms` }}>
              <div className="aspect-video relative">
                <BlurImage
                  src={`/project-${item}.jpg`}
                  alt={`Project ${item}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                  AI Project Title
                </h3>
                <p className="text-gray-600">
                  Innovative AI solution that pushes the boundaries...
                </p>
                <Link href={`/work/project-${item}`} 
                      className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-600">
                  Learn more 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 animate-fade-in">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-orange-500 to-transparent rounded"></div>
          <Link href="/blog" className="text-orange-500 hover:text-orange-600 flex items-center group">
            View All 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="space-y-12">
          {[1, 2, 3].map((post) => (
            <article key={post} 
                    className="border-b pb-12 hover:bg-gray-50 p-6 rounded-lg transition-colors duration-300"
                    style={{ animationDelay: `${post * 100}ms` }}>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  AI Research
                </span>
                <span>March 15, 2024</span>
                <span>5 min read</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                <Link href={`/blog/post-${post}`} className="hover:text-orange-500 transition-colors">
                  Latest Breakthroughs in Large Language Models
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Exploring the cutting-edge developments in AI and their implications for the future...
              </p>
              <Link href={`/blog/post-${post}`} 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 group">
                Read More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
