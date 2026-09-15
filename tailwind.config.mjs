/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pure-white': '#ffffff',
        'absolute-black': '#000000',
        'hairline-gray': '#e5e7eb',
        'hairline': '#e5e7eb',
        'stone-gray': '#6b7280',
        'ash': '#b3b3b3',
        'quartz': '#bbbbbb',
        'signal-blue': '#2563eb',
        // System color overrides to maintain contract palette across all templates
        ivory: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#fafafa',
          300: '#e5e7eb',
        },
        stone: {
          100: '#fafafa',
          200: '#f4f4f5',
          300: '#e5e7eb',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
        },
        charcoal: {
          700: '#3f3f46',
          800: '#27272a',
          900: '#000000',
          950: '#000000',
        },
        champagne: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      fontFamily: {
        plain: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['100px', { lineHeight: '1', letterSpacing: '-5px' }],
        'heading-lg': ['50px', { lineHeight: '1.08', letterSpacing: '-2px' }],
        'heading': ['30px', { lineHeight: '1.13', letterSpacing: '-0.75px' }],
        'heading-sm': ['24px', { lineHeight: '1.25', letterSpacing: '-0.05px' }],
        'subheading': ['18px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.56' }],
      },
      letterSpacing: {
        'display': '-5px',
        'heading-lg': '-2px',
        'heading': '-0.75px',
        'heading-sm': '-0.05px',
      },
      borderRadius: {
        DEFAULT: '0px',
        'none': '0px',
        'input': '2px',
      }
    },
  },
  plugins: [],
};