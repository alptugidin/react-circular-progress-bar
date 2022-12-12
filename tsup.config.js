import { defineConfig } from 'tsup';
export default defineConfig({
   entry: ['./lib/index.ts'],
   // entry: {
      // flat: './lib/'
   // }
   format: ['cjs', 'esm'],
   dts: { entry: { index: './lib/types.d.ts' } },
   minify: true,
   clean: true,
   outExtension({ format }) {
      return format === 'esm' ? { js: `.${format}.js` } : { js: '.js' };
   },
});