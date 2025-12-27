import React from 'react';

const EventCard = ({ event, onDelete }) => {
  return (
    <div className="group bg-[#1a1a24] border border-white/5 p-6 rounded-2xl shadow-lg hover:border-blue-500/30 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">
            {event.category || 'General'}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {event.title}
          </h3>
        </div>
        <button 
          onClick={onDelete}
          className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
          title="Delete Announcement"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {event.description}
      </p>

      <div className="flex items-center gap-6 pt-4 border-t border-white/5">
        <div className="flex items-center text-xs text-gray-500 space-x-1.5">
          <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{event.date}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500 space-x-1.5">
          <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span className="font-medium">{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
