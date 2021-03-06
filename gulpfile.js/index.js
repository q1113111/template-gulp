const gulp = require('gulp');
const $ = require('gulp-load-plugins')({
   lazy: false,
});
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const { envOptions } = require('./envOptions');
const php = require('gulp-connect-php');

let options = minimist(process.argv.slice(2), envOptions);
//現在開發狀態
console.log(`Current mode：${options.env}`);

function copyFile() {
   return gulp
      .src(envOptions.conyFile.src)
      .pipe(gulp.dest(envOptions.conyFile.path))
      .pipe(
         browserSync.reload({
            stream: true,
         })
      );
}

function layoutHTML() {
   return gulp
      .src(envOptions.html.src)
      .pipe($.plumber())
      .pipe($.frontMatter())
      .pipe(
         $.layout((file) => {
            return file.frontMatter;
         })
      )
      .pipe(gulp.dest(envOptions.html.path))
      .pipe(
         browserSync.reload({
            stream: true,
         })
      );
}

function sass() {
   const plugins = [autoprefixer()];
   return (
      gulp
         .src(envOptions.style.src)
         // .pipe($.sourcemaps.init())
         .pipe($.sass().on('error', $.sass.logError))
         .pipe($.postcss(plugins))
         .pipe(
            $.sass({
               outputStyle: 'compressed',
            })
         )
         .pipe(
            $.rename({
               suffix: '.min',
            })
         )
         // .pipe($.sourcemaps.write('.'))
         .pipe(gulp.dest(envOptions.style.path))
         .pipe(
            browserSync.reload({
               stream: true,
            })
         )
   );
}

function vendorsCss() {
   return gulp
      .src(envOptions.vendorscss.src)
      .pipe($.concat(envOptions.vendorscss.concat))
      .pipe(
         $.rename({
            suffix: '.min',
         })
      )
      .pipe($.minifyCss())
      .pipe(gulp.dest(envOptions.vendorscss.path));
}

function babel() {
   return (
      gulp
         .src(envOptions.javascript.src)
         // .pipe($.sourcemaps.init())
         .pipe(
            $.babel({
               presets: ['@babel/env'],
            })
         )
         .pipe($.concat(envOptions.javascript.concat))
         // .pipe($.sourcemaps.write('.'))
         // .pipe($.uglify())
         .pipe(
            $.rename({
               suffix: '.min',
            })
         )
         .pipe(gulp.dest(envOptions.javascript.path))
         .pipe(
            browserSync.reload({
               stream: true,
            })
         )
   );
}

function vendorsJs() {
   return gulp
      .src(envOptions.vendors.src)
      .pipe($.concat(envOptions.vendors.concat))
      .pipe($.uglify())
      .pipe(
         $.rename({
            suffix: '.min',
         })
      )
      .pipe(gulp.dest(envOptions.vendors.path));
}

function phprun() {
   return gulp.src(envOptions.php.src).pipe(gulp.dest(envOptions.php.path));
}

function browser() {
   browserSync.init({
      server: {
         baseDir: envOptions.browserDir,
      },
      port: 8080,
   });
}

function clean() {
   return gulp
      .src(envOptions.clean.src, {
         read: false,
         allowEmpty: true,
      })
      .pipe($.clean());
}

function deploy() {
   return gulp.src(envOptions.deploySrc).pipe($.ghPages());
}

function watch() {
   gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
   gulp.watch(envOptions.html.ejsSrc, gulp.series(layoutHTML));
   gulp.watch(envOptions.javascript.src, gulp.series(babel));
   gulp.watch(envOptions.img.src, gulp.series(copyFile));
   gulp.watch(envOptions.style.src, gulp.series(sass));
   gulp.watch(envOptions.php.src, gulp.series(phprun));
}

exports.deploy = deploy;

exports.clean = clean;

exports.build = gulp.series(clean, copyFile, layoutHTML, sass, babel, vendorsJs, vendorsCss, phprun);

exports.default = gulp.series(
   clean,
   copyFile,
   layoutHTML,
   sass,
   babel,
   vendorsJs,
   phprun,
   vendorsCss,
   gulp.parallel(browser, watch)
);
