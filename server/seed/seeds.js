const mongoose = require('mongoose');
const Info = require('../models/Info');
const Project = require('../models/Project');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// داده‌های اولیه اطلاعات صفحات - به‌روز شده با نام جدید شرکت
const infoData = [
  // صفحه اصلی
  {
    title: 'به وبسایت گچکاری صداقت خوش آمدید',
    description: 'ما با بیش از 15 سال سابقه درخشان در زمینه گچ کاری و ساختمان، ارائه خدمات با کیفیت و رضایت مشتری را سرلوحه کار خود قرار داده‌ایم.',
    section: 'home',
    language: 'fa'
  },
  {
    title: 'د گچکاري صداقت ویب پاڼې ته ښه راغلاست',
    description: 'موږ د ۱۵ کالو څخه زیات تجربه په گچکاري او ساختمان کې درلودلی شو، د کیفیت خدمات او د پیرودونکي رضایت د خپل کار بنیټ کړی.',
    section: 'home',
    language: 'ps'
  },
  {
    title: 'Welcome to Sadaqat Plastering Website',
    description: 'With over 15 years of brilliant experience in plastering and construction, we have made quality service and customer satisfaction the cornerstone of our work.',
    section: 'home',
    language: 'en'
  },
  
  // صفحه درباره ما
  {
    title: 'درباره ما',
    description: 'تیم گچکاری صداقت متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است. ما با بیش از 15 سال تجربه در زمینه گچ کاری و ساختمان، بهترین خدمات را به مشتریان عزیز ارائه می‌دهیم.',
    section: 'about',
    language: 'fa'
  },
  {
    title: 'زمونږ په اړه',
    description: 'د گچکاري صداقت ډله د مسلکي پراختیا کونکو څخه جوڭ ده چې په نوښتیزه ډیجیټل حل لارو تمرکز لري.',
    section: 'about',
    language: 'ps'
  },
  {
    title: 'About Us',
    description: 'Sadaqat Plastering team consists of professional developers focused on providing innovative digital solutions. With over 15 years of experience in plastering and construction, we provide the best services to our dear customers.',
    section: 'about',
    language: 'en'
  },
  
  // صفحه نمونه کارها
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
  
  // صفحه خدمات
  {
    title: 'خدمات ما',
    description: 'خدمات تخصصی ما در زمینه گچ کاری و ساختمان شامل گچ‌کاری سنتی و مدرن، گچ‌بری و تزئینات داخلی، سقف کاذب و طراحی نورپردازی، ترمیم و بازسازی دیوارها و رنگ و نقاشی دیواری',
    section: 'services',
    language: 'fa'
  },
  {
    title: 'خدمتونه',
    description: 'تخصصي خدمات موږ په گچ کاری او ساختمان کې شامل سنتی او عصري گچ کاری، داخلي تزئینات، کاذب سقف او نورپردازی، دیوارون ترمیم او بیاځول، او دیواري رنګ کاری',
    section: 'services',
    language: 'ps'
  },
  {
    title: 'Our Services',
    description: 'Our specialized services in plastering and construction including traditional and modern plastering, interior decorations, false ceilings and lighting design, wall repairs and renovation, and wall painting',
    section: 'services',
    language: 'en'
  },
  
  // صفحه تماس با ما
  {
    title: 'تماس با ما',
    description: 'برای هرگونه سوال یا درخواست، با ما تماس بگیرید. شماره تماس: 0773545264، ایمیل: mhnazary2020@yahoo.com',
    section: 'contact',
    language: 'fa'
  },
  {
    title: 'اړیکه',
    description: 'د هر ډوله پوښتنه یا غوښتنه، موږ سره اړیکه.',
    section: 'contact',
    language: 'ps'
  },
  {
    title: 'Contact Us',
    description: 'For any questions or requests, please contact us. Phone: 0773545264, Email: mhnazary2020@yahoo.com',
    section: 'contact',
    language: 'en'
  }
];

// داده‌های اولیه پروژه‌ها - به‌روز شده با تصاویر مرتبط
const projectData = [
  {
    title: 'پروژه مسکونی آپارتمان',
    description: 'پروژه گچ کاری و نقاشی کامل یک آپارتمان مسکونی با طراحی مدرن',
    image: 'https://i.postimg.cc/vTpJXVYN/2018-10.jpg',
    category: 'افزار',
    featured: true
  },
  {
    title: 'هتل پارس',
    description: 'گچ‌بری و تزئینات داخلی هتل پارس با طرح‌های سنتی',
    image: 'https://i.postimg.cc/h49NqfGR/FB-IMG-1711471141142.jpg',
    category: 'راویز',
    featured: true
  },
  {
    title: 'مرکز تجاری کوروش',
    description: 'سقف کاذب و نورپردازی مرکز تجاری کوروش',
    image: 'https://i.postimg.cc/90JpQ3SM/1756222964884.jpg',
    category: 'گل',
    featured: false
  },
  {
    title: 'پروژه اداری',
    description: 'گچ کاری و نقاشی دفتر اداری با طراحی مدرن',
    image: 'https://i.postimg.cc/Y2383g9G/1756226837771.jpg',
    category: 'افزار',
    featured: true
  },
  {
    title: 'ویلای لوکس',
    description: 'گچ‌بری و تزئینات داخلی ویلای لوکس',
    image: 'https://i.postimg.cc/QNbSb5Mn/images-22-jpeg.jpg',
    category: 'راویز',
    featured: true
  },
  {
    title: 'مجتمع تجاری',
    description: 'سقف کاذب و نورپردازی مجتمع تجاری',
    image: 'https://i.postimg.cc/Pf4K4Zxj/photo-1024x768.jpg',
    category: 'گل',
    featured: false
  },
  {
    title: 'بازسازی ساختمان',
    description: 'ترمیم و بازسازی کامل ساختمان قدیمی',
    image: 'https://i.postimg.cc/Zq9f4kgp/1753805974515.jpg',
    category: 'افزار',
    featured: true
  },
  {
    title: 'نمای ساختمان',
    description: 'طراحی و اجرای نمای ساختمان با مصالح مدرن',
    image: 'https://i.postimg.cc/65Q2qCLX/1747979093198.jpg',
    category: 'راویز',
    featured: false
  },
  {
    title: 'ساختمان مسکونی',
    description: 'گچ کاری و نقاشی کامل ساختمان مسکونی',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    category: 'گل',
    featured: true
  },
  {
    title: 'پروژه تجاری',
    description: 'گچ کاری و نقاشی پروژه تجاری بزرگ',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    category: 'افزار',
    featured: false
  },
  {
    title: 'مرکز خرید',
    description: 'سقف کاذب و نورپردازی مرکز خرید',
    image: 'https://i.postimg.cc/YSP8Dprq/FB-IMG-1711470810343.jpg',
    category: 'راویز',
    featured: true
  },
  {
    title: 'مدرسه',
    description: 'گچ کاری و نقاشی مدرسه با طراحی مناسب',
    image: 'https://i.postimg.cc/90JpQ3SM/1756222964884.jpg',
    category: 'گل',
    featured: false
  }
];

// ایجاد ادمین اولیه
const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Admin({
      username: 'admin',
      password: hashedPassword
    });
    
    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

// اتصال به دیتابیس و افزودن داده‌ها
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      // ایجاد ادمین
      await createAdmin();
      
      // پاک کردن داده‌های قبلی (اختیاری)
      // await Info.deleteMany({});
      // await Project.deleteMany({});
      
      // افزودن داده‌های جدید
      await Info.insertMany(infoData);
      await Project.insertMany(projectData);
      
      console.log('Database seeded successfully');
      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });