const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const resetPassword = async () => {
  try {
    // پیدا کردن ادمین
    const admin = await Admin.findOne({ username: 'admin' });
    if (!admin) {
      console.log('Admin not found');
      return;
    }
    
    // هش کردن رمز عبور جدید
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // به‌روزرسانی مستقیم در دیتابیس (بدون فعال شدن pre-save hook)
    await Admin.updateOne(
      { _id: admin._id },
      { password: hashedPassword }
    );
    
    console.log('Admin password reset successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error resetting password:', error);
    process.exit(1);
  }
};

mongoose.connect(process.env.MONGO_URI)
  .then(resetPassword)
  .catch(err => console.error('MongoDB connection error:', err));