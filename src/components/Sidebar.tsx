
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [currentAdSlide, setCurrentAdSlide] = useState(0);

  const eventImages = [
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  const adImages = [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  const popularPosts = [
    { id: 1, title: "강아지 건강 관리 완전 가이드", views: 1250 },
    { id: 2, title: "고양이 행동 심리학", views: 980 },
    { id: 3, title: "반려동물 응급처치 방법", views: 876 },
    { id: 4, title: "펫 보험 비교 분석", views: 743 },
    { id: 5, title: "강아지 훈련의 기초", views: 692 },
    { id: 6, title: "고양이 사료 추천 리스트", views: 634 },
    { id: 7, title: "반려동물과 함께하는 여행", views: 587 },
    { id: 8, title: "펫샵 vs 분양 장단점", views: 523 },
    { id: 9, title: "반려동물 건강검진 주기", views: 456 },
    { id: 10, title: "강아지 산책 필수 용품", views: 398 }
  ];

  return (
    <div className="space-y-6">
      {/* 로그인 카드 */}
      <Card className="border-orange-200">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-pink-50">
          <CardTitle className="text-center text-gray-800">
            {isLogin ? '로그인' : '회원가입'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">이름</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="이름을 입력하세요"
                    className="pl-10"
                  />
                </div>
              </div>
            )}
            
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
              {isLogin ? '로그인' : '회원가입'}
            </Button>
            
            <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">
              {isLogin ? '회원가입' : '로그인'}
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
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {isLogin ? '회원가입하기' : '로그인하기'}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* 이벤트 슬라이드 */}
      <Card className="border-pink-200">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-orange-50">
          <CardTitle className="text-center text-gray-800">이벤트</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="relative">
            <img
              src={eventImages[currentEventSlide]}
              alt="이벤트"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => setCurrentEventSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentEventSlide((prev) => (prev + 1) % eventImages.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* 광고 슬라이드 */}
      <Card className="border-orange-200">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardTitle className="text-center text-gray-800">광고</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="relative">
            <img
              src={adImages[currentAdSlide]}
              alt="광고"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => setCurrentAdSlide((prev) => (prev - 1 + adImages.length) % adImages.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentAdSlide((prev) => (prev + 1) % adImages.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* 인기 게시글 */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-pink-50">
          <CardTitle className="text-lg text-gray-800">인기 게시글</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {popularPosts.map((post, index) => (
              <div
                key={post.id}
                className="p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b last:border-b-0"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    index < 3 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-medium text-sm text-gray-900 mb-1 hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>조회 {post.views}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
