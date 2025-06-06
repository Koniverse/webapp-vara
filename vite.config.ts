import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { compression } from 'vite-plugin-compression2'
import inject from '@rollup/plugin-inject'

// @ts-ignore
export default defineConfig({
  plugins: [react(), topLevelAwait(), wasm(), compression()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@containers': '/src/containers',
      '@pages': '/src/pages',
      '@static': '/src/static',
      '@store': '/src/store',
      '@web3': '/src/web3',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@/': '/src',
      '@hooks': '/src/hooks',
      '@invariant-labs/vara-sdk': '@subwallet/invariant-vara-sdk',
      '@invariant-labs/vara-sdk-wasm': '@subwallet/invariant-vara-sdk-wasm',
      'svelte-qrcode': 'svelte-qrcode/dist/index.js',
       buffer: 'buffer',
       process: 'process/browser',
    }
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    rollupOptions: {
      external: ['fs/promises', 'path', 'invariant-vara-wasm'],
      plugins: [inject({
        Buffer: ['buffer', 'Buffer'],
        process: 'process',
      }) as any]
    }
  },
  optimizeDeps: {
    include: ['buffer', 'process', 'svelte-qrcode'],
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        })
      ]
    }
  },
  esbuild: {
    minifyIdentifiers: false,
    keepNames: true
  }
})
