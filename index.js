const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminMozjpeg = require('imagemin-mozjpeg');
module.exports = (buffer, opts) => {
    opts = opts || {};
    opts.mozjpeg = opts.mozjpeg || 75;
    const jpegtran = imagemin.buffer(buffer, {
        plugins: [
            imageminJpegtran()
        ]
    })
    const mozjpeg = imagemin.buffer(buffer, {
        plugins: [
            imageminMozjpeg({
                quality: opts.mozjpeg
            })
        ]
    })
    return Promise.all([buffer, jpegtran, mozjpeg]).then(res => {
        return res.sort((a, b) => a.length - b.length)[0]
    });
}