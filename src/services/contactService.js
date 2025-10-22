import { createId } from '../utils/id.js';

const contactMessages = [];

export function saveContactRequest(payload) {
    const entry = {
        id: createId('contact'),
        ...payload,
        receivedAt: new Date().toISOString()
    };

    contactMessages.push(entry);
    return entry;
}

export function getContactMessages() {
    return contactMessages;
}
