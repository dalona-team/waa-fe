import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A9058', // GREEN
        secondary: '#909195', // GRAY
        accent: '#EA98E0', // PINK
        line1: 'rgba(0, 0, 0, 0.08)',
        mint: '#CEF4E9',
        // 추가 색상 변수
      },
      textColor: {
        primary: '#1A9058',
        secondary: '#909195',
        accent: '#EA98E0',
        line1: 'rgba(0, 0, 0, 0.08)',
        line2: 'rgba(0, 0, 0, 0.16)',
        b40: 'rgba(0, 0, 0, 0.4)',
      },
      borderColor: {
        line1: 'rgba(0, 0, 0, 0.08)',
        line2: 'rgba(0, 0, 0, 0.16)',
        b40: 'rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;