import Image from 'next/image';
import Link from 'next/link';
import BlurImage from '@/components/BlurImage';

const EXPERIENCE = [
  { 
    year: '2019-2023',
    org: 'HZAU',
    role: 'Bachelor',
    description: 'Smart Agriculture major, focusing on "AI + Agriculture" direction'
  },
  { 
    year: '2023-2025',
    org: 'BIG-NGDC', 
    role: 'Master',
    description: 'Bioinformatics major, researching AI model applications in bioinformatics'
  },
  { 
    year: '2025-now',
    org: 'UCAS-SAIS',
    role: 'Ph.D.',
    description: 'Artificial Intelligence major, focusing on cutting-edge AI research and innovative applications'
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-xl text-gray-600">
          用代码构建 AI 的无限可能
        </p>
      </section>

      {/* Profile Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 transform -rotate-3 transition-transform duration-300 group-hover:rotate-0" />
          <BlurImage
            src="/profile.jpg"
            alt="Profile"
            className="object-cover transform rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
            priority
          />
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              嗨！我是一名充满好奇心的 AI 研究者 👋
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4 animate-fade-in animate-delay-100">
              热爱探索 AI 的无限可能，专注于大模型、计算机视觉和自然语言处理领域。
              就像在数字世界中构建一个个有趣的积木，让机器能够理解、学习和创造。
            </p>
          </div>
          
          <div className="flex gap-4 animate-fade-in animate-delay-200">
            <Link 
              href="mailto:lihongyu23@mails.ucas.ac.cn"
              className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-orange-200 text-center"
            >
              一起交流
            </Link>
            <Link 
              href="https://github.com/AceLi12138"
              className="flex-1 px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all hover:scale-105 text-center"
            >
              查看代码
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">我的旅程</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.year}
              className="group relative pl-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full transform group-hover:scale-125 transition-transform">
                <div className="absolute left-2 top-4 w-0.5 h-full bg-orange-200" />
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-orange-500 transition-colors">
                      {exp.org}
                    </h3>
                    <p className="text-gray-600">{exp.role}</p>
                  </div>
                  <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-6 bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold">让我们开始一段对话</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          无论是技术交流还是项目合作，期待与您相遇！
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:lihongyu23@mails.ucas.ac.cn"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-orange-200"
          >
            发送邮件
          </a>
          <a
            href="https://github.com/AceLi12138"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-all hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
} 