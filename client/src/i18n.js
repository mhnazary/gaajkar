import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fa: {
    translation: {
      nav: {
        home: 'خانه',
        about: 'درباره ما',
        portfolio: 'نمونه کارها',
        contact: 'تماس با ما'
      },
      home: {
        title: 'به وبسایت گاج برادران خوش آمدید',
        description: 'ما یک تیم خلاق هستیم که در زمینه طراحی و توسعه وب فعالیت می‌کنیم.'
      },
      about: {
        title: 'درباره ما',
        description: 'تیم گاج برادران متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است.'
      },
      portfolio: {
        title: 'نمونه کارها',
        description: 'در اینجا برخی از پروژه‌های برجسته ما را مشاهده می‌کنید.'
      },
      contact: {
        title: 'تماس با ما',
        description: 'برای ارتباط با ما از طریق فرم زیر اقدام کنید.'
      }
    }
  },
  ps: {
    translation: {
      nav: {
        home: 'کور',
        about: 'زمونږ په اړه',
        portfolio: 'کارونه',
        contact: 'اړیکه'
      },
      home: {
        title: 'د گاج وروران ویب پاڼې ته ښه راغلاست',
        description: 'موږ یو تخلیقي ټول یو چې په ویب ډیزاین او پراختیا کې فعالیت کوو.'
      },
      about: {
        title: 'زمونږ په اړه',
        description: 'د گاج وروران ټول د مسلکي پراختیا کونکو څخه جوړ دی چې په نوښتیزه ډیجیټل حل لارو تمرکز لري.'
      },
      portfolio: {
        title: 'کارونه',
        description: 'دلته تاسو به ځینې مهمې پروژې ولیدلای شي.'
      },
      contact: {
        title: 'اړیکه',
        description: 'د موږ سره د اړیکې لپاره لاندې فورمه ډک کړئ.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      home: {
        title: 'Welcome to Gaj Brothers Website',
        description: 'We are a creative team working in web design and development.'
      },
      about: {
        title: 'About Us',
        description: 'Gaj Brothers team consists of professional developers focused on providing innovative digital solutions.'
      },
      portfolio: {
        title: 'Portfolio',
        description: 'Here you can see some of our featured projects.'
      },
      contact: {
        title: 'Contact Us',
        description: 'To get in touch with us, please fill out the form below.'
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
  });

export default i18n;