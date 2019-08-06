const { parallel, series, src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const hash = require("gulp-hash");
const references = require("gulp-hash-references");

const build = () => series(clean, parallel(css, fonts, icons, js, img), html);

const watchFiles = () => {
  watch("src/css/**/style.css", css);
  watch("src/fonts/**/*", fonts);
  watch("src/icons/**/*", icons);
  watch("src/js/**/*", js);
  watch("src/*", html);
  watch("src/img/**/*", img);
};

const watchMinCss = () => {
  watch("src/css/**/style.css", minCss);
};

const minCss = () =>
  src(["src/css/style.css"])
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

const css = () =>
  src(["src/css/style.css"])
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

const clean = () => del("dist");

const fonts = () => src("src/fonts/**/*").pipe(dest("dist/fonts"));

const icons = () => src("src/icons/**/*").pipe(dest("dist/icons"));

const js = () =>
  src("src/js/**/*")
    .pipe(hash())
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(hash.manifest("asset-manifest.json"))
    .pipe(dest("dist"));

const img = () => src("src/img/**/*").pipe(dest("dist/img"));

const html = done => {
  src("src/*.html")
    .pipe(references("dist/asset-manifest.json"))
    .pipe(dest("dist"));

  src("src/*.ico").pipe(dest("dist"));

  del("dist/asset-manifest.json");

  done();
};

exports.default = build();
exports.watch = watchFiles;
exports.watchMinCss = watchMinCss;
