
import React, { useState } from 'react';
import { Search, Menu, MapPin } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import MobileSidebar from '@/components/MobileSidebar';

const Header = () => {
  const categories = [
    { name: '분양게시판', href: '#' },
    { name: '정보게시판', href: '#' },
    { name: '질문게시판', href: '#' },
    { name: '지도', href: '#', icon: MapPin }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">냥</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                냥몽
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1"
                >
                  {category.icon && <category.icon className="h-4 w-4" />}
                  <span>{category.name}</span>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="반려동물 검색하기"
                className="w-64 pl-10 pr-4 py-2 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-orange-50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-orange-400" />
            </div>
            
            {/* 모바일 메뉴 */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 rounded-md hover:bg-orange-50">
                  <Menu className="h-6 w-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
