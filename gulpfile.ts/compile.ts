import GulpClient from 'gulp';
import { devPathC, Paths } from './index';
import { compilePUG } from './pug';

function getPath(Path: string): devPathC {
    return { src: Paths.src + Path, dist: Paths.dist + Path };
}

const compile_SlimeIM_Helper_PUG = () => compilePUG(getPath(Paths.Pages.SlimeIM_Helper));

export const compile_SlimeIM_Helper = GulpClient.parallel(compile_SlimeIM_Helper_PUG);
