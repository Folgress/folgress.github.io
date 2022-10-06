import GulpClient from 'gulp';
import Pug from 'gulp-pug';
import { DEBUG_MODE, devPathC } from './index';

export function compilePUG(pathes: devPathC) {
    pathes.src += '**/*.pug';

    if (DEBUG_MODE) console.log(`[COMPILE][PUG] Path: "${pathes.src}"`);

    return GulpClient.src(pathes.src, { sourcemaps: true })
        .pipe(Pug({ verbose: true }))
        .pipe(GulpClient.dest(pathes.dist));
}
