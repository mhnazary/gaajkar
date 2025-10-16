import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
      <p className="text-lg">{t('contact.description')}</p>
    </div>
  );
}

export default Contact;