
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Calendar, Eye, MessageCircle, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdoptionPage = () => {
  const navigate = useNavigate();

  // 일반 분양게시판 데이터
  const adoptionPosts = [
    {
      id: 1,
      title: "골든리트리버 분양합니다",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "서울 강남구",
      age: "2개월",
      gender: "수컷",
      price: "50만원",
      date: "2024.06.20",
      views: 125,
      likes: 15,
      comments: 8
    },
    {
      id: 2,
      title: "페르시안 고양이 분양",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "부산 해운대구",
      age: "3개월",
      gender: "암컷",
      price: "30만원",
      date: "2024.06.21",
      views: 98,
      likes: 12,
      comments: 5
    },
    {
      id: 3,
      title: "코리안숏헤어 분양",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "대구 수성구",
      age: "4개월",
      gender: "수컷",
      price: "무료분양",
      date: "2024.06.22",
      views: 210,
      likes: 25,
      comments: 12
    },
    {
      id: 4,
      title: "포메라니안 분양합니다",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "인천 남동구",
      age: "2개월",
      gender: "암컷",
      price: "80만원",
      date: "2024.06.23",
      views: 87,
      likes: 9,
      comments: 3
    }
  ];

  // 유기동물 분양게시판 데이터
  const rescuePosts = [
    {
      id: 101,
      title: "유기견 보호중 - 새 가족을 찾아요",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "서울 동대문구",
      age: "1세 추정",
      gender: "수컷",
      rescueDate: "2024.06.15",
      status: "보호중",
      views: 340,
      likes: 45
    },
    {
      id: 102,
      title: "길고양이 구조 - 임시보호 중",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "경기 수원시",
      age: "6개월 추정",
      gender: "암컷",
      rescueDate: "2024.06.18",
      status: "치료중",
      views: 189,
      likes: 28
    },
    {
      id: 103,
      title: "보호소 출신 - 온순한 성격",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "부산 서구",
      age: "2세",
      gender: "암컷",
      rescueDate: "2024.06.10",
      status: "입양가능",
      views: 267,
      likes: 38
    },
    {
      id: 104,
      title: "사고로 버려진 아이 - 치료 완료",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      location: "대전 유성구",
      age: "3세 추정",
      gender: "수컷",
      rescueDate: "2024.06.05",
      status: "입양가능",
      views: 412,
      likes: 52
    }
  ];

  const PostCard = ({ post, isRescue = false }) => (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(isRescue ? `/rescue-detail/${post.id}` : `/adoption-detail/${post.id}`)}
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        {!isRescue && post.price === "무료분양" && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-500">
            무료분양
          </Badge>
        )}
        {isRescue && (
          <Badge className={`absolute top-2 left-2 ${
            post.status === '입양가능' ? 'bg-green-500' : 
            post.status === '치료중' ? 'bg-yellow-500' : 'bg-blue-500'
          }`}>
            {post.status}
          </Badge>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{post.location}</span>
          </div>
          <div className="flex justify-between">
            <span>나이: {post.age}</span>
            <span>성별: {post.gender}</span>
          </div>
          <div className="flex justify-between items-center">
            {isRescue ? (
              <span className="font-bold text-blue-600">구조일: {post.rescueDate}</span>
            ) : (
              <span className="font-bold text-orange-600">{post.price}</span>
            )}
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{isRescue ? post.rescueDate : post.date}</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4 text-gray-500" />
                <span className="text-xs">{post.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-pink-400" />
                <span className="text-xs">{post.likes}</span>
              </div>
              {!isRescue && (
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4 text-blue-400" />
                  <span className="text-xs">{post.comments}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Tabs defaultValue="rescue" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="grid w-auto grid-cols-2">
                    <TabsTrigger value="rescue">유기동물분양게시판</TabsTrigger>
                    <TabsTrigger value="adoption">분양게시판</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="rescue">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-800">유기동물분양게시판</h2>
                      <p className="text-sm text-gray-600">새로운 가족을 기다리는 아이들</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {rescuePosts.map((post) => (
                        <PostCard key={post.id} post={post} isRescue={true} />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="adoption">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-gray-800">분양게시판</h2>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        <Plus className="h-4 w-4 mr-2" />
                        분양글 작성
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {adoptionPosts.map((post) => (
                        <PostCard key={post.id} post={post} isRescue={false} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">냥</span>
              </div>
              <p className="font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                냥몽 - 반려동물과 함께하는 따뜻한 커뮤니티
              </p>
            </div>
            <p className="text-sm">© 2024 냥몽. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionPage;
