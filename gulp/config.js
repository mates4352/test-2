const srcPath = 'src';
const destPath = 'dist';

const config = {
   build: {
      root: destPath,
      html: `${destPath}`,
      js: `${destPath}/js`,
      css: `${destPath}/css`,
      fonts: `${destPath}/assets/fonts/`,
      images: `${destPath}/assets/images`,
   },
   src: {
      root: srcPath,
      html: `${srcPath}/*.html`,
      js: `${srcPath}/js/main.js`,
      style: `${srcPath}/scss/style.scss`,
      fonts: `${srcPath}/assets/fonts/*.{ttf,eot,svg,woff,woff2}`,
      images: `${srcPath}/assets/images/**/*.{jpg,png,svg,gif,ico,webp}`,
   },
   watch: {
      html: `${srcPath}/**/*.html`,
      js: `${srcPath}/js/**/*.js`,
      style: `${srcPath}/scss/**/*.scss`,
      images: `${srcPath}/assets/images/**/*.{jpg,png,svg,webp}`,
   },

   setEnv() {
      this.isProd = process.argv.includes('--prod');
      this.isDev = !this.isProd;
   },
};
export default config;
