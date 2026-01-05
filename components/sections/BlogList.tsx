
import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  blogs: BlogPost[];
  preview?: boolean;
}

const BlogList: React.FC<Props> = ({ blogs, preview = false }) => {
  return (
    <section className={`py-24 px-6 ${preview ? 'bg-stone-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-pink-500 uppercase tracking-[0.3em]">Insights & News</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900 serif">Beauty Secrets</h3>
          </div>
          {preview && (
            <Link to="/blog" className="text-stone-900 font-bold border-b-2 border-pink-200 hover:border-pink-600 pb-1 transition-all flex items-center gap-2 group">
              All Articles <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <Link to="/blog" key={blog.id} className="group block cursor-pointer outline-none">
              <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <div className="flex gap-4 text-white/80 text-xs font-medium uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors leading-snug">
                    {blog.title}
                  </h4>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed font-light px-2 mb-4 line-clamp-2">
                {blog.content}
              </p>
              <div className="px-2">
                <span className="text-pink-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-pink-700">
                  Read More <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
