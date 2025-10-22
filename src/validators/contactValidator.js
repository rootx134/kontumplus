const MAX_MESSAGE_LENGTH = 1200;

const emailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

function sanitize(value) {
    return typeof value === 'string' ? value.trim() : '';
}

function clamp(value, max) {
    return value.length <= max ? value : value.slice(0, max);
}

export function validateContactPayload(payload = {}) {
    const errors = {};

    const fullName = clamp(sanitize(payload.fullName), 120);
    if (!fullName) {
        errors.fullName = 'Vui lòng cho biết tên của bạn.';
    }

    const email = clamp(sanitize(payload.email), 120);
    if (!email || !emailRegex.test(email)) {
        errors.email = 'Email không hợp lệ.';
    }

    const topic = clamp(sanitize(payload.topic || ''), 160);
    const message = clamp(sanitize(payload.message || ''), MAX_MESSAGE_LENGTH);
    if (!message) {
        errors.message = 'Vui lòng mô tả nội dung cần hỗ trợ.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        payload: {
            fullName,
            email,
            topic,
            message
        }
    };
}
