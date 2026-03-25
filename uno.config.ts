import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'text-brand': 'text-[#D21E2D]',
    'bg-brand': 'bg-[#D21E2D]',
    'bg-brand-light': 'bg-[#FEF2F2]',
    'bg-section': 'bg-[#F6F8FA]',
    'text-main': 'text-[#1C1A1A]',
    'text-sub': 'text-[#807C7C]',
    'border-line': 'border-[#464444]',
    'border-gray': 'border-[#E1E1E1]',
  },
  theme: {
    colors: {
      brand: {
        DEFAULT: '#D21E2D',
        hover: '#B81A27',
        bg: '#FEF2F2',
      },
    },
  },
})
