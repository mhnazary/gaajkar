import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./LightBox";

function ProjectCard({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);

  const openLightbox = () => {
    setShowLightbox(true);
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
