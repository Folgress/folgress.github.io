import GulpClient from 'gulp';
import SourceMaps from 'gulp-sourcemaps';
import TS from 'gulp-typescript';
import { DEBUG_MODE, devPathC } from './index';

export function compileTS(pathes: devPathC) {
    pathes.src += '**/*.ts';

    if (DEBUG_MODE) console.log(`[DEBUG][TS] Path: "${pathes.src}"`);

    return GulpClient.src(pathes.src, { sourcemaps: true })
        .pipe(SourceMaps.init())
        .pipe(TS({ noImplicitAny: true }))
        .pipe(SourceMaps.write())
        .pipe(GulpClient.dest(pathes.dist));
}
