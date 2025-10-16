import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';

function Home() {
  const { i18n } = useTranslation();
  const [homeInfo, setHomeInfo] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        const response = await api.get(`/info/home/${i18n.language}`);
        setHomeInfo(response.data);
      } catch (error) {
        console.error('Error fetching home info:', error);
      }
    };

    fetchHomeInfo();
  }, [i18n.language]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{homeInfo.title}</h1>
      <p className="text-lg">{homeInfo.description}</p>
    </div>
  );
}

export default Home;