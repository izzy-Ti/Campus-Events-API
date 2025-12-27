import React, { useState } from 'react';

const AddEventForm = ({ onAdd, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: 'General'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  const inputStyle = "w-full bg-[#252531] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600";
  const labelStyle = "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelStyle}>Event Title</label>
        <input
          required
          type="text"
          placeholder="e.g. Annual Sports Day"
          className={inputStyle}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>Date</label>
          <input
            required
            type="date"
            className={inputStyle}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div>
          <label className={labelStyle}>Category</label>
          <select
            className={`${inputStyle} appearance-none`}
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="General">General Announcement</option>
            <option value="Tech">Tech & Innovation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelStyle}>Location</label>
        <input
          required
          type="text"
          placeholder="e.g. West Campus Arena"
          className={inputStyle}
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
      <div>
        <label className={labelStyle}>Description</label>
        <textarea
          required
          rows="3"
          placeholder="Briefly describe the event..."
          className={`${inputStyle} resize-none`}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div className="flex gap-3 pt-2">
        <button 
          type="submit" 
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
        >
          Post Announcement
        </button>
        <button 
          type="button" 
          onClick={onClose}
          className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 font-bold transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
