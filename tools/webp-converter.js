const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
    const files = await imagemin(['dist/img/*.{jpg,png}'], {
				destination: 'dist/img/webp',
        plugins: [
				imageminWebp({
					quality: 85
				})]
    });

    console.log(files);
})();