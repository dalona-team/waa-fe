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
          10: 'rgba(250, 250, 250, 1)',
          50: 'rgba(246, 246, 246, 1)',
          100: 'rgba(214, 215, 215, 1)',
          200: 'rgba(189, 190, 190, 1)',
          300: 'rgba(164, 165, 165, 1)',
          400: 'rgba(138, 140, 140, 1)',
          500: 'rgba(113, 115, 115, 1)',
          600: 'rgba(87, 90, 90, 1)',
          700: 'rgba(62, 65, 65, 1)',
          800: 'rgba(37, 40, 40, 1)',
          900: 'rgba(11, 15, 15, 1)',
          1000: 'rgba(1, 1, 1, 1)',
        },
        // White Scale
        white: {
          10: 'rgba(255, 255, 255, 0.04)',
          50: 'rgba(255, 255, 255, 0.08)',
          100: 'rgba(255, 255, 255, 0.16)',
          200: 'rgba(255, 255, 255, 0.26)',
          300: 'rgba(255, 255, 255, 0.36)',
          400: 'rgba(255, 255, 255, 0.46)',
          500: 'rgba(255, 255, 255, 0.56)',
          600: 'rgba(255, 255, 255, 0.66)',
          700: 'rgba(255, 255, 255, 0.76)',
          800: 'rgba(255, 255, 255, 0.86)',
          900: 'rgba(255, 255, 255, 0.96)',
          1000: 'rgba(255, 255, 255, 1)',
        },
        // Primary Scale (Blue)
        primary: {
          10: 'rgba(73, 100, 255, 0.04)',
          50: 'rgba(73, 100, 255, 0.08)',
          100: 'rgba(73, 100, 255, 0.16)',
          200: 'rgba(73, 100, 255, 0.26)',
          300: 'rgba(73, 100, 255, 0.36)',
          400: 'rgba(73, 100, 255, 0.46)',
          500: 'rgba(73, 100, 255, 0.56)',
          600: 'rgba(73, 100, 255, 0.66)',
          700: 'rgba(73, 100, 255, 0.76)',
          800: 'rgba(73, 100, 255, 0.86)',
          900: 'rgba(73, 100, 255, 0.96)',
          1000: 'rgba(73, 100, 255, 1)',
        }
      },
      typography: {
        'large-title': {
          regular: {
            fontSize: '26px',
            lineHeight: '32px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '26px',
            lineHeight: '32px',
            fontWeight: '700',
          }
        },
        'large-title2': {
          regular: {
            fontSize: '36px',
            lineHeight: '40px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '36px',
            lineHeight: '40px',
            fontWeight: '700',
          }
        },
        'title1': {
          regular: {
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: '700',
          }
        },
        'title2': {
          regular: {
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '700',
          }
        },
        'title3': {
          regular: {
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: '400',
          },
          bold: {
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: '600',
          }
        },
        'headline': {
          regular: {
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: '800',
          }
        },
        'subheadline': {
          regular: {
            fontSize: '11px',
            lineHeight: '14px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '11px',
            lineHeight: '14px',
            fontWeight: '600',
          }
        },
        'body': {
          regular: {
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: '600',
          }
        },
        'callout': {
          regular: {
            fontSize: '12px',
            lineHeight: '15px',
            fontWeight: '400',
          },
          semibold: {
            fontSize: '12px',
            lineHeight: '15px',
            fontWeight: '600',
          }
        },
        'footnote': {
          regular: {
            fontSize: '10px',
            lineHeight: '13px',
            fontWeight: '400',
          },
          medium: {
            fontSize: '10px',
            lineHeight: '13px',
            fontWeight: '600',
          }
        }
      }
    },
  },
  plugins: [],
};

export default config;