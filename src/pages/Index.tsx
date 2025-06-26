
import React from 'react';
import Header from '@/components/Header';
import PetCarousel from '@/components/PetCarousel';
import AuthSidebar from '@/components/AuthSidebar';
import PopularPosts from '@/components/PopularPosts';
import CommunityBoard from '@/components/CommunityBoard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 메인 컨텐츠 영역 */}
          <div className="lg:col-span-3 space-y-8">
            {/* 펫 소개 캐러셀 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                다양한 펫 친구들을 만나보세요
              </h2>
              <PetCarousel />
            </section>

            {/* 커뮤니티 게시판 */}
            <section>
              <CommunityBoard />
            </section>
          </div>

          {/* 사이드바 영역 */}
          <div className="lg:col-span-1 space-y-6">
            <AuthSidebar />
            <PopularPosts />
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">펫프렌즈 - 반려동물과 함께하는 따뜻한 커뮤니티</p>
            <p className="text-sm">© 2024 PetFriends. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
