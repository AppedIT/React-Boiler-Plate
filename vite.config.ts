import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  //   build: {
  //     outDir: 'build',
  //   },

  const plugins = [
    reactRefresh(),
    tsconfigPaths(),
    svgr({ exportAsDefault: true}),
  ]

  let outDir = 'dist';

  switch (mode) {
    case 'development':
      outDir += '/dev';
      break;
    case 'beta':
      outDir += '/beta';
      break;
    case 'production':
        outDir += '/prod';
        break;
    default:
      break;
  }

  return {
      plugins: plugins,
      build: {
        outDir: outDir
      },
    };
});
