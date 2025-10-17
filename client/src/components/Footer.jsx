import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white mt-8 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center">
            <div className="bg-blue-700 p-3 rounded-full mx-4">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">آدرس </h4>
              <p className="text-blue-200 text-sm">کابل سرک هشتاد متره میدان هوایی</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-green-600 p-3 rounded-full mx-4">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">تماس تلفنی</h4>
              <p className="text-blue-200 text-sm">93773545264+</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-purple-600 p-3 rounded-full mx-4">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">پست الکترونیک</h4>
              <p className="text-blue-200 text-sm">mhnazary2020@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-yellow-600 p-3 rounded-full mx-4">
              <FaClock className="text-xl" />
            </div>
            <div>
              <h4 className="font-medium">ساعت کاری</h4>
              <p className="text-blue-200 text-sm">شنبه تا پنج شنبه: 08:00 - 05:00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-300">
            &copy; {currentYear} گچکاری صداقت. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
