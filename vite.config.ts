import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import { compression } from 'vite-plugin-compression2'
import inject from '@rollup/plugin-inject'

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
      '@/': '/src',
      '@invariant-labs/vara-sdk': '@s2kael/invariant-sdk',
      '@invariant-labs/vara-sdk-wasm': '@s2kael/invariant-sdk-wasm'
    }
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    rollupOptions: {
      external: ['fs/promises', 'path', 'invariant-vara-wasm'],
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })]
    }
  },
  esbuild: {
    minifyIdentifiers: false,
    keepNames: true
  }
})
