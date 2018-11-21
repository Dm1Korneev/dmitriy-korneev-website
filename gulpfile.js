const   gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        del = require('del'),
        rename = require('gulp-rename'),
        cleanCSS = require('gulp-clean-css');

gulp.task('build', function (callback) {
        gulp.start('clean');  
        gulp.start('build:css');               
        gulp.start('build:fonts');
        gulp.start('build:icons');
        gulp.start('build:js');
        gulp.start('build:img');
        gulp.start('build:html');
        
        return callback();
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/style.css', ['build:css']);
    gulp.watch('src/fonts/**/*', ['build:fonts']);
    gulp.watch('src/icons/**/*', ['build:icons']);
    gulp.watch('src/js/**/*', ['build:js']);
    gulp.watch('src/*', ['build:html']);
    gulp.watch('src/img/**/*', ['build:img']);
});

gulp.task('watch-min-css', function () {
    gulp.watch('src/css/**/style.css', ['build:min-css']);
});

gulp.task('build:min-css', function () {
    
    return gulp.src([
        'src/css/style.css'
        ])
        .pipe(autoprefixer([
        'last 10 versions'
        ], {
            cascade: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'));
}); 

gulp.task('build:css', function () {
    
    return gulp.src([
        'src/css/style.css'
        ])
        .pipe(autoprefixer([
        'last 10 versions'
        ], {
            cascade: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('build:fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build:icons', function () {
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('build:js', function () {
    return gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build:img', function () {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build:html', function (callback) {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/*.ico')
        .pipe(gulp.dest('dist')); 
        
    return callback();    
});