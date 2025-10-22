import { Router } from 'express';

import { saveContactRequest } from '../services/contactService.js';
import { validateContactPayload } from '../validators/contactValidator.js';

const router = Router();

router.post('/', (req, res) => {
    const { isValid, errors, payload } = validateContactPayload(req.body);
    if (!isValid) {
        return res.status(422).json({ message: 'Vui lòng kiểm tra lại thông tin gửi tới ban tổ chức.', errors });
    }

    const entry = saveContactRequest(payload);
    return res.status(201).json({
        message: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 01 ngày làm việc.',
        inquiryId: entry.id,
        receivedAt: entry.receivedAt
    });
});

export default router;
