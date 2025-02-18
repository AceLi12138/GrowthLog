'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function BlurImage({ src, alt, className, priority = false }: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // 统一处理所有图片路径
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  const fullSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${normalizedSrc}`;

  console.log('Image path:', fullSrc);

  return (
    <>
      <div 
        className={`absolute inset-0 bg-gray-100 animate-pulse ${
          !isLoading && 'hidden'
        }`} 
      />
      <Image
        src={fullSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Image load error:', src);
          const target = e.target as HTMLImageElement;
          const fallbackPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.jpg`;
          target.src = fallbackPath;
        }}
      />
    </>
  );
} 