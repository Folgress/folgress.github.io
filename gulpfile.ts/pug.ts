import GulpClient from 'gulp';
import Pug from 'gulp-pug';
import { devPathC } from './index';

export function compilePUG(pathes: devPathC) {
    console.log(pathes.src + '**/*.pug');
    return GulpClient.src(pathes.src + '**/*.pug')
        .pipe(Pug({ verbose: true }))
        .pipe(GulpClient.dest(pathes.dist));
}
