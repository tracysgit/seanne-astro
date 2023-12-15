import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
  compressHTML: false,
  output: 'static',
  trailingSlash: 'never',

});
