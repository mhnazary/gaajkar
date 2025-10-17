const mongoose = require('mongoose');
const Contact = require('./models/Contact');
require('dotenv').config();

const createTestContacts = async () => {
  try {
    const testContacts = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I am interested in your services. Please contact me back.'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Great portfolio! I would like to discuss a potential project.'
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        message: 'Can you provide me with a quote for a website redesign?'
      }
    ];

    await Contact.insertMany(testContacts);
    console.log('Test contacts created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating test contacts:', error);
    process.exit(1);
  }
};

mongoose.connect(process.env.MONGO_URI)
  .then(createTestContacts)
  .catch(err => console.error('MongoDB connection error:', err));