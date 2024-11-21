/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "poppins-semibold"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#181C14",
          
"secondary": "#3C3D37",
          
"accent": "#204722",
          
"neutral": "#ECDFCC",
          
"base-100": "#252838",
          
"info": "#007fd3",
          
"success": "#487400",
          
"warning": "#ff8600",
          
"error": "#ff305a",
          },
        },
      ],
    },
  plugins: [
    require('daisyui')
  ],
};
