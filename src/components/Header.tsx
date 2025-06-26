
import React from 'react';
import { Search, Heart } from 'lucide-react';

const Header = () => {
  const categories = ['전체', '강아지', '고양이', '새', '물고기', '기타'];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">펫프렌즈</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="펫 친구들을 검색해보세요"
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
