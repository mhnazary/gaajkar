import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaChevronDown,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaProjectDiagram,
  FaAddressBook,
  FaArrowUp,
} from "react-icons/fa";

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Check if current language is RTL
  const isRTL = i18n.language === "fa" || i18n.language === "ps";

  // Navigation items
  const navItems = [
    { path: "/", icon: <FaHome />, label: t("nav.home") },
    {
      path: "/portfolio",
      icon: <FaProjectDiagram />,
      label: t("nav.portfolio"),
    },
    { path: "/services", icon: <FaInfoCircle />, label: t("nav.services") },
    { path: "/about", icon: <FaInfoCircle />, label: t("nav.about") },
    { path: "/contact", icon: <FaAddressBook />, label: t("nav.contact") },
  ];

  // Languages with flags and colors
  const languages = [
    { code: "fa", name: "دری", flag: "🇦🇫", color: "bg-blue-600" },
    { code: "ps", name: "پشتو", flag: "🇦🇫", color: "bg-green-600" },
    { code: "en", name: "English", flag: "🇺🇸", color: "bg-purple-600" },
  ];

  // Current language
  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "fa" || lng === "ps" ? "rtl" : "ltr";
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  // Handle link click with animation
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg py-2 backdrop-blur-sm bg-opacity-95"
            : "bg-gradient-to-r from-blue-900 to-indigo-800 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-2xl font-bold text-white group-hover:text-blue-200 transition-all duration-300 transform group-hover:scale-105">
                گچکاری صداقت
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        activeLink === item.path
                          ? "text-white bg-blue-700 shadow-md"
                          : "text-blue-100 hover:text-white hover:bg-blue-700 hover:bg-opacity-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeLink === item.path && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded-full animate-pulse"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md ${currentLang.color}`}
                >
                  <span className="text-xl">{currentLang.flag}</span>
                  <span className="font-medium text-white">
                    {currentLang.name}
                  </span>
                  <FaChevronDown
                    className={`text-white text-sm transition-transform duration-300 ${
                      isLangMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl z-10 overflow-hidden transition-all duration-300 transform origin-top-right">
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3 ${
                            lang.code === i18n.language
                              ? "bg-blue-50 font-medium"
                              : ""
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${lang.color}`}
                          >
                            <span className="text-white">{lang.flag}</span>
                          </span>
                          <span
                            className={
                              lang.code === i18n.language
                                ? "text-blue-700"
                                : "text-gray-700"
                            }
                          >
                            {lang.name}
                          </span>
                          {lang.code === i18n.language && (
                            <span className="ml-auto text-blue-500">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none z-10 relative transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منوی موبایل"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slides down from top */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-16 left-0 right-0 bg-gradient-to-b from-blue-900 to-indigo-900 shadow-xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="p-6 overflow-y-auto h-full">
            {/* Navigation Links */}
            <nav className="mb-8">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={`flex items-center py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeLink === item.path
                          ? "bg-blue-800 text-blue-100 border-l-4 border-blue-300"
                          : "text-blue-100 hover:bg-blue-800"
                      }`}
                    >
                      <span className={isRTL ? "ml-3 text-xl" : "mr-3 text-xl"}>
                        {item.icon}
                      </span>
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Selector Dropdown */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-blue-200 mb-3">
                {t("nav.language")}
              </h3>
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${currentLang.color}`}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{currentLang.flag}</span>
                    <span className="font-medium text-white">
                      {currentLang.name}
                    </span>
                  </div>
                  <FaChevronDown
                    className={`text-white text-sm transition-transform duration-300 ${
                      isLangMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl z-10 overflow-hidden transition-all duration-300">
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center px-4 py-3 transition-colors duration-200 ${
                            lang.code === i18n.language
                              ? "bg-blue-50"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${lang.color} mr-3`}
                          >
                            <span className="text-white">{lang.flag}</span>
                          </span>
                          <span
                            className={
                              lang.code === i18n.language
                                ? "text-blue-700 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {lang.name}
                          </span>
                          {lang.code === i18n.language && (
                            <span className="ml-auto text-blue-500">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
