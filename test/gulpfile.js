var gulp          = require('gulp'), // Подключаем Gulp
    sass          = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync   = require('browser-sync'), // Подключаем Browser Sync
    cssnano       = require('gulp-cssnano'), //Для минификации CSS
    rename        = require('gulp-rename'), //Для ренейма при сборке проекта
    imagemin      = require('gulp-imagemin'), //Оптимизация изображений
    pngquant      = require('imagemin-pngquant'), //Плагин для оптимизации png
    cache         = require('gulp-cache'), //Кэширование
    autoprefixer  = require('gulp-autoprefixer'), //Префиксы для разных движков и старых браузеров
    svgstore      = require('gulp-svgstore'), //Свг спрайты
    posthtml      = require('gulp-posthtml'), // для инклудов
    include       = require('posthtml-include'), //для инклудов
    cheerio       = require('gulp-cheerio'),
    imageminSvgo  = require('imagemin-svgo'),
    replace       = require('gulp-replace'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminMozjpeg  = require('imagemin-mozjpeg'),
    cleanCSS         = require('gulp-clean-css'),
    concat           = require('gulp-concat'),
    uglify           = require('gulp-uglify-es').default;


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({
		grid: true, // Optional. Enable CSS Grid
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

// Пользовательские скрипты проекта
gulp.task('js', function() {
	return gulp.src([
		'app/js/jquery.min.js',
		'app/js/mmenu.js',
		'app/js/common.js' // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }));
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('css-min', function () {
  return gulp.src('app/css/main.css')
  .pipe(cssnano())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('app/css'))
});


//Таск для создания свг спрайтов
gulp.task("sprite", function () {
  return gulp.src("app/img/icon-*.svg")
  // .pipe(cheerio({  //Удаляем все стили для спрайтов
	// 		run: function ($) {
	// 			$('[fill]').removeAttr('fill');
	// 			$('[stroke]').removeAttr('stroke');
	// 			$('[style]').removeAttr('style');
	// 		},
	// 		parserOptions: {xmlMode: true}
	// 	}))
  .pipe(replace('&gt;', '>')) //исправляем баг cherrio
  .pipe(svgstore({  //Создаем спрайт
    inlineSvg: true, //Для инлайна в html код
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("app/img"))
});







//Минификация изображений
gulp.task("images", () => {
    return gulp.src("app/img-nopt/**/*")
        .pipe(imagemin([
          imageminMozjpeg({
                progressive: true,
                quality: 90
            }),
          imageminPngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),
          imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: true },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ],{ // Сжимаем изображения без кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest("app/img"))
});


gulp.task('clear', function () {
  return cache.clearAll();
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/common.js', 'app/libs/**/*.js'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});


//Таск для инклуда html кода
gulp.task("html", function () {
  return gulp.src("app/pages/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("app/"));
})

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass', 'css-min')); // Наблюдение за sass файлами
    gulp.watch('app/post/*.html', gulp.parallel('html')); // Наблюдение за HTML файлами в папке страницы,если что то
  // меняется, инклудит в страницу в корневой папке которая после этого делает релоад
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));



gulp.task('prebuild', async function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/*min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});
