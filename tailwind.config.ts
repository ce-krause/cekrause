import type { Config } from 'tailwindcss'

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'light-background': 'var(--light-background)',
        'medium-background': 'var(--medium-background)',
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  darkMode: 'selector',
  plugins: []
} satisfies Config
