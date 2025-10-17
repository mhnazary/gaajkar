import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../utils/api";
import { FaUsers, FaAward, FaHandshake, FaBuilding } from "react-icons/fa";

function About() {
  const { i18n, t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [aboutInfo, setAboutInfo] = useState({
    title: t("about.title"),
    description: t("about.description"),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const currentLang = i18n.language || "fa";
        const response = await api.get(`/info/about/${currentLang}`);
        setAboutInfo(response.data);
      } catch (error) {
        console.error("Error fetching about info:", error);
        setAboutInfo({
          title: t("about.title"),
          description: t("about.description"),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAboutInfo();
  }, [i18n.language, t]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="max-w-6xl mx-auto">
        {/* سابقه کاری */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">سابقه درخشان</h2>
              <p className="text-gray-700 mb-6">
                شرکت گاج برادران در سال 1380 تاسیس شد و از آن زمان تاکنون، با
                تکیه بر دانش فنی و تجربه، به عنوان یکی از پیشگامان در صنعت
                ساختمان شناخته می‌شود. ما در پروژه‌های مسکونی، تجاری و اداری
                فعالیت داشته و همواره رضایت مشتری را در اولویت قرار داده‌ایم.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaBuilding className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">150+ پروژه</div>
                    <div className="text-sm text-gray-600">موفقیت‌آمیز</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaUsers className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">5+ کارمند</div>
                    <div className="text-sm text-gray-600">متخصص و مجرب</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaAward className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">15+ سال</div>
                    <div className="text-sm text-gray-600">سابقه کاری</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaHandshake className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">99%</div>
                    <div className="text-sm text-gray-600">رضایت مشتری</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://i.postimg.cc/YSP8Dprq/FB-IMG-1711470810343.jpg"
                alt="Construction Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* تیم استادکاران */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            تیم استادکاران ما
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">علی رضایی</h3>
                <p className="text-gray-600 mb-3">مدیرعامل و بنیان‌گذار</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    20 سال تجربه
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    مدیریت پروژه
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">زیبا حسینی</h3>
                <p className="text-gray-600 mb-3">مدیر فنی</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    15 سال تجربه
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    نظارت کیفی
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">سارا احمدی</h3>
                <p className="text-gray-600 mb-3">مدیر مالی</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    10 سال تجربه
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    مالی و حسابداری
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* اهداف و ارزش‌ها */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            اهداف و ارزش‌های ما
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">کیفیت</h3>
                <p className="text-gray-600">
                  استفاده از بهترین مواد اولیه و رعایت استانداردهای بین‌المللی
                  در تمام پروژه‌ها
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">دقت</h3>
                <p className="text-gray-600">
                  توجه به جزئیات و اجرای دقیق پروژه‌ها مطابق با نقشه‌های فنی و
                  خواست مشتری
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">رضایت مشتری</h3>
                <p className="text-gray-600">
                  تعهد به رضایت کامل مشتری و ارائه پشتیبانی پس از تحویل پروژه
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* عکس‌های تیم در حال کار */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            تیم ما در حال فعالیت
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://i.postimg.cc/Zq9f4kgp/1753805974515.jpg"
              alt="Team Working"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://i.postimg.cc/65Q2qCLX/1747979093198.jpg"
              alt="Team Working"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Team Working"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              alt="Team Working"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
