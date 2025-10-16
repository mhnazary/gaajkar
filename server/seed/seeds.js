const mongoose = require('mongoose');
const Info = require('../models/Info');
require('dotenv').config();

// داده‌های اولیه
const seedData = [
  {
    title: 'به وبسایت گاج برادران خوش آمدید',
    description: 'ما یک تیم خلاق هستیم که در زمینه طراحی و توسعه وب فعالیت می‌کنیم.',
    section: 'home',
    language: 'fa'
  },
  {
    title: 'د گاج وروران ویب پاڼې ته ښه راغلاست',
    description: 'موږ یو تخلیقي ټول یو چې په ویب ډیزاین او پراختیا کې فعالیت کوو.',
    section: 'home',
    language: 'ps'
  },
  {
    title: 'Welcome to Gaj Brothers Website',
    description: 'We are a creative team working in web design and development.',
    section: 'home',
    language: 'en'
  },
  {
    title: 'درباره ما',
    description: 'تیم گاج برادران متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است.',
    section: 'about',
    language: 'fa'
  },
  {
    title: 'زمونږ په اړه',
    description: 'د گاج وروران ټول د مسلکي پراختیا کونکو څخه جوړ دی چې په نوښتیزه ډیجیټل حل لارو تمرکز لري.',
    section: 'about',
    language: 'ps'
  },
  {
    title: 'About Us',
    description: 'Gaj Brothers team consists of professional developers focused on providing innovative digital solutions.',
    section: 'about',
    language: 'en'
  },
  {
    title: 'نمونه کارها',
    description: 'در اینجا برخی از پروژه‌های برجسته ما را مشاهده می‌کنید.',
    section: 'portfolio',
    language: 'fa'
  },
  {
    title: 'کارونه',
    description: 'دلته تاسو به ځینې مهمې پروژې ولیدلای شي.',
    section: 'portfolio',
    language: 'ps'
  },
  {
    title: 'Portfolio',
    description: 'Here you can see some of our featured projects.',
    section: 'portfolio',
    language: 'en'
  },
  {
    title: 'تماس با ما',
    description: 'برای ارتباط با ما از طریق فرم زیر اقدام کنید.',
    section: 'contact',
    language: 'fa'
  },
  {
    title: 'اړیکه',
    description: 'د موږ سره د اړیکې لپاره لاندې فورمه ډک کړئ.',
    section: 'contact',
    language: 'ps'
  },
  {
    title: 'Contact Us',
    description: 'To get in touch with us, please fill out the form below.',
    section: 'contact',
    language: 'en'
  }
];

// اتصال به دیتابیس و افزودن داده‌ها
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Info.insertMany(seedData);
    console.log('Database seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
  });