const mongoose = require('mongoose');
const Info = require('../models/Info');
const Project = require('../models/Project');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// داده‌های اولیه اطلاعات صفحات
const infoData = [
  // صفحه اصلی
  {
    title: 'به وبسایت گاج برادران خوش آمدید',
    description: 'ما یک تیم خلاق هستیم که در زمینه طراحی و توسعه وب فعالیت می‌کنیم. با بیش از 15 سال سابقه درخشان در زمینه گچ کاری و ساختمان، بهترین خدمات را به مشتریان عزیز ارائه می‌دهیم.',
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
    description: 'We are a creative team working in web design and development. With over 15 years of experience in plastering and construction, we provide the best services to our dear customers.',
    section: 'home',
    language: 'en'
  },
  
  // صفحه درباره ما
  {
    title: 'درباره ما',
    description: 'تیم گاج برادران متشکل از توسعه‌دهندگان حرفه‌ای با تمرکز بر ارائه راه‌حل‌های دیجیتال نوآورانه است. ما با بیش از 15 سال تجربه در زمینه گچ کاری و ساختمان، بهترین خدمات را به مشتریان عزیز ارائه می‌دهیم. تیم ما در پروژه‌های مسکونی، تجاری و اداری فعالیت داشته و همواره رضایت مشتری را در اولویت قرار داده‌ایم.',
    section: 'about',
    language: 'fa'
  },
  {
    title: 'زمونږ په اړه',
    description: 'د گاج وروران ټول د مسلکي پراختیا کونکو څخه جوڭ دی چې په نوښتیزه ډیجیټل حل لارو تمرکز لري.',
    section: 'about',
    language: 'ps'
  },
  {
    title: 'About Us',
    description: 'Gaj Brothers team consists of professional developers focused on providing innovative digital solutions. With over 15 years of experience in plastering and construction, we provide the best services to our dear customers. Our team works in residential, commercial and office projects, always prioritizing customer satisfaction.',
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
    description: 'برای هرگونه سوال یا درخواست، با ما تماس بگیرید. شماره تماس: 021-12345678، ایمیل: info@gajbrothers.com',
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
    description: 'For any questions or requests, please contact us. Phone: 021-12345678, Email: info@gajbrothers.com',
    section: 'contact',
    language: 'en'
  }
];

// داده‌های اولیه پروژه‌ها
const projectData = [
  {
    title: 'پروژه مسکونی آپارتمان',
    description: 'پروژه گچ کاری و نقاشی کامل یک آپارتمان مسکونی با طراحی مدرن',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'افزار',
    featured: true
  },
  {
    title: 'هتل پارس',
    description: 'گچ‌بری و تزئینات داخلی هتل پارس با طرح‌های سنتی',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'راویز',
    featured: true
  },
  {
    title: 'مرکز تجاری کوروش',
    description: 'سقف کاذب و نورپردازی مرکز تجاری کوروش',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'گل',
    featured: false
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with real-time commenting system',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'افزار',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'راویز',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with location-based forecasts',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'گل',
    featured: false
  },
  {
    title: 'Restaurant Management System',
    description: 'Complete restaurant management system with order tracking',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'افزار',
    featured: true
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search and filtering',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'راویز',
    featured: false
  },
  {
    title: 'Video Streaming App',
    description: 'Video streaming platform with user authentication and recommendations',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'گل',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'افزار',
    featured: false
  },
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce website with payment integration',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'راویز',
    featured: true
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking application with workout plans',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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