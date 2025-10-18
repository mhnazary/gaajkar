import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import api from '../utils/api';
import { FaWhatsapp, FaPhone, FaTelegram, FaArrowRight } from 'react-icons/fa';

function Home() {
  const { i18n, t } = useTranslation();
  const [homeInfo, setHomeInfo] = useState({ 
    title: t('home.title'), 
    description: t('home.description') 
  });
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // دریافت اطلاعات صفحه اصلی
        const currentLang = i18n.language || 'fa';
        const homeResponse = await api.get(`info/home/${currentLang}`);
        setHomeInfo(homeResponse.data);
        
        // دریافت پروژه‌های ویژه
        const projectsResponse = await api.get('projects/featured');
        setFeaturedProjects(projectsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // استفاده از مقادیر محلی اگر درخواست موفقیت‌آمیز نبود
        setHomeInfo({ 
          title: t('home.title'), 
          description: t('home.description') 
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language, t]);

  // لودر ساده در حال بارگذاری
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl">{t('home.loading', 'در حال بارگذاری...')}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* بنر بزرگ */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-indigo-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{homeInfo.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">{homeInfo.description}</p>
          <p className="text-2xl font-light italic">{t('home.bannerSubtitle')}</p>
        </div>
      </div>
      
      {/* معرفی کوتاه شرکت */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('home.companyIntroTitle')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('home.companyIntroDescription')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">15+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.experienceYears')}</h3>
                <p className="text-gray-600">{t('home.experienceDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">500+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.successfulProjects')}</h3>
                <p className="text-gray-600">{t('home.projectsDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">50+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.specialistTeam')}</h3>
                <p className="text-gray-600">{t('home.teamDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* بخش نمایش پروژه‌های اخیر */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.recentProjectsTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('home.recentProjectsDesc')}</p>
          </div>
          
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 6).map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('home.noProjectsFound')}</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <a 
              href="/portfolio" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('home.viewAllProjects')}
              <FaArrowRight className="mr-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* دکمه‌های تماس سریع */}
      <div className="py-14 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('home.quickContactTitle')}</h2>
            <p className="text-lg opacity-90">{t('home.quickContactDesc')}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/+93779975529" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg transition-colors"
            >
              <FaWhatsapp className="text-2xl ml-3" />
              <div>
                <div className="font-semibold">{t('home.whatsapp')}</div>
                <div className="text-sm opacity-90">0773545264</div>
              </div>
            </a>
            
            <a 
              href="tel:+93773545264" 
              className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg transition-colors"
            >
              <FaPhone className="text-2xl ml-3" />
              <div>
                <div className="font-semibold">{t('home.phoneCall')}</div>
                <div className="text-sm opacity-90">077-3545264</div>
              </div>
            </a>
            
            <a 
              href="https://t.me/SadaqatGaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-lg transition-colors"
            >
              <FaTelegram className="text-2xl ml-3" />
              <div>
                <div className="font-semibold">{t('home.telegram')}</div>
                <div className="text-sm opacity-90">@SadaqatGaj</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;