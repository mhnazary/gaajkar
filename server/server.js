const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const infoRoutes = require('./routes/info');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth'); // اضافه شده
const projectRoutes = require('./routes/projects');

dotenv.config();
const app = express();

// اتصال به MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// مسیرهای API
app.use('/api/info', infoRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes); // اضافه شده
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => res.send('Gaj Brothers API Running'));
// اضافه کردن این مسیر برای تست

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));