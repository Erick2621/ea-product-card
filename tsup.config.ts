import { defineConfig } from 'tsup'

export default defineConfig(
    {
        entry: ['src/index.ts'],
        splitting: false,
        sourcemap: true,
        clean: true,
        dts: true,
        format: ['cjs', 'esm'],
        tsconfig: './tsconfig.app.json', // 👈 aquí la magia
        loader: {
            '.jpg': 'file',   // convierte los imports de jpg en URLs con hash
            '.png': 'file',   // idem para PNG
            '.svg': 'file',   // idem para SVG
            '.css': 'css'     // permite importar CSS modules
        }
    },

)
