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
         `!${srcPath}/assets/scss/**`,
         `!${srcPath}/assets/css/**`,
         `!${srcPath}/aseets/sass/**/*`,
         `!${srcPath}/**/*.ejs`,
         `!${srcPath}/**/*.html`,
      ],
      path: distPath,
   },
   html: {
      src: [`${srcPath}/**/*.html`],
      ejsSrc: [`${srcPath}/**/*.ejs`],
      path: distPath,
   },
   php: {
      src: [`${srcPath}/**/*.php`],
      path: `${distPath}`,
   },
   vendorscss: {
      src: [
         `${nodePath}/swiper/dist/**/swiper.min.css`,
         `${nodePath}/lightbox2/dist/**/lightbox.css`,
         `${srcPath}/**/*.css`,
      ],
      concat: 'vendors.css',
      path: `${distPath}/assets/style`,
   },
   style: {
      src: [`${srcPath}/assets/scss/**/*.scss`, `${srcPath}/assets/scss/**/*.sass`],
      path: `${distPath}/assets/style`,
   },
   javascript: {
      src: [`${srcPath}/assets/js/**/*.js`],
      concat: 'all.js',
      path: `${distPath}/assets/js`,
   },
   vendors: {
      src: [
         `${nodePath}/jquery/dist/**/jquery.min.js`,
         `${nodePath}/bootstrap/dist/**/bootstrap.bundle.min.js`,
         `${nodePath}/lightbox2/dist/**/lightbox-plus-jquery.min.js`,
         `${nodePath}/swiper/dist/**/swiper.min.js`,
         `${nodePath}/paginationjs/dist/**/pagination.min.js`,
      ],
      concat: 'vendors.js',
      path: `${distPath}/assets/js`,
   },
   img: {
      src: [`${srcPath}/assets/img/**/*`],
   },
   clean: {
      src: distPath,
   },
   browserDir: distPath,
   deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
