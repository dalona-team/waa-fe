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
        primary: '#2D53B4', // BLUE
        secondary: '#426337', // GREEN
        accent: '#789F63', // KAKI
        // 추가 색상 변수
      },
      textColor: {
        primary: '#2D53B4',
        secondary: '#426337',
        accent: '#789F63',
        line1: 'rgba(255, 255, 255, 0.08)',
        line2: 'rgba(255, 255, 255, 0.16)',
        b40: 'rgba(255, 255, 255, 0.4)',
      },
      borderColor: {
        line1: 'rgba(255, 255, 255, 0.08)',
        line2: 'rgba(255, 255, 255, 0.16)',
        b40: 'rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;