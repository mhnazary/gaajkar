import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fa: {
    translation: {
      nav: {
        home: 'خانه',
      portfolio: 'نمونه کارها',
        favorites: 'موارد دلخواه',
        services: 'خدمات ما',
        about: 'درباره ما',
        contact: 'تماس با ما'
    },
      home: {
        title: 'به وبسایت گاج برادران خوش آمدید',
        description: 'ما یک تیم خلاق هستیم که در زمینه طراحی و توسعه وب فعالیت می‌کنیم.'
      },
      about: {
        title: 'درباره ما',
        description: 'تیم گاج برادران متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است. ما با بیش از 10 سال تجربه در زمینه گچ کاری و ساختمان، بهترین خدمات را به مشتریان عزیز ارائه می‌دهیم.'
      },
      portfolio: {
        title: 'نمونه کارها',
        description: 'در اینجا برخی از پروژه‌های برجسته ما را مشاهده می‌کنید.'
      },
      favorites: {
        title: 'موارد دلخواه',
        description: 'پروژه‌هایی که علاقه‌مند به آن‌ها هستید را اینجا ذخیره کنید.'
      }
    }
  },
  ps: {
    translation: {
      nav: {
        home: 'کور',
        portfolio: 'کارونه',
        favorites: 'غوره شوي کارونه',
        services: 'خدمتونه',
        about: 'زمونږ په اړه',
        contact: 'اړیکه'
      },
      home: {
        title: 'د گاج وروران ویب پاڼې ته ښه راغلاست',
        description: 'موږ یو تخلیقي ټول یو چې په ویب ډیزاین او پراختیا کې فعالیت کوو.'
      },
      about: {
        title: 'زمونږ په اړه',
        description: 'د گاج وروران ټول د مسلکي پراختیا کونکو څخه جوڭ دی چې په نوښتیزه ډیجیټل حل لارو تمرکز لري.'
      },
      portfolio: {
        title: 'کارونه',
        description: 'دلته تاسو به ځینې مهمې پروژې ولیدلای شي.'
      },
      favorites: {
        title: 'غوره شوي کارونه',
        description: 'هغه کارونه چې تاسو يې خوښوئ دلته ساتل کړئ.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        portfolio: 'Portfolio',
        home: 'Home',
        favorites: 'Favorites',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact Us'
      },
      home: {
        title: 'Welcome to Gaj Brothers Website',
        description: 'We are a creative team working in web design and development.'
      },
      about: {
        title: 'About Us',
        description: 'Gaj Brothers team consists of professional developers focused on providing innovative digital solutions. With over 10 years of experience in plastering and construction, we provide the best services to our dear customers.'
      },
      portfolio: {
        title: 'Portfolio',
        description: 'Here you can see some of our featured projects.'
      },
      favorites: {
        title: 'Favorites',
        description: 'Save the projects you are interested in here.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa',
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === 'fa' || lang === 'ps' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  });

export default i18n;