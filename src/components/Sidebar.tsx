
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [currentAdSlide, setCurrentAdSlide] = useState(0);
  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (loginData.email === 'test1' && loginData.password === 'test1234') {
      setIsLoggedIn(true);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="space-y-6">
      {/* 로그인/프로필 카드 */}
      <Card className="border-orange-200">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-pink-50">
          <CardTitle className="text-center text-gray-800">
            {isLoggedIn ? '내 정보' : '로그인'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {isLoggedIn ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800">{loginData.email}</p>
                <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-gray-600">
                  <span>하트 ❤️ 0</span>
                  <span>랭킹 3672위</span>
                  <span>구독자 0명</span>
                </div>
              </div>
              <div className="w-full space-y-2">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">마이페이지</p>
                </div>
                <div className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                  <span>MY구독</span>
                  <span>알림</span>
                  <span>메세지</span>
                </div>
                <div className="flex justify-between text-sm bg-gray-50 p-3 rounded-lg">
                  <span>정보수정</span>
                  <span>로그아웃</span>
                </div>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                로그아웃
              </Button>
            </div>
          ) : (
            <div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">이메일</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="text"
                      placeholder="아이디를 입력하세요"
                      className="pl-10"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
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
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500">
                  로그인
                </Button>
                
                <Button 
                  type="button"
                  onClick={handleSignupClick}
                  variant="outline" 
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                >
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
            </div>
          )}
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
