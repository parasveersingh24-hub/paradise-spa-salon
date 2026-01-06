
import React, { useState } from 'react';
import { Service, BlogPost, ServiceCategory } from '../../types';
import { Plus, Trash2, Edit, Save, X, LayoutDashboard, Scissors, BookOpen, Settings as SettingsIcon } from 'lucide-react';

interface Props {
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  blogs: BlogPost[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

const AdminDashboard: React.FC<Props> = ({ services, setServices, blogs, setBlogs }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<'services' | 'blogs'>('services');
  const [showAddService, setShowAddService] = useState(false);
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newService, setNewService] = useState<Partial<Service>>({
    name: '',
    category: ServiceCategory.HAIR,
    description: '',
    duration: '',
    price: '',
    imageUrl: ''
  });
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    author: '',
    imageUrl: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === (import.meta.env.VITE_ADMIN_PASSWORD || 'admin123')) setIsLoggedIn(true);
    else alert('Incorrect password');
  };

  const deleteService = (id: string) => {
    if (confirm('Delete this service?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const deleteBlog = (id: string) => {
    if (confirm('Delete this blog post?')) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  const startEditService = (service: Service) => {
    setNewService(service);
    setEditingId(service.id);
    setShowAddService(true);
  };

  const startEditBlog = (blog: BlogPost) => {
    setNewBlog(blog);
    setEditingId(blog.id);
    setShowAddBlog(true);
  };

  const resetServiceForm = () => {
    setNewService({
      name: '',
      category: ServiceCategory.HAIR,
      description: '',
      duration: '',
      price: '',
      imageUrl: ''
    });
    setEditingId(null);
    setShowAddService(false);
  };

  const resetBlogForm = () => {
    setNewBlog({
      title: '',
      content: '',
      author: '',
      imageUrl: ''
    });
    setEditingId(null);
    setShowAddBlog(false);
  };

  const addService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.name || !newService.price || !newService.description) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      setServices(services.map(s => s.id === editingId ? { ...s, ...newService } as Service : s));
    } else {
      const service: Service = {
        id: Date.now().toString(),
        name: newService.name!,
        category: newService.category || ServiceCategory.HAIR,
        description: newService.description!,
        duration: newService.duration || '60 mins',
        price: newService.price!,
        imageUrl: newService.imageUrl || 'https://via.placeholder.com/800x600/f3f4f6/9ca3af?text=Service+Image'
      };
      setServices([...services, service]);
    }

    resetServiceForm();
  };

  const addBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content || !newBlog.author) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      setBlogs(blogs.map(b => b.id === editingId ? { ...b, ...newBlog } as BlogPost : b));
    } else {
      const blog: BlogPost = {
        id: Date.now().toString(),
        title: newBlog.title!,
        content: newBlog.content!,
        author: newBlog.author!,
        date: new Date().toISOString().split('T')[0],
        imageUrl: newBlog.imageUrl || 'https://via.placeholder.com/800x600/f3f4f6/9ca3af?text=Blog+Image'
      };
      setBlogs([...blogs, blog]);
    }

    resetBlogForm();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl border border-pink-50 text-center">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <SettingsIcon className="w-10 h-10 text-pink-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2 serif">Staff Login</h2>
          <p className="text-stone-400 text-sm mb-8">Secure access to Paradise Admin Panel</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Admin Password"
              className="w-full bg-stone-50 border-2 border-stone-100 rounded-2xl px-5 py-4 text-center focus:border-pink-500 focus:outline-none transition-all"
            />
            <button className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-pink-600 transition-all">
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-stone-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-sm font-bold text-pink-600 uppercase tracking-widest">Management Console</h1>
            <h2 className="text-4xl font-bold text-stone-900 serif">Dashboard Overview</h2>
          </div>
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-stone-200">
            <button
              onClick={() => setTab('services')}
              className={`px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${tab === 'services' ? 'bg-pink-600 text-white shadow-lg shadow-pink-100' : 'text-stone-500 hover:bg-stone-50'}`}
            >
              <Scissors className="w-4 h-4" /> Services
            </button>
            <button
              onClick={() => setTab('blogs')}
              className={`px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${tab === 'blogs' ? 'bg-pink-600 text-white shadow-lg shadow-pink-100' : 'text-stone-500 hover:bg-stone-50'}`}
            >
              <BookOpen className="w-4 h-4" /> Blog Posts
            </button>
          </div>
        </div>

        {tab === 'services' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-stone-800">Manage Services</h3>
              <button
                onClick={() => {
                  resetServiceForm();
                  setShowAddService(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-sm font-bold hover:bg-pink-600 transition-all"
              >
                <Plus className="w-4 h-4" /> Add New
              </button>
            </div>
            <div className="bg-white rounded-[2rem] border border-stone-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-100">
                  <tr>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Service</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Category</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Price</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {services.map(service => (
                    <tr key={service.id} className="hover:bg-pink-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <img src={service.imageUrl} className="w-12 h-12 rounded-xl object-cover" />
                          <span className="font-bold text-stone-800">{service.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-stone-100 rounded-full text-[10px] font-bold text-stone-500 uppercase">
                          {service.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 font-medium text-pink-600">{service.price}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => startEditService(service)} className="p-2 text-stone-400 hover:text-pink-600 transition-colors"><Edit className="w-5 h-5" /></button>
                          <button onClick={() => deleteService(service.id)} className="p-2 text-stone-400 hover:text-red-600 transition-colors"><Trash2 className="w-5 h-5" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showAddService && (
              <div className="bg-white rounded-[2rem] border border-stone-200 p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-stone-800">{editingId ? 'Edit Service' : 'Add New Service'}</h4>
                  <button
                    onClick={resetServiceForm}
                    className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={addService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Service Name *</label>
                    <input
                      type="text"
                      value={newService.name || ''}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                      placeholder="e.g., Premium Haircut"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Category *</label>
                    <select
                      value={newService.category || ServiceCategory.HAIR}
                      onChange={(e) => setNewService({ ...newService, category: e.target.value as ServiceCategory })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                    >
                      {Object.values(ServiceCategory).map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Price *</label>
                    <input
                      type="text"
                      value={newService.price || ''}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                      placeholder="e.g., ₹800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Duration</label>
                    <input
                      type="text"
                      value={newService.duration || ''}
                      onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                      placeholder="e.g., 60 mins"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-stone-600 mb-2">Description *</label>
                    <textarea
                      value={newService.description || ''}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none h-24"
                      placeholder="Describe the service..."
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-stone-600 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={newService.imageUrl || ''}
                      onChange={(e) => setNewService({ ...newService, imageUrl: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="md:col-span-2 flex gap-4 justify-end">
                    <button
                      type="button"
                      onClick={resetServiceForm}
                      className="px-6 py-3 border border-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-50 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-pink-600 transition-all flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> {editingId ? 'Update Service' : 'Add Service'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-stone-800">Manage Blog Content</h3>
              <button
                onClick={() => {
                  resetBlogForm();
                  setShowAddBlog(true);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-sm font-bold hover:bg-pink-600 transition-all"
              >
                <Plus className="w-4 h-4" /> Create Post
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map(blog => (
                <div key={blog.id} className="bg-white p-6 rounded-3xl border border-stone-200 flex gap-6 items-center shadow-sm">
                  <img src={blog.imageUrl} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-stone-800 mb-1 leading-tight">{blog.title}</h4>
                    <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">{blog.date}</p>
                    <div className="flex gap-4 mt-4">
                      <button onClick={() => startEditBlog(blog)} className="text-xs font-bold text-pink-600 hover:underline">Edit Content</button>
                      <button onClick={() => deleteBlog(blog.id)} className="text-xs font-bold text-stone-400 hover:text-red-500">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {showAddBlog && (
              <div className="bg-white rounded-[2rem] border border-stone-200 p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-stone-800">{editingId ? 'Edit Blog Post' : 'Create New Blog Post'}</h4>
                  <button
                    onClick={resetBlogForm}
                    className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={addBlog} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-600 mb-2">Post Title *</label>
                      <input
                        type="text"
                        value={newBlog.title || ''}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                        placeholder="e.g., Summer Beauty Tips"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-600 mb-2">Author *</label>
                      <input
                        type="text"
                        value={newBlog.author || ''}
                        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                        placeholder="e.g., Expert Stylist"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Content *</label>
                    <textarea
                      value={newBlog.content || ''}
                      onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none h-32"
                      placeholder="Write your blog post content..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={newBlog.imageUrl || ''}
                      onChange={(e) => setNewBlog({ ...newBlog, imageUrl: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:border-pink-500 focus:outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="flex gap-4 justify-end">
                    <button
                      type="button"
                      onClick={resetBlogForm}
                      className="px-6 py-3 border border-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-50 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-pink-600 transition-all flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> {editingId ? 'Update Post' : 'Publish Post'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
