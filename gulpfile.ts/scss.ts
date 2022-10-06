import GulpClient from 'gulp';
import SourceMaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { DEBUG_MODE, devPathC } from './index';

const sass = gulpSass(dartSass);

export function compileSCSS(pathes: devPathC) {
    pathes.src += '**/*.scss';

    if (DEBUG_MODE) console.log(`[COMPILE][SCSS] Path: "${pathes.src}"`);

    return GulpClient.src(pathes.src, { sourcemaps: true })
        .pipe(SourceMaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(SourceMaps.write())
        .pipe(GulpClient.dest(pathes.dist));
}
