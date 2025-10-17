import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaTelegram,
  FaPaperPlane,
  FaHeadset,
  FaBuilding,
  FaArrowLeft
} from 'react-icons/fa';

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
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: 'آدرس دفتر',
      details: [
        'تهران، خیابان ولیعصر، کوچه شهید بهشتی، پلاک 123',
        'ساعت کاری: شنبه تا چهارشنبه 8:00 - 18:00'
      ]
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: 'تماس تلفنی',
      details: [
        '021-12345678',
        '09123456789'
      ]
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: 'پست الکترونیک',
      details: [
        'info@gajbrothers.com',
        'support@gajbrothers.com'
      ]
    },
    {
      icon: <FaClock className="text-xl" />,
      title: 'ساعت کاری',
      details: [
        'شنبه تا چهارشنبه: 8:00 - 18:00',
        'پنج‌شنبه: 8:00 - 15:00'
      ]
    }
  ];

  const quickContactOptions = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: 'واتساپ',
      color: 'bg-green-600 hover:bg-green-700',
      link: 'https://wa.me/1234567890'
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'تماس تلفنی',
      color: 'bg-blue-600 hover:bg-blue-700',
      link: 'tel:+989123456789'
    },
    {
      icon: <FaTelegram className="text-xl" />,
      label: 'تلگرام',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      link: 'https://t.me/yourusername'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl">در حال بارگذاری...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{contactInfo.title}</h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">{contactInfo.description}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaHeadset className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">اطلاعات تماس</h2>
              </div>
              
              <div className="space-y-8">
                {contactInfoList.map((info, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4 mt-1">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-6">تماس سریع با ما</h2>
                  <p className="text-blue-200 mb-8">
                    برای دریافت مشاوره رایگان و برآورد هزینه، از طریق یکی از راه‌های زیر با ما تماس بگیرید. کارشناسان ما در اسرع وقت پاسخگوی شما خواهند بود.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaBuilding className="text-xl mr-3" />
                      <span>پاسخگویی در سریع‌ترین زمان ممکن</span>
                    </div>
                    <div className="flex items-center">
                      <FaPaperPlane className="text-xl mr-3" />
                      <span>مشاوره تخصصی و رایگان</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">روش‌های تماس</h3>
                <div className="space-y-4">
                  {quickContactOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${option.color} text-white px-6 py-4 rounded-lg flex items-center transition-all duration-300 transform hover:scale-[1.02] shadow-md`}
                    >
                      <span className="ml-3">{option.icon}</span>
                      <span className="font-medium">{option.label}</span>
                      <span className="mr-auto">
                        <FaArrowLeft className="text-lg" />
                      </span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-3">ساعات کاری:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>شنبه تا چهارشنبه: ۸:۰۰ صبح تا ۶:۰۰ بعدازظهر</li>
                    <li>پنج‌شنبه: ۸:۰۰ صبح تا ۳:۰۰ بعدازظهر</li>
                    <li>جمعه: تعطیل</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">آماده همکاری با شما هستیم</h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              تیم گچکاری صداقت با بهره‌گیری از نیروهای متخصص و مواد اولیه باکیفیت، آماده ارائه خدمات به شما عزیزان در سراسر کشور است.
            </p>
            <a 
              href="tel:+989123456789" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPhone className="ml-2" />
              <span>تماس با شماره: ۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;