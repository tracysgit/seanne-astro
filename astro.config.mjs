import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'styles',
    format: 'file',
    inlineStylesheets: 'never',
  },
  compressHTML: false,
  output: 'static',
  // publicDir: './test',
  site: 'https://seannebuoy.art',
  trailingSlash: 'ignore',

});
