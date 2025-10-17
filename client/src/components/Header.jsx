import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaBars, 
  FaTimes, 
  FaGlobe, 
  FaChevronDown, 
  FaHome, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaInfoCircle,
  FaProjectDiagram,
  FaAddressBook,
  FaArrowUp
} from 'react-icons/fa';

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Navigation items
  const navItems = [
    { path: '/', icon: <FaHome />, label: t('nav.home') },
    { path: '/portfolio', icon: <FaProjectDiagram />, label: t('nav.portfolio') },
    { path: '/services', icon: <FaInfoCircle />, label: t('nav.services') },
    { path: '/about', icon: <FaInfoCircle />, label: t('nav.about') },
    { path: '/contact', icon: <FaAddressBook />, label: t('nav.contact') },
  ];

  // Languages with flags
  const languages = [
    { code: 'fa', name: 'دری', flag: '🇦🇫' },
    { code: 'ps', name: 'پشتو', flag: '🇦🇫' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  // Current language
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'fa' || lng === 'ps' ? 'rtl' : 'ltr';
    setIsLangMenuOpen(false);
  };

  // Detect scroll for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  // Handle link click with animation
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg py-2 backdrop-blur-sm bg-opacity-90' 
          : 'bg-gradient-to-r from-blue-900 to-indigo-800 py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300 transform group-hover:scale-105">
                گچکاری صداقت
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        activeLink === item.path 
                          ? 'text-blue-300 bg-blue-900 bg-opacity-50' 
                          : 'text-white hover:text-blue-300'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeLink === item.path && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded-full animate-pulse"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-xl">{currentLang.flag}</span>
                  <span>{currentLang.name}</span>
                  <FaChevronDown className={`text-sm transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-blue-700 rounded-lg shadow-xl z-10 overflow-hidden transition-all duration-300 transform origin-top-right">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 text-white ${
                          lang.code === i18n.language ? 'bg-blue-600 font-medium' : ''
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none z-10 relative transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی موبایل"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-blue-900 shadow-xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">منو</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:rotate-90"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={`flex items-center py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeLink === item.path 
                          ? 'bg-blue-800 text-blue-200 border-l-4 border-blue-300' 
                          : 'text-white hover:bg-blue-800'
                      }`}
                    >
                      <span className="ml-3 text-xl">{item.icon}</span>
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Language Selector */}
              <div className="mt-8">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 bg-blue-800 hover:bg-blue-700 rounded-lg transition-all duration-300 text-white"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{currentLang.flag}</span>
                    <span className="text-lg">{currentLang.name}</span>
                  </div>
                  <FaChevronDown className={`text-sm transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="mt-2 bg-blue-800 rounded-lg overflow-hidden transition-all duration-300">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 text-white ${
                          lang.code === i18n.language ? 'bg-blue-700 font-medium' : ''
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-lg">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;