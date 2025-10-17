import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Sending login request:', { 
        username: formData.username, 
        password: '***' 
      });
      
      const response = await api.post('/auth/login', formData);
      
      console.log('Login successful');
      
      localStorage.setItem('adminToken', response.data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed';
      
      if (error.response) {
        // سرور پاسخ داده با وضعیت خارج از محدوده 2xx
        console.error('Error response:', error.response);
        errorMessage = error.response.data.message || 'Invalid credentials';
      } else if (error.request) {
        // درخواست ارسال شده اما پاسخی دریافت نشده
        errorMessage = 'No response from server';
      } else {
        // در تنظیم درخواست مشکلی پیش آمده
        errorMessage = 'Error: ' + error.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin123"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
          <p className="font-medium mb-2">Default credentials:</p>
          <p>Username: <span className="font-mono">admin</span></p>
          <p>Password: <span className="font-mono">admin123</span></p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;