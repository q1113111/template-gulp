const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
    string: 'env',
    default: {
        env: 'dev',
    },
    conyFile: {
        src: [
            `${srcPath}/**/*`,
            `!${srcPath}/assets/js/**/*.js`,
            `!${srcPath}/assets/style/**/*.css`,
            `!${srcPath}/assets/scss/**/*`,
            `!${srcPath}/aseets/sass/**/*`,
            `!${srcPath}/**/*.ejs`,
            `!${srcPath}/**/*.html`,
        ],
        path: distPath,
    },
    html: {
        src: [
            `${srcPath}/**/*.html`,
        ],
        ejsSrc: [
            `${srcPath}/**/*.ejs`,
        ],
        path: distPath,
    },
    vendorscss: {
        src: [
            `${nodePath}/swiper/dist/**/swiper.min.css`,
            `${nodePath}/owl.carousel/dist/**/owl.carousel.min.css`,
            `${nodePath}/owl.carousel/dist/**/owl.theme.default.min.css`,
            `${nodePath}/daterangepicker/**/daterangepicker.css`,
        ],
        concat: 'vendors.css',
        path: `${distPath}/assets/style`,
    },
    style: {
        src: [
            `${srcPath}/assets/scss/**/*.scss`,
            `${srcPath}/assets/scss/**/*.sass`,
        ],
        path: `${distPath}/assets/style`,
    },
    javascript: {
        src: [
            `${srcPath}/assets/js/**/*.js`
        ],
        concat: 'all.js',
        path: `${distPath}/assets/js`,
    },
    vendors: {
        src: [
            `${nodePath}/jquery/dist/**/jquery.min.js`,
            `${nodePath}/bootstrap/dist/**/bootstrap.bundle.min.js`,
            `${nodePath}/owl.carousel/dist/**/owl.carousel.min.js`,
            `${nodePath}/swiper/dist/**/swiper.min.js`,
            `${nodePath}/imagesloaded/**/imagesloaded.pkgd.min.js`,
            `${nodePath}/masonry-layout/dist/**/masonry.pkgd.min.js`,
            `${nodePath}/daterangepicker/**/moment.min.js`,
            `${nodePath}/daterangepicker/**/daterangepicker.js`,
        ],
        concat: 'vendors.js',
        path: `${distPath}/assets/js`,
    },
    img: {
        src: [
            `${srcPath}/assets/img/**/*`,
        ],
    },
    clean: {
        src: distPath,
    },
    browserDir: distPath,
    deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;