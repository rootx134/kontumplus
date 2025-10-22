const MAX_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 600;

const emailRegex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const phoneRegex = /^(\+?84|0)(\d{9}|\d{10})$/;

function sanitizeString(value) {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim();
}

function clampLength(value, max = MAX_FIELD_LENGTH) {
    if (value.length <= max) {
        return value;
    }

    return value.slice(0, max);
}

export function validateRegistrationPayload(payload = {}) {
    const errors = {};

    const fullName = clampLength(sanitizeString(payload.fullName));
    if (!fullName) {
        errors.fullName = 'Vui lòng nhập họ và tên.';
    }

    const email = clampLength(sanitizeString(payload.email));
    if (!email || !emailRegex.test(email)) {
        errors.email = 'Địa chỉ email không hợp lệ.';
    }

    const phone = clampLength(sanitizeString(payload.phone || ''));
    if (phone && !phoneRegex.test(phone)) {
        errors.phone = 'Số điện thoại không hợp lệ.';
    }

    const company = clampLength(sanitizeString(payload.company));
    if (!company) {
        errors.company = 'Vui lòng cho biết đơn vị/nhóm.';
    }

    const role = clampLength(sanitizeString(payload.role));
    if (!role) {
        errors.role = 'Vui lòng mô tả vai trò của bạn trong đội.';
    }

    const note = clampLength(sanitizeString(payload.note || ''), MAX_MESSAGE_LENGTH);

    let teamSize = Number.parseInt(payload.teamSize, 10);
    if (Number.isNaN(teamSize) || teamSize <= 0) {
        errors.teamSize = 'Vui lòng nhập số lượng thành viên hợp lệ.';
        teamSize = 0;
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        payload: {
            fullName,
            email,
            phone,
            company,
            role,
            note,
            teamSize
        }
    };
}
