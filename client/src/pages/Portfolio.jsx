import { useTranslation } from 'react-i18next';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('portfolio.title')}</h1>
      <p className="text-lg">{t('portfolio.description')}</p>
    </div>
  );
}

export default Portfolio;