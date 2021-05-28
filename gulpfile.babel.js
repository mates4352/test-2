import gulp from 'gulp';
import config from './gulp/config';
import watchFile from './gulp/watch';
import server from './gulp/server';
import clean from './gulp/tasks/clean';
import script from './gulp/tasks/scripts';
import html from './gulp/tasks/html';
import style from './gulp/tasks/style';
import { fonts, fontsFile } from './gulp/tasks/fonts';
import images from './gulp/tasks/images';

config.setEnv();

export const build = gulp.series(
   clean,
   gulp.parallel(
      script,
      html,
      style,
      images,
      fonts,
   ),
   fontsFile,
);

export const watch = gulp.series(
   build,
   server,
   watchFile,
);

exports.default = watch;
