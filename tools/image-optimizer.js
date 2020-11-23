const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

module.exports =
(async () => {
    const files = await imagemin(['src/assets/img/*.{jpg,png}'], {
        destination: 'dist/img',
        plugins: [
            imageminJpegtran({
							quality: [0.75, 0.95]
						}),
            imageminPngquant({
                quality: [0.75, 0.95]
            })
        ]
    });

    console.log(files);
})();