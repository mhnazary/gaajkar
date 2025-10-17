import { useEffect, useState } from 'react';

function Lightbox({ image, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // بستن لایت‌باکس با کلید ESC
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-4xl max-h-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Project" 
          className={`w-full ${isFullscreen ? 'h-full' : 'max-h-[90vh]'} object-contain`}
        />
        
        {/* دکمه دانلود */}
        <a 
          href={image} 
          download 
          className="absolute bottom-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all"
          onClick={(e) => e.stopPropagation()}
          title="Download image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        
        {/* دکمه تمام صفحه */}
        <button 
          className="absolute bottom-4 left-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
        >
          {isFullscreen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
            </svg>
          )}
        </button>
        
        {/* دکمه بستن */}
        <button 
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all"
          onClick={onClose}
          title="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Lightbox;