import Image from 'next/image';
import Link from 'next/link';
import { getBasePath } from '@/utils/path';

const PROJECTS = [
  {
    title: "HaploNet-PathoLin",
    description: "基于单体型网络拓扑结构对病原谱系进行划分、命名。",
    image: getBasePath('/projects/HaploNet-PathoLin.jpg'),
    tags: ["Lineage designation", "Haplotype network", "Community structure"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/AceLi12138/project1",
    status: "已完成"
  },
  {
    title: "AI for Science",
    description: "使用AI技术研究科学问题。",
    image: getBasePath('/projects/ai-platform.jpg'),
    tags: ["NLP", "Machine Learning", "Python"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/AceLi12138/project2",
    status: "进行中"
  },
  // 可以添加更多项目
];

export default function WorkPage() {
  return (
    <div className="min-h-screen py-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">
          My Projects
        </h1>
        <div className="mt-2">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索我的 AI 项目作品集，见证技术与创意的碰撞
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <article 
            key={project.title}
            className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in`}
            style={{ 
              animationDelay: Math.min(index * 100, 800) + 'ms' // 限制最大延迟
            }}
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === "已完成" 
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  href={project.demoUrl}
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-center group"
                >
                  查看演示
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <Link
                  href={project.githubUrl}
                  className="flex-1 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors text-center group"
                >
                  源代码
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">想了解更多？</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          我一直在探索 AI 技术的新可能。如果您对我的项目感兴趣，或者有合作想法，欢迎联系我！
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href={getBasePath('/about#contact')}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            联系我
          </Link>
          <Link
            href="https://github.com/AceLi12138"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
          >
            访问 GitHub
          </Link>
        </div>
      </section>
    </div>
  );
} 