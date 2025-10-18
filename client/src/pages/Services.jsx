import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
// Import صحیح react-icons
import { 
  FaPaintRoller, 
  FaMagic, 
  FaLightbulb, 
  FaHammer, 
  FaBrush, 
  FaTools,
  FaAward,
  FaUsers,
  FaHandshake,
  FaBuilding,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

function Services() {
  // eslint-disable-next-line no-unused-vars
  const { i18n, t } = useTranslation();
  const [servicesInfo, setServicesInfo] = useState({ 
    title: t('services.title'), 
    description: t('services.description') 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicesInfo = async () => {
      try {
        const currentLang = i18n.language || 'fa';
        const response = await api.get(`/info/services/${currentLang}`);
        setServicesInfo(response.data);
      } catch (error) {
        console.error('Error fetching services info:', error);
        // اگر اطلاعات از سرور دریافت نشد، از مقادیر پیش‌فرض استفاده کن
        setServicesInfo({ 
          title: t('services.title'), 
          description: t('services.description') 
        });
      } finally {
        setLoading(false);
      }
    };

    fetchServicesInfo();
  }, [i18n.language, t]);

  const services = [
    {
      icon: <FaPaintRoller className="text-3xl" />,
      title: t('services.traditionalPlastering'),
      description: t('services.traditionalPlasteringDesc'),
      image: 'https://i.postimg.cc/vTpJXVYN/2018-10.jpg'
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: t('services.decorativePlastering'),
      description: t('services.decorativePlasteringDesc'),
      image: 'https://i.postimg.cc/h49NqfGR/FB-IMG-1711471141142.jpg'
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: t('services.falseCeiling'),
      description: t('services.falseCeilingDesc'),
      image: 'https://i.postimg.cc/90JpQ3SM/1756222964884.jpg'
    },
    {
      icon: <FaHammer className="text-3xl" />,
      title: t('services.wallRenovation'),
      description: t('services.wallRenovationDesc'),
      image: 'https://i.postimg.cc/QNbSb5Mn/images-22-jpeg.jpg'
    },
    {
      icon: <FaBrush className="text-3xl" />,
      title: t('services.painting'),
      description: t('services.paintingDesc'),
      image: 'https://i.postimg.cc/Y2383g9G/1756226837771.jpg'
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: t('services.additionalServices'),
      description: t('services.additionalServicesDesc'),
      image: 'https://i.postimg.cc/Pf4K4Zxj/photo-1024x768.jpg'
    }
  ];

  const features = [
    {
      icon: <FaStar className="text-2xl" />,
      title: t('services.quality'),
      description: t('services.qualityDesc')
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: t('services.precision'),
      description: t('services.precisionDesc')
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: t('services.customerSatisfaction'),
      description: t('services.customerSatisfactionDesc')
    }
  ];

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-xl">{t('services.loading', 'در حال بارگذاری...')}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* هدر صفحه */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{servicesInfo.title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mt-10">{servicesInfo.description}</p>
      </div>
      
      {/* بخش خدمات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  {service.icon}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* بخش ویژگی‌ها */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.whyChooseUs')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 bg-blue-900 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('services.readyToStart')}</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          {t('services.readyToStartDesc')}
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {t('services.contactUs')}
        </a>
      </div>
    </div>
  );
}

export default Services;