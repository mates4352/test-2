import browserSync from 'browser-sync';
import config from './config';

const server = (callback) => {
   browserSync.create().init({
      server: {
         baseDir: config.build.root,
      },
      files: [
         config.watch.html,
         config.watch.style,
         config.watch.js,
         config.watch.images,
      ],
      open: true,
      notify: false,
   });
   callback();
};

export default server;
