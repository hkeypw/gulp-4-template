# gulp-4 Минимальная сборка для фронтенда
***

## Используемые пакеты
***

* [browser-sync](https://browsersync.io/docs/gulp) - автообновление браузера (index: "index.html" - указывает с каким файлом работаем)
* [gulp-sacc](https://www.npmjs.com/package/gulp-sass) - компиляция SASS,SCSS в CSS;
* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - автоматически расставляет вендорные префиксы в CSS
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css) - минифицируем css файл (для того чтобы получить не минифицированный необходимо раскомментировать в функции style строку: /* , format: 'beautify' */ 
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - конкатенация файлов
* [gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es) - Сжимаем JavaScript
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) - компиляция Pug в HTML
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - создание sourcemap для js и css
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) - отслеживание ошибок

## Установка
***
> Предполагается, что node js и утилита gulp-cli уже установлены.  

Устанавливаем пакеты из package.json:  
npm install

## Использование
***

* Основная команда: gulp запускает слежку за файлами (scss и js) gulp-watch и browserSync и собирает проект в папке dist
* Сборка проекта: gulp build проект собирается в папке dist
* gulp styles - компилирует scss в css, расставляет префиксы и минимизирует css в папку dist
* gulp scripts - объединяет и минифицирует js в папку dist
* gulp pug2html - компилирует pug в html в папку dist