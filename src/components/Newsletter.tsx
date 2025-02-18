export default function Newsletter() {
  return (
    <div className="bg-gray-50 border rounded-lg p-8 my-12">
      <h3 className="text-2xl font-bold mb-4">订阅我的周刊</h3>
      <p className="text-gray-600 mb-6">
        获取最新的文章更新和独家内容
      </p>
      <form className="flex gap-4">
        <input
          type="email"
          placeholder="您的邮箱地址"
          className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          订阅
        </button>
      </form>
    </div>
  );
} 