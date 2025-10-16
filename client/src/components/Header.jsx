import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'fa' || lng === 'ps' ? 'rtl' : 'ltr';
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Gaj Brothers</Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/portfolio">{t('nav.portfolio')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        <div className="flex space-x-2">
          <button 
            onClick={() => changeLanguage('fa')} 
            className={`px-3 py-1 rounded ${i18n.language === 'fa' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            دری
          </button>
          <button 
            onClick={() => changeLanguage('ps')} 
            className={`px-3 py-1 rounded ${i18n.language === 'ps' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            پشتو
          </button>
          <button 
            onClick={() => changeLanguage('en')} 
            className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;