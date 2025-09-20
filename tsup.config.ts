import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],     // Tu punto de entrada principal
    format: ['cjs', 'esm'],      // Genera CommonJS y ESM
    dts: true,                   // Genera archivos .d.ts
    sourcemap: true,             // Opcional, para debug
    clean: true,                 // Limpia dist antes de compilar
    splitting: false,            // Para librerías, normalmente false
    tsconfig: 'tsconfig.app.json',
    outDir: 'dist',              // Carpeta de salida
    minify: false,               // Opcional
    legacyOutput: true,         // Organiza los archivos por formato
})