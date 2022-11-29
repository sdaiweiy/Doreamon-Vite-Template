import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import { loadEnv } from 'vite';
// import { wrapperEnv } from './build/utils';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  }
});

// // https://vitejs.dev/config/
// export default ({ command, mode }: ConfigEnv): UserConfig => {
//   const root = process.cwd();

//   const env = loadEnv(mode, root);
//   // The boolean type read by loadEnv is a string. This function can be converted to boolean type
//   const viteEnv = wrapperEnv(env);

//   const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

//   const isBuild = command === 'build';

//   return {
//     plugins: [vue()],
//     resolve: {
//       alias: [
//         // /@/xxxx => src/xxxx
//         {
//           find: /\/@\//,
//           replacement: pathResolve('src') + '/'
//         },
//         // /#/xxxx => types/xxxx
//         {
//           find: /\/#\//,
//           replacement: pathResolve('types') + '/'
//         }
//       ]
//     }
//   };
// };
