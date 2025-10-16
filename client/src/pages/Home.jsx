import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';

function Home() {
  const { i18n, t } = useTranslation();
  const [homeInfo, setHomeInfo] = useState({ title: t('home.title'), description: t('home.description') });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        setLoading(true);
        // استفاده از مقدار پیش‌فرض اگر زبان تعریف نشده بود
        const currentLang = i18n.language || 'fa';
        const response = await api.get(`/info/home/${currentLang}`);
        setHomeInfo(response.data);
      } catch (error) {
        console.error('Error fetching home info:', error);
        // استفاده از مقادیر محلی اگر درخواست موفقیت‌آمیز نبود
        setHomeInfo({ 
          title: t('home.title'), 
          description: t('home.description') 
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHomeInfo();
  }, [i18n.language, t]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{homeInfo.title}</h1>
      <p className="text-lg">{homeInfo.description}</p>
    </div>
  );
}

export default Home;