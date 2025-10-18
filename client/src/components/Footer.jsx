import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobe } from "react-icons/fa";

function Footer() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // دریافت متن کپی‌رایت با جایگزینی سال
  const copyrightText = t('footer.copyrightText', '© {year} گچکاری صداقت. تمامی حقوق محفوظ است.')
    .replace('{year}', currentYear);

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white mt-8 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center">
            <div className="bg-blue-700 p-3 rounded-full mx-4">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">{t('footer.address')}</h4>
              <p className="text-blue-200 text-sm">{t('footer.addressDetail')}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-green-600 p-3 rounded-full mx-4">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">{t('footer.phone')}</h4>
              <p className="text-blue-200 text-sm">{t('footer.phoneDetail')}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-purple-600 p-3 rounded-full mx-4">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">{t('footer.email')}</h4>
              <p className="text-blue-200 text-sm">{t('footer.emailDetail')}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-yellow-600 p-3 rounded-full mx-4">
              <FaClock className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">{t('footer.workingHours')}</h4>
              <p className="text-blue-200 text-sm">{t('footer.workingHoursDetail')}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-300">
            {copyrightText}
          </p>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;