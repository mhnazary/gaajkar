import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Contact() {
  // eslint-disable-next-line no-unused-vars
  const { i18n, t } = useTranslation();
  const [contactInfo, setContactInfo] = useState({ 
    title: 'تماس با ما', 
    description: 'برای هرگونه سوال یا درخواست، با ما تماس بگیرید' 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const currentLang = i18n.language || 'fa';
        const response = await api.get(`/info/contact/${currentLang}`);
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, [i18n.language]);

  const contactInfoList = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'آدرس دفتر',
      details: [
        'تهران، خیابان ولیعصر، کوچه شهید بهشتی، پلاک 123',
        'ساعت کاری: شنبه تا چهارشنبه 8:00 - 18:00'
      ]
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'تماس تلفنی',
      details: [
        '021-12345678',
        '09123456789'
      ]
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'پست الکترونیک',
      details: [
        'info@gajbrothers.com',
        'support@gajbrothers.com'
      ]
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'ساعت کاری',
      details: [
        'شنبه تا چهارشنبه: 8:00 - 18:00',
        'پنج‌شنبه: 8:00 - 15:00'
      ]
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
        <h1 className="text-4xl font-bold mb-4">{contactInfo.title}</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{contactInfo.description}</p>
      </div>
      
      {/* نقشه و اطلاعات تماس */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.123456789!2d51.123456789!3d35.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzguMTIzNDU2Nzg5!5e0!3m2!1sfa!2sir!4v123456789!5m2!1sfa!2sir"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-8">اطلاعات تماس</h2>
          
          <div className="space-y-6">
            {contactInfoList.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* دکمه‌های تماس سریع */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">تماس سریع</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <FaWhatsapp className="ml-2" />
                واتساپ
              </a>
              
              <a 
                href="tel:+989123456789" 
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <FaPhone className="ml-2" />
                تماس تلفنی
              </a>
              
              <a 
                href="https://t.me/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <FaTelegram className="ml-2" />
                تلگرام
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* فرم تماس */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">ارسال پیام</h2>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">نام و نام خانوادگی *</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">شماره تماس *</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">ایمیل</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">موضوع پیام</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">پیام شما *</label>
              <textarea 
                rows="5" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;