import GulpClient from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { DEBUG_MODE, devPathC } from './index';

const sass = gulpSass(dartSass);

export function compileSCSS(pathes: devPathC) {
    pathes.src += '**/*.scss';

    if (DEBUG_MODE) console.log(`[COMPILE][SCSS] Path: "${pathes.src}"`);

    return GulpClient.src(pathes.src, { sourcemaps: true })
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(GulpClient.dest(pathes.dist));
}
