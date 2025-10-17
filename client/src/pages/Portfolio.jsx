import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import api from '../utils/api';

function Portfolio() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    
    // بررسی اینکه پروژه قبلاً اضافه نشده باشد
    if (!favorites.some(fav => fav._id === project._id)) {
      favorites.push(project);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      
      // نمایش پیام موفقیت
      alert('پروژه به موارد دلخواه اضافه شد');
    }
  };

  const removeFromFavorites = (projectId) => {
    const savedFavorites = localStorage.getItem('favorites');
    let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    favorites = favorites.filter(fav => fav._id !== projectId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const isFavorite = (projectId) => {
    const savedFavorites = localStorage.getItem('favorites');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    return favorites.some(fav => fav._id === projectId);
  };

  const allCategories = ['All', ...new Set(projects.map(project => project.category))];

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-xl">در حال بارگذاری پروژه‌ها...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('portfolio.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('portfolio.description')}</p>
      </div>
      
      <div className="mb-12 bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="جستجوی پروژه‌ها..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category === 'All' ? 'همه دسته‌بندی‌ها' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">هیچ پروژه‌ای یافت نشد</h3>
          <p className="text-gray-600">معیارهای جستجو یا فیلتر خود را تنظیم کنید</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              isFavorite={isFavorite(project._id)}
              onAddFavorite={addToFavorites}
              onRemoveFavorite={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;