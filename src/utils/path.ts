export const getBasePath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    // 移除路径开头的 basePath（如果已存在）
    const normalizedPath = path.replace(new RegExp(`^${basePath}`), '');
    // 确保路径以单个斜杠开头
    const cleanPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
    return `${basePath}${cleanPath}`;
}; 