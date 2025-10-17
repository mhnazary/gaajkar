const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// دریافت تمام پروژه‌ها (عمومی - بدون نیاز به احراز هویت)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// دریافت پروژه‌های ویژه (عمومی - بدون نیاز به احراز هویت)
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// دریافت یک پروژه (عمومی - بدون نیاز به احراز هویت)
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ایجاد پروژه جدید (فقط ادمین)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, image, technologies, category, githubUrl, liveUrl, featured } = req.body;
    
    const project = new Project({
      title,
      description,
      image,
      technologies,
      category,
      githubUrl,
      liveUrl,
      featured
    });
    
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// به‌روزرسانی پروژه (فقط ادمین)
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, image, technologies, category, githubUrl, liveUrl, featured } = req.body;
    
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, image, technologies, category, githubUrl, liveUrl, featured },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// حذف پروژه (فقط ادمین)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;