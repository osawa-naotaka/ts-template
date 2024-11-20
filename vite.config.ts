import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      fileName: 'bundle',
      formats: ['es'],
    },
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [tsConfigPaths()],  
});
