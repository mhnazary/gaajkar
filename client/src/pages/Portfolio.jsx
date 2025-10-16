import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';

function Portfolio() {
  const { i18n } = useTranslation();
  const [portfolioInfo, setPortfolioInfo] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchPortfolioInfo = async () => {
      try {
        const response = await api.get(`/info/portfolio/${i18n.language}`);
        setPortfolioInfo(response.data);
      } catch (error) {
        console.error('Error fetching portfolio info:', error);
      }
    };

    fetchPortfolioInfo();
  }, [i18n.language]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{portfolioInfo.title}</h1>
      <p className="text-lg">{portfolioInfo.description}</p>
    </div>
  );
}

export default Portfolio;