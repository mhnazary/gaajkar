import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fa: {
    translation: {
      nav: {
        home: "خانه",
        portfolio: "نمونه کارها",
        favorites: "موارد دلخواه",
        services: "خدمات ما",
        about: "درباره ما",
        contact: "تماس با ما",
        language: "زبان",
      },
      home: {
        title: "به وبسایت گچکاری صداقت خوش آمدید",
        description:
          "ما با بیش از 15 سال سابقه درخشان در زمینه گچ کاری و ساختمان، ارائه خدمات با کیفیت و رضایت مشتری را سرلوحه کار خود قرار داده‌ایم.",
        bannerSubtitle: "زیبایی و کیفیت در هر دیوار",
        companyIntroTitle: "معرفی شرکت",
        companyIntroDescription:
          "شرکت گچکاری صداقت با بیش از 15 سال سابقه درخشان در زمینه گچ کاری و ساختمان، به عنوان یکی از معتبرترین شرکت‌ها در صنعت ساختمان شناخته می‌شود. ما با بهره‌گیری از تیمی مجرب و استفاده از مواد اولیه باکیفیت، پروژه‌های متعددی را با موفقیت به پایان رسانده‌ایم.",
        experienceYears: "سال تجربه",
        experienceDesc: "سابقه درخشان در صنعت ساختمان",
        successfulProjects: "پروژه موفق",
        projectsDesc: "پروژه‌های اتمام شده با رضایت مشتری",
        specialistTeam: "تیم متخصص",
        teamDesc: "کارکنان مجرب و متخصص",
        recentProjectsTitle: "پروژه‌های اخیر",
        recentProjectsDesc: "آخرین نمونه کارهای اجرا شده توسط تیم ما",
        noProjectsFound: "هیچ پروژه‌ای یافت نشد",
        viewAllProjects: "مشاهده تمام پروژه‌ها",
        quickContactTitle: "تماس سریع با ما",
        quickContactDesc:
          "برای دریافت مشاوره رایگان و برآورد هزینه با ما تماس بگیرید",
        whatsapp: "واتساپ",
        phoneCall: "تماس تلفنی",
        telegram: "تلگرام",
      },
      services: {
        title: "خدمات ما",
        description: "خدمات تخصصی ما در زمینه گچ کاری و ساختمان",
        traditionalPlastering: "گچ‌کاری سنتی و مدرن",
        traditionalPlasteringDesc:
          "انواع گچ کاری دیواری، سقفی و تزئینی با بهترین مواد و روش‌های روز دنیا",
        decorativePlastering: "گچ‌بری و تزئینات داخلی",
        decorativePlasteringDesc:
          "طراحی و اجرای گچ‌بری‌های زیبا و مدرن برای فضاهای داخلی",
        falseCeiling: "سقف کاذب و طراحی نورپردازی",
        falseCeilingDesc:
          "طراحی و اجرای سقف‌های کاذب مدرن با نورپردازی‌های خلاقانه",
        wallRenovation: "ترمیم و بازسازی دیوارها",
        wallRenovationDesc:
          "ترمیم و بازسازی دیوارهای قدیمی و آسیب‌دیده با بهترین مواد",
        painting: "رنگ و نقاشی دیواری",
        paintingDesc: "انواع رنگ‌آمیزی دیواری با رنگ‌های باکیفیت و متنوع",
        additionalServices: "خدمات تکمیلی ساختمانی",
        additionalServicesDesc:
          "انواع خدمات ساختمانی از جمله کف‌سازی، نما و...",
        whyChooseUs: "چرا خدمات ما را انتخاب کنید؟",
        quality: "کیفیت برتر",
        qualityDesc:
          "استفاده از مواد اولیه باکیفیت و رعایت استانداردهای بین‌المللی",
        precision: "دقت در اجرا",
        precisionDesc:
          "توجه به جزئیات و اجرای دقیق پروژه‌ها مطابق با نقشه‌های فنی",
        customerSatisfaction: "رضایت مشتری",
        customerSatisfactionDesc:
          "تعهد به رضایت کامل مشتری و ارائه پشتیبانی پس از تحویل پروژه",
        readyToStart: "آماده شروع پروژه بعدی شما هستیم",
        readyToStartDesc:
          "برای دریافت مشاوره رایگان و برآورد هزینه، همین حالا با ما تماس بگیرید",
        contactUs: "تماس با us",
      },
      about: {
        title: "درباره ما",
        description:
          "تیم گچکاری صداقت متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است. ما با بیش از 10 سال تجربه در زمینه گچ کاری و ساختمان، بهترین خدمات را به مشتریان عزیز ارائه می‌دهیم.",
        brilliantHistory: "سابقه درخشان",
        brilliantHistoryDesc:
          "شرکت گچکاری صداقت در سال 1380 تاسیس شد و از آن زمان تاکنون، با تکیه بر دانش فنی و تجربه، به عنوان یکی از پیشگامان در صنعت ساختمان شناخته می‌شود. ما در پروژه‌های مسکونی، تجاری و اداری فعالیت داشته و همواره رضایت مشتری را در اولویت قرار داده‌ایم.",
        ourTeam: "تیم استادکاران ما",
        teamMember1Name: "علی رضایی",
        teamMember1Position: "مدیرعامل و بنیان‌گذار",
        teamMember1Exp1: "20 سال تجربه",
        teamMember1Exp2: "مدیریت پروژه",
        teamMember2Name: "زیبا حسینی",
        teamMember2Position: "مدیر فنی",
        teamMember2Exp1: "15 سال تجربه",
        teamMember2Exp2: "نظارت کیفی",
        teamMember3Name: "سارا احمدی",
        teamMember3Position: "مدیر مالی",
        teamMember3Exp1: "10 سال تجربه",
        teamMember3Exp2: "مالی و حسابداری",
        goalsAndValues: "اهداف و ارزش‌های ما",
        quality: "کیفیت",
        qualityDesc:
          "استفاده از بهترین مواد اولیه و رعایت استانداردهای بین‌المللی در تمام پروژه‌ها",
        precision: "دقت",
        precisionDesc:
          "توجه به جزئیات و اجرای دقیق پروژه‌ها مطابق با نقشه‌های فنی و خواست مشتری",
        customerSatisfaction: "رضایت مشتری",
        customerSatisfactionDesc:
          "تعهد به رضایت کامل مشتری و ارائه پشتیبانی پس از تحویل پروژه",
        teamInAction: "تیم ما در حال فعالیت",
      },
      footer: {
        address: "آدرس",
        addressDetail: "کابل سرک هشتاد متره میدان هوایی",
        phone: "تماس تلفنی",
        phoneDetail: "93773545264+",
        email: "پست الکترونیک",
        emailDetail: "mhnazary2020@yahoo.com",
        workingHours: "ساعت کاری",
        workingHoursDetail: "شنبه تا پنج شنبه: 08:00 - 05:00",
        copyright: "کپی‌رایت",
        copyrightText: "© {year} گچکاری صداقت. تمامی حقوق محفوظ است.",
      },
    },
  },
  ps: {
    translation: {
      nav: {
        home: "کور",
        portfolio: "کارونه",
        favorites: "غوره شوي کارونه",
        services: "خدمتونه",
        about: "زمونږ په اړه",
        contact: "اړیکه",
        language: "ژبه",
      },
      home: {
        title: "د گچکاري صداقت ویب پاڼې ته ښه راغلاست",
        description:
          "موږ د ۱۵ کالو څخه زیات تجربه په گچکاري او ساختمان کې درلودلی شو، د کیفیت خدمات او د پیرودونکي رضایت د خپل کار بنیټ کړی.",
        bannerSubtitle: "ځانګړتی او په هر دیوال کې کیفیت",
        companyIntroTitle: "د شرکت معرفي",
        companyIntroDescription:
          "د گچکاري صداقت شرکت د ۱۵ کالو څخه زیات بریالی تجربه په گچکاري او ساختمان کې درلودلی او د ساختمان په صنعت کې د اعتبار وړ شرکتونو څخه دی. موږ د مسلکي کارمندانو او کیفیت موادو په کارولو سره، ډیرې بریالي پروژې ترسره کړي دي.",
        experienceYears: "کال تجربه",
        experienceDesc: "د ساختمان په صنعت کې بریالی تجربه",
        successfulProjects: "بریاله پروژه",
        projectsDesc: "د پیرودونکي رضایت سره بشپړې شوې پروژې",
        specialistTeam: "مسلکي ډله",
        teamDesc: "مسلکي او تجربه لرونکي کارمندان",
        recentProjectsTitle: "تازه پروژې",
        recentProjectsDesc: "د زمونږ د ډلې لخوا اخستل شوی تازه کارونه",
        noProjectsFound: "هڅه پروژه ونه موندل شوه",
        viewAllProjects: "ټولې پروژې وګورئ",
        quickContactTitle: "له موږ سره چټکه اړیکه",
        quickContactDesc:
          "د وړیا مشورې او قیمت تخمین لپاره له موږ سره اړیکه ونیسئ",
        whatsapp: "واتساپ",
        phoneCall: "تلیفون",
        telegram: "ټلیګرام",
      },
      services: {
        title: "خدمتونه",
        description: "زمونږ تخصصي خدمات په گچکاري او ساختمان کې",
        traditionalPlastering: "دودیزه او عصري گچکاري",
        traditionalPlasteringDesc:
          "د دیوالونو، سقفونو او تزئیني گچکاري ډولونه ترټولو غوره موادو او نړیوالو میتودونو سره",
        decorativePlastering: "داخلي تزئینات او گچبري",
        decorativePlasteringDesc:
          "د ښکلو او عصري داخلي تزئیناتو لپاره ښکello گچبري",
        falseCeiling: "د سقف جعلي او نورپردازۍ ډیزاین",
        falseCeilingDesc: "د عصري سقفونو جعلي جوړول او تخلیق نورپردازۍ",
        wallRenovation: "د دیوالونو ترمیم او بیاجازه جوړول",
        wallRenovationDesc:
          "زړه دیوالونه او زیانمن شوي دیوالونه ترټولو غوره موادو سره بیا جوړول",
        painting: "د دیوالونو رنګول",
        paintingDesc: "د ډولو ډولو عالي کیفیت رنګونو سره دیوالونه رنګول",
        additionalServices: "اضافي ساختماني خدمات",
        additionalServicesDesc: "د کف، نما او نورو ډولو ساختماني خدمات",
        whyChooseUs: "ولې زمونږ خدمات غوره کوئ؟",
        quality: "برتر کیفیت",
        qualityDesc: "د عالي کیفیت موادو کارول او نړیوالو معیاراتو درناوی",
        precision: "په کې دقت",
        precisionDesc:
          "د فني نقشو او د پیرودونکي غوښتنو سره سم د پروژو دقت په اجرا کې",
        customerSatisfaction: "د پیرودونکي رضایت",
        customerSatisfactionDesc:
          "د پیرودونکي د بشپړ رضایت تعهد او د پروژې د تحویل وروسته ملاتړ",
        readyToStart: "موږ د ستاسو راتلونکي پروژې لپاره چمتو یو",
        readyToStartDesc:
          "د وړیا مشورې او قیمت تخمین لپاره اوس له موږ سره اړیکه ونیسئ",
        contactUs: "اړیکه",
      },
      about: {
        title: "زمونږ په اړه",
        description:
          "د گچکاري صداقت ډله د مسلکي پراختیا کونکو څخه جوړ ده چې په نوښتیزه ډیجیټل حل لارو تمرکز لري. موږ د ۱۰ کالو څخه زیات تجربه په گچکاري او ساختمان کې درلودلی او زمونږ د ارزښتمنو پیرودونکو لپاره غوره خدمات وړاندې کوو.",
        brilliantHistory: "درخشان تاریخچه",
        brilliantHistoryDesc:
          "د گچکاري صداقت شرکت په ۱۳۸۰ کال کې تاسیس شو او له هغه مهال راهیسې، د فني پوهنې او تجربه په بنسټ، د ساختمان په صنعت کې د پیلګرانو څخه په توګه پیژندل کیږي. موږ په مسکوني، سوداګریو او اداري پروژو کې فعالیت لرو او تل د پیرودونکي رضایت لومړیتوب درلود.",
        ourTeam: "زمونږ د مسلکي کارګر ډله",
        teamMember1Name: "علي رضایی",
        teamMember1Position: "مدیرعامل او بنیانګر",
        teamMember1Exp1: "۲۰ کاله تجربه",
        teamMember1Exp2: "د پروژې مدیریت",
        teamMember2Name: "زیبا حسینی",
        teamMember2Position: "مدیر فنی",
        teamMember2Exp1: "۱۵ کاله تجربه",
        teamMember2Exp2: "د کیفیت نظارت",
        teamMember3Name: "سارا احمدی",
        teamMember3Position: "مدیر مالی",
        teamMember3Exp1: "۱۰ کاله تجربه",
        teamMember3Exp2: "مالي او حسابداري",
        goalsAndValues: "موږي اهداف او ارزښتونه",
        quality: "کیفیت",
        qualityDesc:
          "د غوره موادو کارول او په ټولو پروژو کې د نړیوالو معیاراتو درناوی",
        precision: "دقت",
        precisionDesc:
          "د فني نقشو او د پیرودونکي غوښتنو سره سم د پروژو دقت په اجرا کې",
        customerSatisfaction: "د پیرودونکي رضایت",
        customerSatisfactionDesc:
          "د پیرودونکي د بشپړ رضایت تعهد او د پروژې د تحویل وروسته ملاتړ",
        teamInAction: "زمونږ ډله په کار کې",
      },
      footer: {
        address: "پته",
        addressDetail: "کابل سرک هشتاد متره میدان هوایی",
        phone: "تلیفون",
        phoneDetail: "93773545264+",
        email: "بریښنالیک",
        emailDetail: "mhnazary2020@yahoo.com",
        workingHours: "د کار ساعتونه",
        workingHoursDetail: "شنبه تا پنج شنبه: 08:00 - 05:00",
        copyright: "کاپي رایت",
        copyrightText: "© {year} گچکاري صداقت. ټول حقوق محفوظ دي.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        portfolio: "Portfolio",
        favorites: "Favorites",
        services: "Services",
        about: "About Us",
        contact: "Contact Us",
        language: "Language",
      },
      home: {
        title: "Welcome to Sadaqat Plastering Website",
        description:
          "With over 15 years of brilliant experience in plastering and construction, we have made quality service and customer satisfaction the cornerstone of our work.",
        bannerSubtitle: "Beauty and quality in every wall",
        companyIntroTitle: "Company Introduction",
        companyIntroDescription:
          "Sadaqat Plastering Company with over 15 years of brilliant experience in plastering and construction, is recognized as one of the most reputable companies in the construction industry. By using an experienced team and quality materials, we have successfully completed numerous projects.",
        experienceYears: "Years Experience",
        experienceDesc: "Brilliant experience in the construction industry",
        successfulProjects: "Successful Projects",
        projectsDesc: "Projects completed with customer satisfaction",
        specialistTeam: "Specialist Team",
        teamDesc: "Experienced and skilled staff",
        recentProjectsTitle: "Recent Projects",
        recentProjectsDesc: "Latest works executed by our team",
        noProjectsFound: "No projects found",
        viewAllProjects: "View All Projects",
        quickContactTitle: "Quick Contact Us",
        quickContactDesc:
          "Contact us for free consultation and cost estimation",
        whatsapp: "WhatsApp",
        phoneCall: "Phone Call",
        telegram: "Telegram",
      },
      services: {
        title: "Our Services",
        description: "Our specialized services in plastering and construction",
        traditionalPlastering: "Traditional and Modern Plastering",
        traditionalPlasteringDesc:
          "All types of wall, ceiling and decorative plastering with the best materials and modern methods",
        decorativePlastering: "Decorative Plastering and Interior Design",
        decorativePlasteringDesc:
          "Design and implementation of beautiful and modern decorative plastering for interior spaces",
        falseCeiling: "False Ceiling and Lighting Design",
        falseCeilingDesc:
          "Design and implementation of modern false ceilings with creative lighting",
        wallRenovation: "Wall Renovation and Restoration",
        wallRenovationDesc:
          "Renovation and restoration of old and damaged walls with the best materials",
        painting: "Wall Painting",
        paintingDesc:
          "All types of wall painting with high-quality and diverse colors",
        additionalServices: "Additional Construction Services",
        additionalServicesDesc:
          "Various construction services including flooring, facade, etc.",
        whyChooseUs: "Why Choose Our Services?",
        quality: "Superior Quality",
        qualityDesc:
          "Using high-quality raw materials and adhering to international standards",
        precision: "Precision in Execution",
        precisionDesc:
          "Attention to detail and precise execution of projects according to technical drawings",
        customerSatisfaction: "Customer Satisfaction",
        customerSatisfactionDesc:
          "Commitment to complete customer satisfaction and post-project support",
        readyToStart: "Ready to Start Your Next Project",
        readyToStartDesc:
          "Contact us now for free consultation and cost estimation",
        contactUs: "Contact Us",
      },
      about: {
        title: "About Us",
        description:
          "Sadaqat Plastering team consists of professional developers focused on providing innovative digital solutions. With over 10 years of experience in plastering and construction, we provide the best services to our dear customers.",
        brilliantHistory: "Brilliant History",
        brilliantHistoryDesc:
          "Sadaqat Plastering Company was established in 2001 and since then, relying on technical knowledge and experience, it is recognized as one of the pioneers in the construction industry. We have been active in residential, commercial and administrative projects and have always prioritized customer satisfaction.",
        ourTeam: "Our Expert Team",
        teamMember1Name: "Ali Rezaei",
        teamMember1Position: "CEO and Founder",
        teamMember1Exp1: "20 years experience",
        teamMember1Exp2: "Project Management",
        teamMember2Name: "Ziba Hosseini",
        teamMember2Position: "Technical Manager",
        teamMember2Exp1: "15 years experience",
        teamMember2Exp2: "Quality Supervision",
        teamMember3Name: "Sara Ahmadi",
        teamMember3Position: "Financial Manager",
        teamMember3Exp1: "10 years experience",
        teamMember3Exp2: "Finance and Accounting",
        goalsAndValues: "Our Goals and Values",
        quality: "Quality",
        qualityDesc:
          "Using the best raw materials and adhering to international standards in all projects",
        precision: "Precision",
        precisionDesc:
          "Attention to detail and precise execution of projects according to technical drawings and customer requests",
        customerSatisfaction: "Customer Satisfaction",
        customerSatisfactionDesc:
          "Commitment to complete customer satisfaction and post-project support",
        teamInAction: "Our Team in Action",
      },
      footer: {
        address: "Address",
        addressDetail: "Kabul Sarak-e-80 Meter, kamid karzai airport",
        phone: "Phone",
        phoneDetail: "+93773545264",
        email: "Email",
        emailDetail: "mhnazary2020@yahoo.com",
        workingHours: "Working Hours",
        workingHoursDetail: "Saturday to Thursday: 08:00 - 17:00",
        copyright: "Copyright",
        copyrightText: "© {year} Sadaqat Plastering. All rights reserved.",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    const lang = i18n.language;
    document.documentElement.dir =
      lang === "fa" || lang === "ps" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  });

export default i18n;
