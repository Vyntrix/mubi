import {
  defineConfig,

  // presets
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,

  // transformers
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'pack': 'flex items-center justify-center',
    'vpack': 'flex flex-col items-center justify-center',
    'hbox': 'flex flex-row',
    'vbox': 'flex flex-col',
    'btn': 'rounded px-4 py-2 bg-dark-4 hover:bg-dark-1 active:bg-dark-9 text-light font-bold border-none outline-none transition flex flex-row items-center justify-center gap-2',
    'btn-sec': 'btn bg-light-7 hover:bg-light-5 active:bg-light-9 text-dark',
    'card': 'rounded-2xl bg-light-5 p-4 vpack text-dark text-center gap-2',
    'card-pri': 'card bg-yellow',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontsource',
      fonts: {
        sans: 'Pretendard:300;400;500;600;700;800;900',
      },
    }),
    presetTypography(),
    presetIcons(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {},
  preflights: [
    {
      getCSS: () => {
        return `
                html {
                    scroll-behavior: smooth;
                    height: 100%;
                }
            `
      },
    },
  ],
})
