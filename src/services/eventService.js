import { events, findEventByCode } from '../data/events.js';
import { getRegistrationSummary } from './registrationService.js';

function enrichEvent(event) {
    if (!event) {
        return null;
    }

    const { total } = getRegistrationSummary(event.code);
    const seatsRemaining = Math.max(event.capacity - total, 0);

    return {
        ...event,
        analytics: {
            capacity: event.capacity,
            totalRegistrations: total,
            seatsRemaining
        }
    };
}

export function getEvents() {
    return events.map((event) => ({
        code: event.code,
        name: event.name,
        tagline: event.tagline,
        startTimeline: event.timeline?.[0]?.date || null,
        location: event.location,
        theme: event.theme
    }));
}

export function getEventByCode(code) {
    const baseEvent = findEventByCode(code);
    return enrichEvent(baseEvent);
}
