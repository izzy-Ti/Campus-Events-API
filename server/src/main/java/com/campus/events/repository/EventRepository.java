package com.campus.events.repository;

import com.campus.events.model.Event;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class EventRepository {
    private static EventRepository instance;
    private final List<Event> events;

    private EventRepository() {
        events = new ArrayList<>();
        events.add(new Event(UUID.randomUUID().toString(), "Tech Symposium 2024", "Annual technology conference featuring AI and Web3.", "2024-10-15", "Main Hall", "Tech"));
        events.add(new Event(UUID.randomUUID().toString(), "Campus Music Fest", "Live performances by student bands and local artists.", "2024-11-02", "Outdoor Stage", "Entertainment"));
    }

    public static synchronized EventRepository getInstance() {
        if (instance == null) {
            instance = new EventRepository();
        }
        return instance;
    }

    public List<Event> getAllEvents() {
        return new ArrayList<>(events);
    }

    public synchronized void addEvent(Event event) {
        if (event.getId() == null || event.getId().isEmpty()) {
            event.setId(UUID.randomUUID().toString());
        }
        events.add(event);
    }

    public synchronized boolean deleteEvent(String id) {
        return events.removeIf(e -> e.getId().equals(id));
    }

    public Event findById(String id) {
        return events.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
