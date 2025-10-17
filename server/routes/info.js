// routes/info.js

const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// دریافت اطلاعات بر اساس بخش و زبان
router.get('/:section/:language', async (req, res) => {
  try {
    const { section, language } = req.params;
    console.log(`Fetching info for section: ${section}, language: ${language}`); // برای دیباگ
    
    const info = await Info.findOne({ section, language });
    
    if (!info) {
      console.log(`Info not found for section: ${section}, language: ${language}`); // برای دیباگ
      return res.status(404).json({ message: 'Information not found' });
    }
    
    res.json(info);
  } catch (error) {
    console.error('Error fetching info:', error); // برای دیباگ
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
