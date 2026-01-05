
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';
import { generateBeautyTips } from '../../services/geminiService';

const Contact = () => {
  const [concern, setConcern] = useState('');
  const [aiAdvice, setAiAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concern) return;
    setLoading(true);
    const advice = await generateBeautyTips(concern);
    setAiAdvice(advice || '');
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-stone-900 text-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-pink-400 uppercase tracking-[0.3em]">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold serif leading-tight">Start Your <span className="italic text-pink-400 font-light">Transformation</span></h3>
              <p className="text-stone-400 font-light text-lg">
                Ready for some pampering? Reach out to us for appointments or quick inquiries.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 transition-all duration-500">
                  <Phone className="w-6 h-6 text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-medium">{BUSINESS_INFO.phone}</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 transition-all duration-500">
                  <Mail className="w-6 h-6 text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-medium">{BUSINESS_INFO.email}</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-sm font-medium leading-relaxed max-w-xs">{BUSINESS_INFO.address}</div>
                </div>
              </div>
            </div>

            {/* AI Assistant Module */}
            <div className="bg-stone-800/50 border border-stone-800 p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-sm uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> 
                AI Beauty Consultant
              </div>
              <p className="text-stone-400 text-sm italic">Not sure what you need? Ask our AI for a quick recommendation based on your skin or hair type.</p>
              <form onSubmit={handleAskAi} className="flex gap-2">
                <input 
                  type="text" 
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  placeholder="e.g. Dry skin in winter..."
                  className="flex-grow bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-all"
                />
                <button 
                  disabled={loading}
                  className="bg-pink-600 px-6 rounded-xl hover:bg-pink-700 transition-all disabled:opacity-50"
                >
                  {loading ? 'Thinking...' : <Send className="w-4 h-4" />}
                </button>
              </form>
              {aiAdvice && (
                <div className="bg-stone-900/80 p-6 rounded-2xl border-l-4 border-pink-500 text-stone-300 text-sm leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                  {aiAdvice}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] text-stone-900 shadow-2xl relative">
            <h4 className="text-2xl font-bold mb-8 serif">Book Appointment</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-pink-200 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-pink-200 transition-all" placeholder="+91 ..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Service Interested In</label>
                <select className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-pink-200 transition-all">
                  <option>Select a category</option>
                  <option>Hair Services</option>
                  <option>Skin & Facial</option>
                  <option>Spa Treatment</option>
                  <option>Nails & Makeup</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-stone-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-pink-200 transition-all" placeholder="Special requests or timing preferences..."></textarea>
              </div>
              <button className="w-full py-5 bg-pink-600 text-white rounded-2xl font-bold hover:bg-pink-700 transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-pink-200">
                Send Request <MessageSquare className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-8 text-center text-stone-400 text-xs">
              We usually reply within 1 hour during business hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
