import GulpClient from 'gulp';
import SourceMaps from 'gulp-sourcemaps';
import Pug from 'gulp-pug';
import { DEBUG_MODE, devPathC } from './index';

export function compilePUG(pathes: devPathC) {
    pathes.src += '**/*.pug';

    if (DEBUG_MODE) console.log(`[COMPILE][PUG] Path: "${pathes.src}"`);

    return GulpClient.src(pathes.src, { sourcemaps: true })
        .pipe(SourceMaps.init())
        .pipe(Pug({ verbose: true }))
        .pipe(SourceMaps.write())
        .pipe(GulpClient.dest(pathes.dist));
}
