import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from './LightBox';

function ProjectCard({ project, isFavorite = false, onAddFavorite, onRemoveFavorite }) {
  const [showLightbox, setShowLightbox] = useState(false);

  const openLightbox = () => {
    setShowLightbox(true);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      onRemoveFavorite(project._id);
    } else {
      onAddFavorite(project);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-56 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={openLightbox}
          />
          {project.featured && (
            <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              ویژه
            </span>
          )}
          {project.category && (
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              {project.category}
            </span>
          )}
          
          {/* دکمه دلخواه */}
          <button
            onClick={handleFavoriteClick}
            className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-red-500 rounded-full p-2 transition-all shadow-md"
            title={isFavorite ? "حذف از دلخواه" : "افزودن به دلخواه"}
          >
            <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 flex-grow">{project.description}</p>
        </div>
      </div>
      
      {showLightbox && (
        <Lightbox 
          image={project.image} 
          onClose={() => setShowLightbox(false)} 
        />
      )}
    </>
  );
}

export default ProjectCard;