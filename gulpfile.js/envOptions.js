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
      // `!${srcPath}/**/*scss`,
      // `!${srcPath}/**/*sass`,
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
  css: {
    src: [
      `${srcPath}/assets/style/**/*.css`,
    ],
    concat: 'all.css',
    path: `${distPath}/assets/style`,
  },
  vendorscss: {
    src: [
      `${nodePath}/bootstrap/dist/**/bootstrap.min.css`,
      `${nodePath}/owl.carousel/dist/**/owl.carousel.min.css`,
      `${nodePath}/owl.carousel/dist/**/owl.theme.default.min.css`,
      `${nodePath}/magnific-popup/dist/**/magnific-popup.css`,
      `${nodePath}/jquery-nice-select/css/**/nice-select.css`,
      `${nodePath}/swiper/**/swiper-bundle.min.css`,

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
      `${nodePath}/bootstrap/dist/**/bootstrap.min.js`,
      `${nodePath}/bootstrap-validator/dist/**/validator.min.js`,
      `${nodePath}/owl.carousel/dist/**/owl.carousel.min.js`,
      `${nodePath}/jquery-nice-select/js/**/jquery.nice-select.min.js`,
      `${nodePath}/swiper/**/swiper-bundle.min.js`,
      `${nodePath}/magnific-popup/dist/**/jquery.magnific-popup.min.js`,
      `${nodePath}/ajaxchimp/**/jquery.ajaxchimp.min.js`,
      `${nodePath}/imagesloaded/**/imagesloaded.pkgd.min.js`,
      `${nodePath}/masonry-layout/dist/**/masonry.pkgd.min.js`,
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
