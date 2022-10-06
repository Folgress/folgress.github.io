import GulpClient from 'gulp';
import ghPages from 'gulp-gh-pages';
import { compile_SlimeIM_Helper } from './compile';

export const DEBUG_MODE = true;

export type devPathC = {
    src: string;
    dist: string;
};
export type devPath = {
    src: string;
    dist: string;
    Pages: {
        SlimeIM_Helper: string;
    };
};

export const Paths: devPath = {
    src: './src/',
    dist: './dist/',
    Pages: {
        SlimeIM_Helper: 'SlimeIM-Helper/',
    },
};

export const Deploy = () => GulpClient.src('dist/**/*').pipe(ghPages({ branch: 'live' }));

export const Compile_SlimeIM_Helper = GulpClient.series(compile_SlimeIM_Helper);
export const Compile_Deploy_SlimeIM_Helper = GulpClient.series(compile_SlimeIM_Helper, Deploy);
