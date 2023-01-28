import { defineConfig } from "vite";
import commonjsExternals from "vite-plugin-commonjs-externals";
import {builtinModules} from 'module';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: builtinModules,
  },
  plugins: [
    commonjsExternals({
      externals: builtinModules,
    }),
  ],
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        format: 'cjs'
      },
      external: builtinModules
    },
  }
});