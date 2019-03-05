const { parallel, series, src, dest, watch } = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  del = require("del"),
  rename = require("gulp-rename"),
  cleanCSS = require("gulp-clean-css");
uglify = require("gulp-uglify");

function build() {
  return series(clean, parallel(css, fonts, icons, js, img, html));
}

function watchFiles() {
  watch("src/css/**/style.css", css);
  watch("src/fonts/**/*", fonts);
  watch("src/icons/**/*", icons);
  watch("src/js/**/*", js);
  watch("src/*", html);
  watch("src/img/**/*", img);
}

function watchMinCss() {
  watch("src/css/**/style.css", minCss);
}

function minCss() {
  return src(["src/css/style.css"])
    .pipe(
      autoprefixer(["last 10 versions"], {
        cascade: true
      })
    )
    .pipe(
      cleanCSS({
        compatibility: "ie8"
      })
    )
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("src/css"));
}

function css() {
  return src(["src/css/style.css"])
    .pipe(
      autoprefixer(["last 10 versions"], {
        cascade: true
      })
    )
    .pipe(
      cleanCSS({
        compatibility: "ie8"
      })
    )
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("src/css"))
    .pipe(dest("dist/css"));
}

function clean() {
  return del("dist");
}

function fonts() {
  return src("src/fonts/**/*").pipe(dest("dist/fonts"));
}

function icons() {
  return src("src/icons/**/*").pipe(dest("dist/icons"));
}

function js() {
  return src("src/js/**/*")
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

function img() {
  return src("src/img/**/*").pipe(dest("dist/img"));
}

function html(done) {
  src("src/*.html").pipe(dest("dist"));
  src("src/*.ico").pipe(dest("dist"));

  done();
}

exports.default = build();
exports.watch = watchFiles;
exports.watchMinCss = watchMinCss;
