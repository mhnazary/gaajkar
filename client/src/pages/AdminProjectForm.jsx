import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';

function AdminProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: 'افزار', // مقدار پیش‌فرض
    featured: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      const fetchProject = async () => {
        try {
          const token = localStorage.getItem('adminToken');
          const response = await api.get(`/projects/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          const project = response.data;
          setFormData({
            title: project.title,
            description: project.description,
            image: project.image,
            category: project.category,
            featured: project.featured
          });
        } catch (error) {
          console.error('Error fetching project:', error);
          navigate('/admin/dashboard');
        }
      };

      fetchProject();
    }
  }, [isEdit, id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('adminToken');
      const data = {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        category: formData.category,
        featured: formData.featured
      };
      
      if (isEdit) {
        await api.put(`/projects/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await api.post('/projects', data, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error saving project:', error);
      setError('Error saving project: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            {isEdit ? 'Edit Project' : 'Add New Project'}
          </h1>
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </header>
      
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white shadow rounded-lg p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
                required
              />
              <p className="mt-1 text-sm text-gray-500">Enter a direct image URL from Unsplash or other image hosting service</p>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="افزار">افزار</option>
                <option value="راویز">راویز</option>
                <option value="گل">گل</option>
                <option value="سایر">سایر</option>
              </select>
            </div>
            
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm font-medium text-gray-700">
                Feature this project on the homepage
              </label>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Saving...' : (isEdit ? 'Update Project' : 'Create Project')}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminProjectForm;