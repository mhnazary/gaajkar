const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const auth = require('../middleware/auth');

// ارسال فرم تماس
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = body;

    // ذخیره در دیتابیس
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // ارسال ایمیل
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// دریافت تمام پیام‌های تماس (فقط برای ادمین)
router.get('/', auth, async (req, res) => {
  console.log('GET /api/contact route accessed');
  console.log('Admin info:', req.admin);
  
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log('Contacts found:', contacts.length);
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;