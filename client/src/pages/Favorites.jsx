import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
// import api from '../utils/api';

function Favorites() {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // دریافت موارد دلخواه از localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    setLoading(false);
  }, []);

  const addToFavorites = (project) => {
    const newFavorites = [...favorites, project];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (projectId) => {
    const newFavorites = favorites.filter(fav => fav._id !== projectId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (projectId) => {
    return favorites.some(fav => fav._id === projectId);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('favorites.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('favorites.description')}</p>
      </div>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="mt-4 text-xl font-medium text-gray-900">هیچ مورد دلخواهی یافت نشد</h3>
          <p className="mt-2 text-gray-600">برای افزودن به موارد دلخواه، روی قلب پروژه‌ها کلیک کنید</p>
          <a 
            href="/portfolio" 
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            مشاهده پروژه‌ها
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map(project => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              isFavorite={isFavorite(project._id)}
              onAddFavorite={() => addToFavorites(project)}
              onRemoveFavorite={() => removeFromFavorites(project._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;