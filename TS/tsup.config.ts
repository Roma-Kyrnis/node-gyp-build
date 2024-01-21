import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/node-gyp-build.ts'],
  sourcemap: true,
  clean: true,
  shims: true,
  dts: true,
  format: 'esm',
  outDir: 'dist',
  platform: 'node',
  splitting: true,
});
