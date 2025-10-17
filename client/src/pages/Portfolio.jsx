/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import api from '../utils/api';
import { 
  FaFilter, 
  FaSearch, 
  FaTh, 
  FaList, 
  FaStar, 
  FaHeart, 
  FaRegHeart,
  FaArrowRight,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

function Portfolio() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('در حال دریافت پروژه‌ها...');
        const response = await api.get('/projects');
        console.log('پاسخ پروژه‌ها:', response.data);
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error('خطا در دریافت پروژه‌ها:', error);
        setProjects([]);
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let result = projects;
    
    if (searchTerm) {
      result = result.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(project => 
        project.category === selectedCategory
      );
    }
    
    setFilteredProjects(result);
  }, [projects, searchTerm, selectedCategory]);

  // مدیریت موارد دلخواه
  const addToFavorites = (project) => {
    const savedFavorites = localStorage.getItem('favorites');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (!favorites.some(fav => fav._id === project._id)) {
      favorites.push(project);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      
      // نمایش پیام موفقیت
      showNotification('پروژه به موارد دلخواه اضافه شد', 'success');
    }
  };

  const removeFromFavorites = (projectId) => {
    const savedFavorites = localStorage.getItem('favorites');
    let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    favorites = favorites.filter(fav => fav._id !== projectId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    showNotification('پروژه از موارد دلخواه حذف شد', 'info');
  };

  const isFavorite = (projectId) => {
    const savedFavorites = localStorage.getItem('favorites');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    return favorites.some(fav => fav._id === projectId);
  };

  const showNotification = (message, type) => {
    // ایجاد یک notification ساده
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  const allCategories = ['All', ...new Set(projects.map(project => project.category))];
  
  // آمار پروژه‌ها
  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    categories: allCategories.length - 1
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl">در حال بارگذاری پروژه‌ها...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-8">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">جستجو و فیلتر پروژه‌ها</h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <FaTh />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <FaList />
              </button>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <FaFilter className="ml-2" />
                فیلترها
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-fadeIn">
              <div className="relative">
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجوی پروژه‌ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                >
                  {allCategories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'همه دسته‌بندی‌ها' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  جستجو: {searchTerm}
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  دسته‌بندی: {selectedCategory}
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Projects Section */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">هیچ پروژه‌ای یافت نشد</h3>
              <p className="text-gray-600 mb-6">معیارهای جستجو یا فیلتر خود را تنظیم کنید</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                بازنشانی فیلترها
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Projects Grid/List */}
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'space-y-6'} gap-8`}>
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project._id} 
                  project={project} 
                  isFavorite={isFavorite(project._id)}
                  onAddFavorite={addToFavorites}
                  onRemoveFavorite={removeFromFavorites}
                  viewMode={viewMode}
                />
              ))}
            </div>
            
            {/* Load More Button (if needed) */}
            {filteredProjects.length > 9 && (
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                  نمایش پروژه‌های بیشتر
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
    </div>
  );
}

export default Portfolio;