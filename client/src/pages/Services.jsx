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
    title: 'خدمات ما', 
    description: 'خدمات تخصصی ما در زمینه گچ کاری و ساختمان' 
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
          title: 'خدمات ما', 
          description: 'خدمات تخصصی ما در زمینه گچ کاری و ساختمان' 
        });
      } finally {
        setLoading(false);
      }
    };

    fetchServicesInfo();
  }, [i18n.language]);

  const services = [
    {
      icon: <FaPaintRoller className="text-3xl" />,
      title: 'گچ‌کاری سنتی و مدرن',
      description: 'انواع گچ کاری دیواری، سقفی و تزئینی با بهترین مواد و روش‌های روز دنیا',
      image: 'https://images.unsplash.com/photo-1556912167-f6635cbdb542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: 'گچ‌بری و تزئینات داخلی',
      description: 'طراحی و اجرای گچ‌بری‌های زیبا و مدرن برای فضاهای داخلی',
      image: 'https://images.unsplash.com/photo-1600585154340-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'سقف کاذب و طراحی نورپردازی',
      description: 'طراحی و اجرای سقف‌های کاذب مدرن با نورپردازی‌های خلاقانه',
      image: 'https://images.unsplash.com/photo-1616594040136-4a9e3e2d6c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      icon: <FaHammer className="text-3xl" />,
      title: 'ترمیم و بازسازی دیوارها',
      description: 'ترمیم و بازسازی دیوارهای قدیمی و آسیب‌دیده با بهترین مواد',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      icon: <FaBrush className="text-3xl" />,
      title: 'رنگ و نقاشی دیواری',
      description: 'انواع رنگ‌آمیزی دیواری با رنگ‌های باکیفیت و متنوع',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80'
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: 'خدمات تکمیلی ساختمانی',
      description: 'انواع خدمات ساختمانی از جمله کف‌سازی، نما و...',
      image: 'https://images.unsplash.com/photo-1600585154340-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const features = [
    {
      icon: <FaStar className="text-2xl" />,
      title: 'کیفیت برتر',
      description: 'استفاده از مواد اولیه باکیفیت و رعایت استانداردهای بین‌المللی'
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: 'دقت در اجرا',
      description: 'توجه به جزئیات و اجرای دقیق پروژه‌ها مطابق با نقشه‌های فنی'
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'رضایت مشتری',
      description: 'تعهد به رضایت کامل مشتری و ارائه پشتیبانی پس از تحویل پروژه'
    }
  ];

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* هدر صفحه */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{servicesInfo.title}</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{servicesInfo.description}</p>
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
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                اطلاعات بیشتر →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* بخش ویژگی‌ها */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">چرا خدمات ما را انتخاب کنید؟</h2>
        
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
        <h2 className="text-3xl font-bold mb-4">آماده شروع پروژه بعدی شما هستیم</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          برای دریافت مشاوره رایگان و برآورد هزینه، همین حالا با ما تماس بگیرید
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          تماس با ما
        </a>
      </div>
    </div>
  );
}

export default Services;