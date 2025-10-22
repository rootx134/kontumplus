const state = {
    eventCode: new URLSearchParams(window.location.search).get('code') || 'TENTEST',
    event: null
};

const selectors = {
    eyebrow: document.getElementById('event-eyebrow'),
    code: document.getElementById('event-code'),
    title: document.getElementById('event-title'),
    highlight: document.getElementById('event-highlight'),
    summary: document.getElementById('event-summary'),
    primaryCta: document.getElementById('primary-cta'),
    secondaryCta: document.getElementById('secondary-cta'),
    heroMeta: document.getElementById('hero-meta'),
    heroHighlights: document.getElementById('hero-highlights'),
    heroFootnote: document.getElementById('hero-footnote'),
    description: document.getElementById('event-description'),
    highlightGrid: document.getElementById('highlight-grid'),
    timeline: document.getElementById('timeline-items'),
    schedule: document.getElementById('schedule-days'),
    speakers: document.getElementById('speakers-grid'),
    partners: document.getElementById('partners-list'),
    faqs: document.getElementById('faq-items'),
    registrationForm: document.getElementById('registration-form'),
    registrationFeedback: document.getElementById('registration-feedback'),
    contactForm: document.getElementById('contact-form'),
    contactFeedback: document.getElementById('contact-feedback'),
    contactDetails: document.getElementById('contact-details'),
    otherEvents: document.getElementById('other-events-grid'),
    footerAnalytics: document.getElementById('footer-analytics')
};

function applyTheme(theme = {}) {
    const root = document.documentElement;
    if (theme.primary) {
        root.style.setProperty('--brand-primary', theme.primary);
    }
    if (theme.secondary) {
        root.style.setProperty('--brand-secondary', theme.secondary);
    }
    if (theme.accent) {
        root.style.setProperty('--brand-accent', theme.accent);
    }
}

function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.className) {
        element.className = options.className;
    }
    if (options.text) {
        element.textContent = options.text;
    }
    if (options.html) {
        element.innerHTML = options.html;
    }
    return element;
}

function formatDate(dateString, options = {}) {
    if (!dateString) {
        return '';
    }

    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        ...options
    }).format(date);
}

function formatDay(dateString) {
    if (!dateString) {
        return '';
    }
    return new Intl.DateTimeFormat('vi-VN', { weekday: 'long' }).format(new Date(dateString));
}

function renderHero(event) {
    selectors.eyebrow.textContent = event.hero?.eyebrow || 'KontumPlus Experience';
    selectors.code.textContent = `#${event.code}`;
    selectors.title.textContent = event.hero?.title || event.name;
    selectors.highlight.textContent = event.hero?.highlight || event.tagline;
    selectors.summary.textContent = event.hero?.summary || event.description;

    selectors.primaryCta.textContent = event.hero?.primaryActionLabel || 'Đăng ký ngay';
    selectors.primaryCta.href = '#registration';

    if (event.hero?.secondaryActionLabel && event.hero?.secondaryActionUrl) {
        selectors.secondaryCta.textContent = event.hero.secondaryActionLabel;
        selectors.secondaryCta.href = event.hero.secondaryActionUrl;
        selectors.secondaryCta.style.display = 'inline-flex';
    } else {
        selectors.secondaryCta.style.display = 'none';
    }

    selectors.heroMeta.innerHTML = '';
    const metaItems = [
        { label: 'Địa điểm', value: event.location?.venue || 'Cập nhật sau' },
        { label: 'Thành phố', value: event.location?.city || 'Kon Tum' },
        {
            label: 'Số suất',
            value: event.analytics?.capacity ? `${event.analytics.capacity} suất` : 'Không giới hạn'
        },
        {
            label: 'Còn trống',
            value: typeof event.analytics?.seatsRemaining === 'number'
                ? `${event.analytics.seatsRemaining} suất`
                : 'Đang cập nhật'
        }
    ];

    metaItems.forEach((item) => {
        const dt = createElement('dt', { text: item.label });
        const dd = createElement('dd', { text: item.value });
        selectors.heroMeta.append(dt, dd);
    });

    selectors.heroHighlights.innerHTML = '';
    (event.highlights || []).slice(0, 3).forEach((highlight) => {
        selectors.heroHighlights.append(createElement('li', { text: highlight.title }));
    });

    if (event.timeline?.length) {
        const first = event.timeline[0];
        const last = event.timeline[event.timeline.length - 1];
        selectors.heroFootnote.textContent = `Mở đơn ${formatDate(first.date)} · Bootcamp ${formatDate(last.date)}`;
    } else {
        selectors.heroFootnote.textContent = 'Thông tin chi tiết sẽ được cập nhật.';
    }

    selectors.description.textContent = event.description;
    document.title = `${event.name} · KontumPlus`;
}

function renderHighlightGrid(event) {
    selectors.highlightGrid.innerHTML = '';
    if (!event.highlights?.length) {
        selectors.highlightGrid.append(
            createElement('p', {
                className: 'empty-state',
                text: 'Thông tin nổi bật sẽ được cập nhật trong thời gian tới.'
            })
        );
        return;
    }

    event.highlights.forEach((highlight) => {
        const card = createElement('article', { className: 'highlight-card' });
        card.append(createElement('h3', { text: highlight.title }));
        card.append(createElement('p', { text: highlight.description }));
        selectors.highlightGrid.append(card);
    });
}

function renderTimeline(event) {
    selectors.timeline.innerHTML = '';
    if (!event.timeline?.length) {
        selectors.timeline.append(
            createElement('p', { text: 'Timeline đang được cập nhật.', className: 'empty-state' })
        );
        return;
    }

    event.timeline.forEach((item) => {
        const node = createElement('article', { className: 'timeline__item' });
        node.append(createElement('h3', { text: item.label }));
        node.append(createElement('time', { text: formatDate(item.date) }));
        node.append(createElement('p', { text: item.description }));
        selectors.timeline.append(node);
    });
}

function renderSchedule(event) {
    selectors.schedule.innerHTML = '';

    if (!event.schedule?.length) {
        selectors.schedule.append(
            createElement('p', {
                className: 'empty-state',
                text: 'Ban tổ chức sẽ cập nhật lịch trình chi tiết sớm nhất.'
            })
        );
        return;
    }

    event.schedule.forEach((day) => {
        const dayCard = createElement('article', { className: 'schedule__day' });
        const header = createElement('div', { className: 'schedule__header' });
        header.append(createElement('h3', { text: `${day.day} · ${formatDay(day.date)}` }));
        header.append(createElement('span', { text: `${formatDate(day.date)} – ${day.summary}` }));
        dayCard.append(header);

        (day.sessions || []).forEach((session) => {
            const sessionNode = createElement('div', { className: 'session' });
            sessionNode.append(createElement('span', {
                className: 'session__time',
                text: `${session.start} - ${session.end}`
            }));
            sessionNode.append(createElement('h4', { text: session.title }));
            sessionNode.append(createElement('p', { text: session.description }));

            if (session.tags?.length) {
                const tags = createElement('div', { className: 'session__tags' });
                session.tags.forEach((tag) => {
                    tags.append(createElement('span', { className: 'session__tag', text: tag }));
                });
                sessionNode.append(tags);
            }

            dayCard.append(sessionNode);
        });

        selectors.schedule.append(dayCard);
    });
}

function renderSpeakers(event) {
    selectors.speakers.innerHTML = '';

    if (!event.speakers?.length) {
        selectors.speakers.append(
            createElement('p', {
                className: 'empty-state',
                text: 'Danh sách mentor sẽ được công bố trong thời gian tới.'
            })
        );
        return;
    }

    event.speakers.forEach((speaker) => {
        const card = createElement('article', { className: 'speaker-card' });
        const avatar = createElement('div', { className: 'speaker-card__avatar' });
        avatar.style.background = speaker.accentColor || 'var(--brand-primary)';
        avatar.textContent = speaker.name
            .split(' ')
            .slice(-2)
            .map((part) => part[0])
            .join('');

        card.append(avatar);
        card.append(createElement('h3', { text: speaker.name }));
        card.append(
            createElement('span', {
                text: `${speaker.title}${speaker.organization ? ` · ${speaker.organization}` : ''}`
            })
        );
        card.append(createElement('p', { text: speaker.bio }));
        selectors.speakers.append(card);
    });
}

function renderPartners(event) {
    selectors.partners.innerHTML = '';
    if (!event.partners?.length) {
        selectors.partners.append(
            createElement('p', { className: 'empty-state', text: 'Danh sách đối tác đang được cập nhật.' })
        );
        return;
    }

    event.partners.forEach((partner) => {
        const card = createElement('article', { className: 'partner-card' });
        card.append(createElement('h3', { text: partner.name }));
        if (partner.tier) {
            card.append(createElement('span', { text: partner.tier }));
        }
        selectors.partners.append(card);
    });
}

function renderFaqs(event) {
    selectors.faqs.innerHTML = '';
    if (!event.faqs?.length) {
        selectors.faqs.append(
            createElement('p', { className: 'empty-state', text: 'Chưa có câu hỏi thường gặp.' })
        );
        return;
    }

    event.faqs.forEach((faq) => {
        const item = createElement('article', { className: 'accordion__item' });
        item.append(createElement('h3', { className: 'accordion__question', text: faq.question }));
        item.append(createElement('p', { className: 'accordion__answer', text: faq.answer }));
        selectors.faqs.append(item);
    });
}

function renderContactCard(event) {
    selectors.contactDetails.innerHTML = '';
    const resources = event.resources || {};

    const heading = createElement('h3', { text: 'Thông tin liên hệ' });
    const list = createElement('ul');
    if (resources.supportEmail) {
        const item = createElement('li');
        item.innerHTML = `<strong>Email:</strong> <a href="mailto:${resources.supportEmail}">${resources.supportEmail}</a>`;
        list.append(item);
    }
    if (resources.hotline) {
        const item = createElement('li');
        item.innerHTML = `<strong>Hotline:</strong> <a href="tel:${resources.hotline}">${resources.hotline}</a>`;
        list.append(item);
    }
    if (resources.facebookGroup) {
        const item = createElement('li');
        item.innerHTML = `<strong>Community:</strong> <a target="_blank" rel="noopener" href="${resources.facebookGroup}">Nhóm Facebook</a>`;
        list.append(item);
    }

    selectors.contactDetails.append(heading, list);
}

function renderOtherEvents(allEvents) {
    selectors.otherEvents.innerHTML = '';
    const others = allEvents.filter((event) => event.code !== state.eventCode);
    if (!others.length) {
        selectors.otherEvents.append(
            createElement('p', { className: 'empty-state', text: 'Chúng tôi sẽ cập nhật các chương trình mới trong thời gian tới.' })
        );
        return;
    }

    others.forEach((event) => {
        const card = createElement('article', { className: 'other-event-card' });
        card.append(createElement('h3', { text: event.name }));
        card.append(createElement('p', { text: event.tagline }));
        if (event.location?.city) {
            card.append(createElement('span', { text: `Địa điểm: ${event.location.city}` }));
        }
        const link = createElement('a', {
            className: 'btn btn--secondary',
            text: 'Xem chi tiết'
        });
        link.href = `?code=${event.code}`;
        card.append(link);
        selectors.otherEvents.append(card);
    });
}

function updateFooterAnalytics(event) {
    if (!event.analytics) {
        selectors.footerAnalytics.textContent = '';
        return;
    }

    selectors.footerAnalytics.textContent = `Đã có ${event.analytics.totalRegistrations} đội đăng ký · Còn ${event.analytics.seatsRemaining} suất tham dự.`;
}

function setFeedback(target, message, type = 'info') {
    target.textContent = message;
    target.classList.remove('form__feedback--error', 'form__feedback--success');
    if (type === 'error') {
        target.classList.add('form__feedback--error');
    }
    if (type === 'success') {
        target.classList.add('form__feedback--success');
    }
}

async function handleRegistrationSubmit(event) {
    event.preventDefault();
    setFeedback(selectors.registrationFeedback, 'Đang gửi thông tin...', 'info');

    const formData = new FormData(selectors.registrationForm);
    const payload = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(`/api/events/${encodeURIComponent(state.eventCode)}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok) {
            const errorMessage = data.errors
                ? Object.values(data.errors).join(' ')
                : data.message || 'Không thể gửi đăng ký.';
            setFeedback(selectors.registrationFeedback, errorMessage, 'error');
            return;
        }

        setFeedback(selectors.registrationFeedback, data.message, 'success');
        selectors.registrationForm.reset();

        if (state.event && data.analytics) {
            state.event.analytics = data.analytics;
            updateFooterAnalytics(state.event);
            renderHero(state.event);
        }
    } catch (error) {
        console.error(error);
        setFeedback(selectors.registrationFeedback, 'Đã xảy ra lỗi khi gửi đăng ký. Vui lòng thử lại sau.', 'error');
    }
}

async function handleContactSubmit(event) {
    event.preventDefault();
    setFeedback(selectors.contactFeedback, 'Đang gửi thông tin...', 'info');

    const formData = new FormData(selectors.contactForm);
    const payload = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok) {
            const errorMessage = data.errors
                ? Object.values(data.errors).join(' ')
                : data.message || 'Không thể gửi yêu cầu liên hệ.';
            setFeedback(selectors.contactFeedback, errorMessage, 'error');
            return;
        }

        selectors.contactForm.reset();
        setFeedback(selectors.contactFeedback, data.message, 'success');
    } catch (error) {
        console.error(error);
        setFeedback(selectors.contactFeedback, 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.', 'error');
    }
}

async function fetchEventDetails() {
    const response = await fetch(`/api/events/${encodeURIComponent(state.eventCode)}`);
    if (!response.ok) {
        throw new Error('Không thể tải thông tin sự kiện.');
    }
    return response.json();
}

async function fetchAllEvents() {
    const response = await fetch('/api/events');
    if (!response.ok) {
        throw new Error('Không thể tải danh sách sự kiện.');
    }
    const data = await response.json();
    return data.events || [];
}

async function init() {
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    try {
        const event = await fetchEventDetails();
        state.event = event;
        applyTheme(event.theme);
        renderHero(event);
        renderHighlightGrid(event);
        renderTimeline(event);
        renderSchedule(event);
        renderSpeakers(event);
        renderPartners(event);
        renderFaqs(event);
        renderContactCard(event);
        updateFooterAnalytics(event);
    } catch (error) {
        console.error(error);
        selectors.description.textContent = 'Hiện chưa thể tải nội dung sự kiện. Vui lòng thử lại sau.';
        setFeedback(selectors.registrationFeedback, 'Tạm thời không thể gửi đăng ký. Vui lòng thử lại sau.', 'error');
    }

    try {
        const allEvents = await fetchAllEvents();
        renderOtherEvents(allEvents);
    } catch (error) {
        console.error(error);
    }

    selectors.registrationForm.addEventListener('submit', handleRegistrationSubmit);
    selectors.contactForm.addEventListener('submit', handleContactSubmit);
}

init();
