import { createId } from '../utils/id.js';

const registrationsStore = new Map();

export function registerAttendee(eventCode, payload) {
    const entry = {
        id: createId('reg'),
        ...payload,
        submittedAt: new Date().toISOString()
    };

    if (!registrationsStore.has(eventCode)) {
        registrationsStore.set(eventCode, []);
    }

    registrationsStore.get(eventCode).push(entry);
    return entry;
}

export function getRegistrations(eventCode) {
    return registrationsStore.get(eventCode) || [];
}

export function getRegistrationSummary(eventCode) {
    const entries = getRegistrations(eventCode);

    return {
        total: entries.length
    };
}
