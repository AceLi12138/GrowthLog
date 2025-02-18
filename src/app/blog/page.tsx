'use client';  // 将页面转换为客户端组件

import Link from 'next/link';
import BlurImage from '@/components/BlurImage';
import { getBasePath } from '@/utils/path';

const BLOG_CATEGORIES = [
  { name: 'All', slug: 'all' },
  { name: 'AI Research', slug: 'ai-research' },
  { name: 'Machine Learning', slug: 'machine-learning' },
  { name: 'Computer Vision', slug: 'computer-vision' },
  { name: 'NLP', slug: 'nlp' },
];

const BLOG_POSTS = [
  {
    title: "深度学习中的注意力机制探索",
    slug: "attention-mechanism",
    excerpt: "注意力机制已经成为深度学习中的关键组件，本文深入探讨其工作原理和应用场景...",
    category: "AI Research",
    date: "2024-03-15",
    readTime: "8 min read",
    imageUrl: 'blog/attention.jpg'
  },
  {
    title: "计算机视觉最新进展",
    slug: "computer-vision-advances",
    excerpt: "从目标检测到图像生成，计算机视觉领域正在经历革命性的变革...",
    category: "Computer Vision",
    date: "2024-03-10",
    readTime: "6 min read",
    imageUrl: "/blog/vision.jpg"
  },
  // 可以添加更多博客文章
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 animate-fade-in">
      {/* 页面标题 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">
          Blog Posts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          分享我在 AI 和机器学习领域的探索、发现和思考
        </p>
      </div>

      {/* 分类导航 */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {BLOG_CATEGORIES.map((category) => (
            <button
              key={category.slug}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 博客文章列表 */}
      <div className="grid gap-12">
        {BLOG_POSTS.map((post, index) => (
          <article 
            key={post.slug}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="grid md:grid-cols-5 gap-6">
                {/* 文章图片 */}
                <div className="md:col-span-2 aspect-video md:aspect-auto relative overflow-hidden">
                  <BlurImage
                    src={post.imageUrl}
                    alt={post.title}
                    priority={index === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* 文章内容 */}
                <div className="md:col-span-3 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-orange-500 group-hover:text-orange-600">
                    Read More 
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Newsletter 订阅 */}
      <div className="mt-20 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">订阅我的博客更新</h3>
        <p className="text-gray-600 mb-6">
          第一时间获取最新的技术文章和见解
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="输入您的邮箱地址"
            className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            订阅
          </button>
        </form>
      </div>
    </div>
  );
} 