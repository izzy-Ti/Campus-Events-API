import React, { useEffect, useState } from 'react';
import { fetchEvents, createEvent, deleteEvent } from './api/api';
import EventCard from './components/EventCard';
import AddEventForm from './components/AddEventForm';

function App() {
  const [events, setEvents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadEvents = async () => {
    setLoading(true);
    const data = await fetchEvents();
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleAddEvent = async (newEvent) => {
    await createEvent(newEvent);
    loadEvents();
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#e2e8f0] p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center bg-[#1a1a24] border border-white/5 shadow-2xl rounded-2xl p-6 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white mb-1">CAMPUS<span className="text-blue-500">PULSE</span></h1>
            <p className="text-gray-400 text-sm">Event Announcement Dashboard</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              {isFormOpen ? 'Close Form' : 'New Post'}
            </button>
          </div>
        </header>

        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search announcements..." 
              className="w-full bg-[#1a1a24] border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              onChange={(e) => {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                  setEvents(prev => prev.filter(ev => ev.title.toLowerCase().includes(query)));
                } else if (query.length === 0) {
                  loadEvents();
                }
              }}
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {isFormOpen && (
          <div className="mb-8 p-6 bg-[#1a1a24] border border-blue-500/30 rounded-2xl shadow-xl animate-in slide-in-from-top-4 duration-300">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
              Create Announcement
            </h2>
            <AddEventForm onAdd={handleAddEvent} onClose={() => setIsFormOpen(false)} />
          </div>
        )}

        <main className="space-y-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {events.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onDelete={async () => {
                    await deleteEvent(event.id);
                    loadEvents();
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#1a1a24] border border-dashed border-white/10 rounded-2xl">
              <p className="text-gray-500">No events found matching your criteria.</p>
            </div>
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-gray-400 border-t pt-4">
          &copy; 2025 Campus Event Board Project
        </footer>
      </div>
    </div>
  );
}

export default App;
