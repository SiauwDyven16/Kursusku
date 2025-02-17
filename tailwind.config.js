/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  mode: "jit",
  theme: {
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      spacing: {

        'jauh': '11rem',
        'agakJauh' : '3.75rem',
        'sedang' : '1.5rem',
        'deket' : '0.5rem',
        'deketBgt' : '0.25rem',
        '0.25': '0.25rem', //4px
        '0.5' : '0.5rem',  // 8px
        '0.75': '0.75rem', //12px
        '1.25': '1.25rem',  // 20px
        '1.5' : '1.5rem',  // 24px
        '2.5' : '2.5rem',  // 40px
        '3.5' : '3.5rem',
        '3.75': '3.75rem',
        '7.5' : '7.5rem',  // 120px
        '8.75': '8.75rem',  // 140px

        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, cur) => {
          acc[cur] = `${cur}rem`;
          return acc;
        }, {}),
      },

    extend: {
      fontSize: {
        '0.5': '0.5rem',  // 8px
        '1.5': '1.5rem',  // 24px
        '2.5': '2.5rem',  // 40px
        '7.5': '7.5rem',  // 120px
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, cur) => {
          acc[cur] = `${cur}rem`;
          return acc;
        }, {}),
      },

      backgroundImage: {
        'primary-gradient' : 'linear-gradient(to right, #3B3486, #6744F3)'
      },

      colors: {

        pageCol : "#fafafa",
        primary : "#6744F3",
        secondary: "#EEEEEE",
        tertiary: "#36F4A4",
        
        textCol : "#332941",
        
      },

      fontFamily: {
        jakarta : ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
    
  },

  daisyui: {
    themes: [
        {
            mytheme: {
                primary: "#25252B",
                secondary: "#636376",
                danger : "#e3342f",
                "base-100": "#EFEFEF" /* background color */,
            },
        },
        "white",
    ],
},
  plugins: [
    // require('daisyui'),
  ],
}

