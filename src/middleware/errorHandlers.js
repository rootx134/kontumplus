export function notFoundHandler(req, res, next) {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({
            message: 'Tài nguyên bạn yêu cầu không tồn tại.'
        });
    }

    return res.status(404).send('Trang bạn tìm kiếm không tồn tại.');
}

export function errorHandler(err, req, res, next) {
    // eslint-disable-next-line no-console
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    const status = err.status || 500;
    return res.status(status).json({
        message: err.message || 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.'
    });
}
