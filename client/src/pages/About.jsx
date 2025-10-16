import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('about.title')}</h1>
      <p className="text-lg">{t('about.description')}</p>
    </div>
  );
}

export default About;  // این خط مهم است!