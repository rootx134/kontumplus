import { Router } from 'express';

import { getEventByCode, getEvents } from '../services/eventService.js';
import { registerAttendee, getRegistrationSummary } from '../services/registrationService.js';
import { validateRegistrationPayload } from '../validators/registrationValidator.js';

const router = Router();

router.get('/', (req, res) => {
    const eventList = getEvents();
    res.json({ events: eventList });
});

router.get('/:code', (req, res) => {
    const event = getEventByCode(req.params.code);
    if (!event) {
        return res.status(404).json({ message: 'Chúng tôi không tìm thấy sự kiện bạn yêu cầu.' });
    }

    return res.json(event);
});

router.post('/:code/register', (req, res) => {
    const event = getEventByCode(req.params.code);
    if (!event) {
        return res.status(404).json({ message: 'Sự kiện không tồn tại.' });
    }

    const { isValid, errors, payload } = validateRegistrationPayload(req.body);
    if (!isValid) {
        return res.status(422).json({ message: 'Thông tin đăng ký chưa hợp lệ.', errors });
    }

    registerAttendee(event.code, payload);
    const summary = getRegistrationSummary(event.code);

    return res.status(201).json({
        message: 'Đăng ký của bạn đã được ghi nhận. Ban tổ chức sẽ liên hệ trong 24 giờ.',
        analytics: {
            capacity: event.analytics.capacity,
            totalRegistrations: summary.total,
            seatsRemaining: Math.max(event.analytics.capacity - summary.total, 0)
        }
    });
});

export default router;
