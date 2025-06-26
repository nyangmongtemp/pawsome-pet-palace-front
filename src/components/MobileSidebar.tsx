
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, MapPin } from 'lucide-react';

const MobileSidebar = () => {
  const categories = [
    { name: '분양게시판', href: '#' },
    { name: '정보게시판', href: '#' },
    { name: '질문게시판', href: '#' },
    { name: '지도', href: '#', icon: MapPin }
  ];

  return (
    <div className="space-y-6 p-4">
      {/* 모바일 네비게이션 */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">메뉴</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="block p-3 rounded-lg hover:bg-orange-50 transition-colors flex items-center space-x-2"
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              <span>{category.name}</span>
            </a>
          ))}
        </CardContent>
      </Card>

      {/* 로그인 폼 */}
      <Card className="border-pink-200">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-orange-50">
          <CardTitle className="text-center text-gray-800">로그인</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">이메일</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">비밀번호</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="pl-10"
                />
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500">
              로그인
            </Button>
            
            <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">
              회원가입
            </Button>
          </form>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600 text-center">소셜 로그인</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400">
                카카오 로그인
              </Button>
              <Button variant="outline" className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500">
                네이버 로그인
              </Button>
              <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                구글 로그인
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileSidebar;
