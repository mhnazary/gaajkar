import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/contact', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.response?.data?.message || 'Error sending message');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
      <p className="text-lg mb-6">{t('contact.description')}</p>
      
      {status && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{status}</div>}
      
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block mb-2">{t('contact.form.name')}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">{t('contact.form.email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">{t('contact.form.message')}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {t('contact.form.submit')}
        </button>
      </form>
    </div>
  );
}

export default Contact;