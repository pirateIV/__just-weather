/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo_50: '#e8eaf6',
        indigo_400: '#5c6bcd',

        custom_blue: '#2023ee',

        white_opacity_08: '#fffffff08',
        white_opacity_24: '#fffffff24',
        white_opacity_32: '#fffffff32',

        gray_100: '#f5f5f5',
        gray_500: '#f5f5f5',
        gray_900: '#212121',
        gray_100_opacity_60: '#f5f5f560',
        gray_600_opacity_60: '#21212160',
        gray_600_opacity_32: '#21212132',
      },

      fontSize: {
        body_1: ['16px', 'regular'],
        body_2: ['16px', 'semibold'],
        body_3: ['16px', 'bold'],

        headline_sm: '21px',
        headline_md: '26px',
        headline_lg: '35px',
        headline_xl: '63px',
      },

      // fontWeight: {
      //   body_1_w: 'regular',
      //   body_2_w: 'semibold',
      //   body_3_w: 'bold',

      //   headline_sm_w: 'semibold',
      //   headline_md_w: 'medium',
      //   headline_lg_w: 'semibold',
      //   headline_xl_w: 'bold',
      // },

      fontFamily: {
        nunito: ['Nunito', 'sans'],
      },
    },
  },
  plugins: [],
};
