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
        // Gray Scale
        gray: {
          100: '#F7F7F7',
          200: '#E6E6E6',
          300: '#D1D1D1',
          400: '#ADADAD',
          500: '#949494',
          600: '#777777',
          700: '#555555',
          800: '#2E2E2E',
          900: '#1A1A1A',
        },
        // White Scale
        white: {
          100: '#FFFFFF',
          200: '#F7F7F7',
          300: '#F0F0F0',
          400: '#E8E8E8',
          500: '#E0E0E0',
        },
        // Primary Scale (Blue)
        primary: {
          100: '#F5F7FF',
          200: '#E5EAFF',
          300: '#C2CDFF',
          400: '#99A8FF',
          500: '#6B7CFF',
          600: '#4558FF',
          700: '#2F3FCC',
          800: '#1C2999',
          900: '#0A1466',
        }
      },
      typography: {
        'large-title': {
          regular: {
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: '700',
          }
        },
        'large-title2': {
          regular: {
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: '700',
          }
        },
        'title1': {
          regular: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '700',
          }
        },
        'title2': {
          regular: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '700',
          }
        },
        'title3': {
          regular: {
            fontSize: '18px',
            lineHeight: '26px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '18px',
            lineHeight: '26px',
            fontWeight: '700',
          }
        },
        'body': {
          regular: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '600',
          }
        },
        'caption': {
          regular: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
          }
        },
        'footnote': {
          regular: {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '400',
          },
          medium: {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
          }
        }
      }
    },
  },
  plugins: [],
};

export default config;