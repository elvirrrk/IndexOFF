import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    imagemin({
      verbose: true,
      gifsicle: {
        optimizationLevel: 2,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
      },
      svgo: {
        plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
      },
    }),
  ],
});
