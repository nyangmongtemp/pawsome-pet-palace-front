
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle } from 'lucide-react';

const PetShowcase = () => {
  const [viewMode, setViewMode] = useState(3); // 3개 또는 5개 보기
  
  const pets = [
    {
      id: 1,
      name: "골든 리트리버 해피",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 24,
      comments: 8,
      owner: "사랑이맘"
    },
    {
      id: 2,
      name: "페르시안 고양이 나비",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 31,
      comments: 12,
      owner: "냥집사"
    },
    {
      id: 3,
      name: "코리안숏헤어 츄츄",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 18,
      comments: 5,
      owner: "고양이사랑"
    },
    {
      id: 4,
      name: "포메라니안 복실이",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 27,
      comments: 9,
      owner: "댕댕이아빠"
    },
    {
      id: 5,
      name: "래브라도 초코",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 22,
      comments: 7,
      owner: "강아지랑함께"
    }
  ];

  const PetCard = ({ pet, isLarge = false }) => (
    <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${isLarge ? 'h-96' : 'h-48'}`}>
      <div className="relative h-full">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className={`font-bold mb-1 ${isLarge ? 'text-xl' : 'text-sm'}`}>{pet.name}</h3>
          <p className={`text-gray-200 mb-2 ${isLarge ? 'text-sm' : 'text-xs'}`}>by {pet.owner}</p>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Heart className={`${isLarge ? 'h-4 w-4' : 'h-3 w-3'} text-pink-400`} />
              <span className={isLarge ? 'text-sm' : 'text-xs'}>{pet.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className={`${isLarge ? 'h-4 w-4' : 'h-3 w-3'} text-blue-400`} />
              <span className={isLarge ? 'text-sm' : 'text-xs'}>{pet.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">우리 아이들 자랑하기</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode(3)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              viewMode === 3 
                ? 'bg-orange-400 text-white' 
                : 'bg-white text-gray-600 hover:bg-orange-100'
            }`}
          >
            3개 보기
          </button>
          <button
            onClick={() => setViewMode(5)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              viewMode === 5 
                ? 'bg-orange-400 text-white' 
                : 'bg-white text-gray-600 hover:bg-orange-100'
            }`}
          >
            5개 보기
          </button>
        </div>
      </div>
      
      {viewMode === 3 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <PetCard pet={pets[0]} isLarge={true} />
          </div>
          <div className="space-y-4">
            <PetCard pet={pets[1]} />
            <PetCard pet={pets[2]} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PetShowcase;
