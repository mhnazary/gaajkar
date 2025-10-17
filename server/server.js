const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// استفاده از مسیرهای مطلق برای جلو از خطا
const infoRoutes = require(path.resolve(__dirname, './routes/info'));
const contactRoutes = require(path.resolve(__dirname, './routes/contact'));
const authRoutes = require(path.resolve(__dirname, './routes/auth'));
const projectRoutes = require(path.resolve(__dirname, './routes/projects'));

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
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => res.send('Gaj Brothers API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));