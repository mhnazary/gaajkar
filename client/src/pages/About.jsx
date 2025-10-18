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
        <div className="text-xl">{t('about.loading', 'در حال بارگذاری...')}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="max-w-6xl mx-auto">
        {/* سابقه کاری */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-16 mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('about.brilliantHistory')}</h2>
              <p className="text-gray-700 mb-6">
                {t('about.brilliantHistoryDesc')}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8 p-8">
                <div className="flex items-center ">
                  <div className="bg-blue-100 p-3 rounded-full mx-4">
                    <FaBuilding className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">150+ {t('about.successfulProjects', 'پروژه موفق')}</div>
                    <div className="text-sm text-gray-600">{t('about.projectsDesc', 'پروژه‌های اتمام شده با رضایت مشتری')}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mx-4">
                    <FaUsers className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">5+ {t('about.specialistTeam', 'تیم متخصص')}</div>
                    <div className="text-sm text-gray-600">{t('about.teamDesc', 'کارکنان مجرب و متخصص')}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-full mx-4">
                    <FaAward className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">15+ {t('about.experienceYears', 'سال تجربه')}</div>
                    <div className="text-sm text-gray-600">{t('about.experienceDesc', 'سابقه درخشان در صنعت ساختمان')}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mx-4">
                    <FaHandshake className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold">99%</div>
                    <div className="text-sm text-gray-600">{t('about.customerSatisfaction', 'رضایت مشتری')}</div>
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
            {t('about.ourTeam')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t('about.teamMember1Name')}</h3>
                <p className="text-gray-600 mb-3">{t('about.teamMember1Position')}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {t('about.teamMember1Exp1')}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {t('about.teamMember1Exp2')}
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
                <h3 className="text-xl font-bold mb-2">{t('about.teamMember2Name')}</h3>
                <p className="text-gray-600 mb-3">{t('about.teamMember2Position')}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {t('about.teamMember2Exp1')}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {t('about.teamMember2Exp2')}
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
                <h3 className="text-xl font-bold mb-2">{t('about.teamMember3Name')}</h3>
                <p className="text-gray-600 mb-3">{t('about.teamMember3Position')}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {t('about.teamMember3Exp1')}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {t('about.teamMember3Exp2')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* اهداف و ارزش‌ها */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('about.goalsAndValues')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.quality')}</h3>
                <p className="text-gray-600">
                  {t('about.qualityDesc')}
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.precision')}</h3>
                <p className="text-gray-600">
                  {t('about.precisionDesc')}
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('about.customerSatisfaction')}</h3>
                <p className="text-gray-600">
                  {t('about.customerSatisfactionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* عکس‌های تیم در حال کار */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('about.teamInAction')}
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