
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdoptionCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    breed: '',
    age: '',
    gender: '',
    region: '',
    detailLocation: '',
    responsibilityFee: '',
    vaccination: '',
    neutering: '',
    healthStatus: '',
    temperament: '',
    description: ''
  });
  const [thumbnailImages, setThumbnailImages] = useState([]);

  const categories = ['강아지', '고양이', '기타'];
  const regions = [
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기',
    '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (thumbnailImages.length + files.length > 5) {
      alert('최대 5개의 이미지만 업로드할 수 있습니다.');
      return;
    }
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          url: e.target.result,
          file
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id) => {
    setThumbnailImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thumbnailImages.length === 0) {
      alert('썸네일 이미지를 최소 1개 업로드해야 합니다.');
      return;
    }
    // 여기서 실제 저장 로직 구현
    console.log('Form submitted:', formData, thumbnailImages);
    navigate('/adoption');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* 상단 네비게이션 */}
              <div className="p-6 border-b">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/adoption')}
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>목록으로</span>
                  </Button>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>분양게시판</span>
                    <span>{'>'}</span>
                    <span>분양글 작성</span>
                  </div>
                </div>
              </div>

              {/* 작성 폼 */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">분양글 작성</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 썸네일 이미지 업로드 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">썸네일 이미지 <span className="text-red-500">*</span></CardTitle>
                      <p className="text-sm text-gray-600">최대 5개까지 업로드 가능합니다.</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-full">
                          <label htmlFor="thumbnail-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">클릭하여 이미지 업로드</p>
                            </div>
                            <input 
                              id="thumbnail-upload" 
                              type="file" 
                              className="hidden" 
                              multiple 
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                        
                        {thumbnailImages.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {thumbnailImages.map((image) => (
                              <div key={image.id} className="relative">
                                <img
                                  src={image.url}
                                  alt="썸네일"
                                  className="w-full h-24 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(image.id)}
                                  className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* 기본 정보 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">기본 정보</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">제목 <span className="text-red-500">*</span></Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="분양글 제목을 입력하세요"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">카테고리 <span className="text-red-500">*</span></Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="카테고리 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="breed">품종</Label>
                          <Input
                            id="breed"
                            value={formData.breed}
                            onChange={(e) => handleInputChange('breed', e.target.value)}
                            placeholder="품종을 입력하세요"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="age">나이</Label>
                          <Input
                            id="age"
                            value={formData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            placeholder="예: 2개월, 1세"
                          />
                        </div>

                        <div>
                          <Label htmlFor="gender">성별</Label>
                          <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="성별 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="수컷">수컷</SelectItem>
                              <SelectItem value="암컷">암컷</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 위치 정보 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">위치 정보</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="region">지역 <span className="text-red-500">*</span></Label>
                          <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="지역 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              {regions.map((region) => (
                                <SelectItem key={region} value={region}>
                                  {region}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="detailLocation">상세 위치</Label>
                          <Input
                            id="detailLocation"
                            value={formData.detailLocation}
                            onChange={(e) => handleInputChange('detailLocation', e.target.value)}
                            placeholder="예: 강남구, 해운대구"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 분양 정보 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">분양 정보</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="responsibilityFee">책임비</Label>
                        <Input
                          id="responsibilityFee"
                          value={formData.responsibilityFee}
                          onChange={(e) => handleInputChange('responsibilityFee', e.target.value)}
                          placeholder="예: 50만원, 무료분양"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="vaccination">예방접종</Label>
                          <Input
                            id="vaccination"
                            value={formData.vaccination}
                            onChange={(e) => handleInputChange('vaccination', e.target.value)}
                            placeholder="예: 1차 완료, 완료"
                          />
                        </div>

                        <div>
                          <Label htmlFor="neutering">중성화</Label>
                          <Select value={formData.neutering} onValueChange={(value) => handleInputChange('neutering', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="중성화 여부" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="완료">완료</SelectItem>
                              <SelectItem value="미완료">미완료</SelectItem>
                              <SelectItem value="예정">예정</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="healthStatus">건강상태</Label>
                          <Input
                            id="healthStatus"
                            value={formData.healthStatus}
                            onChange={(e) => handleInputChange('healthStatus', e.target.value)}
                            placeholder="예: 건강함, 양호"
                          />
                        </div>

                        <div>
                          <Label htmlFor="temperament">성격</Label>
                          <Input
                            id="temperament"
                            value={formData.temperament}
                            onChange={(e) => handleInputChange('temperament', e.target.value)}
                            placeholder="예: 온순함, 활발함"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 상세 설명 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">상세 설명</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Label htmlFor="description">설명 <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="아이에 대한 자세한 설명을 작성해주세요..."
                          className="min-h-32"
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* 버튼 영역 */}
                  <div className="flex justify-end space-x-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate('/adoption')}
                    >
                      취소
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      작성 완료
                    </Button>
                  </div>
                </form>
              </div>
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

export default AdoptionCreate;
