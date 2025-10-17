import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHiddenContentOpen, setIsHiddenContentOpen] = useState(false);

  // زبان‌ها با نام‌های نمایشی و پرچم
  const languages = [
    { code: 'fa', name: 'دری', flag: '🇦🇫' },
    { code: 'ps', name: 'پشتو', flag: '🇦🇫' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];


  // زبان فعلی
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // تغییر زبان
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'fa' || lng === 'ps' ? 'rtl' : 'ltr';
    setIsLangMenuOpen(false);
  };

  // تشخیص اسکرول برای تغییر ظاهر هیدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // بستن محتوای پنهان هنگام اسکرول
      if (window.scrollY > 100) {
        setIsHiddenContentOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // بستن منوها هنگام تغییر مسیر
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  }, []);

  return (
    <>
      {/* هدر اصلی */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg py-2' 
          : 'bg-gradient-to-r from-blue-900 to-indigo-800 py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* لوگو */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                گچکاری صداقت
              </div>
            </Link>
            
            {/* منوی دسکتاپ */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* لینک‌های ناوبری */}
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    {t('nav.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-white hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
              
              {/* منوی کشویی زبان */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors"
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.name}</span>
                  <FaChevronDown className={`text-sm transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-blue-700 rounded-lg shadow-lg z-10 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-600 transition-colors flex items-center space-x-2 text-white ${
                          lang.code === i18n.language ? 'bg-blue-600' : ''
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            
            {/* دکمه منوی موبایل */}
            <button 
              className="md:hidden text-white focus:outline-none z-10 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی موبایل"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* محتوای پنهان زیر هیدر */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-800 to-indigo-900 text-white transition-all duration-300 overflow-hidden ${
        isHiddenContentOpen ? 'h-48' : 'h-0'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">خدمات تخصصی گچ کاری و ساختمان</h2>
              <p className="text-blue-200">با بیش از 15 سال سابقه درخشان در صنعت ساختمان</p>
            </div>
            <button 
              onClick={() => setIsHiddenContentOpen(!isHiddenContentOpen)}
              className="text-white hover:text-blue-300 transition-colors z-10"
            >
              {isHiddenContentOpen ? <FaTimes size={20} /> : <FaArrowUp size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* منوی موبایل */}
      <div 
        className={`fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-blue-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* دکمه بستن منو */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">منو</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-300 transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* لینک‌های ناوبری */}
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center py-3 px-4 text-white hover:bg-blue-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaHome className="ml-3 text-xl" />
                    <span className="text-lg">{t('nav.home')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className="flex items-center py-3 px-4 text-white hover:bg-blue-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaProjectDiagram className="ml-3 text-xl" />
                    <span className="text-lg">{t('nav.portfolio')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="flex items-center py-3 px-4 text-white hover:bg-blue-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaInfoCircle className="ml-3 text-xl" />
                    <span className="text-lg">{t('nav.services')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="flex items-center py-3 px-4 text-white hover:bg-blue-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaInfoCircle className="ml-3 text-xl" />
                    <span className="text-lg">{t('nav.about')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="flex items-center py-3 px-4 text-white hover:bg-blue-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaAddressBook className="ml-3 text-xl" />
                    <span className="text-lg">{t('nav.contact')}</span>
                  </Link>
                </li>
              </ul>
              
              {/* جداکننده */}
              <div className="border-t border-blue-800 my-6"></div>
              
              {/* منوی کشویی زبان */}
              <div>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors text-white"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{currentLang.flag}</span>
                    <span className="text-lg">{currentLang.name}</span>
                  </div>
                  <FaChevronDown className={`text-sm transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="mt-2 bg-blue-800 rounded-lg overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-700 transition-colors flex items-center space-x-2 text-white ${
                          lang.code === i18n.language ? 'bg-blue-700' : ''
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