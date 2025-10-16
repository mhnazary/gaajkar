const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// دریافت اطلاعات بر اساس بخش و زبان
router.get('/:section/:language', async (req, res) => {
  try {
    const { section, language } = req.params;
    const info = await Info.findOne({ section, language });
    
    if (!info) {
      return res.status(404).json({ message: 'Information not found' });
    }
    
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;