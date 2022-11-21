/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'Barlow', 'Public Sans', 'sans-serif']
      },
      colors: {
        'gradient-from' : 'hsl(214, 47%, 23%)',
        'gradient-to' : 'hsl(237, 49%, 15%)',
        'scissors-grad-from' : 'hsl(39, 89%, 49%)',
        'scissors-grad-to' : 'hsl(40, 84%, 53%)',
        'paper-grad-from' : 'hsl(230, 89%, 62%)',
        'paper-grad-to' : 'hsl(230, 89%, 65%)',
        'rock-grad-from' : 'hsl(349, 71%, 52%)',
        'rock-grad-to' : 'hsl(349, 70%, 56%)',
        'lizard-grad-from' : 'hsl(261, 73%, 60%)',
        'lizard-grad-to' : 'hsl(261, 72%, 63%)',
        'spock-grad-from' : 'hsl(189, 59%, 53%)',
        'spock-grad-to' : 'hsl(189, 58%, 57%)',
        'dark-text' : 'hsl(229, 25%, 31%)',
        'score-text' : 'hsl(229, 64%, 46%)',
        'header-outline' : 'hsl(217, 16%, 45%)',
        'rules-bg' : 'rgb(0,0,0,.5)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderWidth: {
        'itemBorder' : '18px'
      },
      boxShadow: {
        'innerShaddow' : 'inset 0 8px 2px rgba(0, 0, 0, 0.4)',
        'outerShaddow' : 'inset 0 -8px 2px rgba(0, 0, 0, 0.4)',
        '1Circle' : 'inset 0 -8px 2px rgba(0, 0, 0, 0.4), 0px 0px 0px 50px rgb(111, 111, 111, 0.2), 0px 0px 0px 100px rgb(111, 111, 111, 0.1), 0px 0px 0px 150px rgb(111, 111, 111, 0.05)',
      },
      fill: {
        'close': "#3B4262",
      },
      keyframes: {
        revealHouse: {
          '0%' : {transform: 'scaleX(0)'},
          '70%' : {transform: 'scaleX(0)'},
          '100%' : {transform: 'scaleX(1)'}
        },
        slideLeft: {
          '0%' : {transform: 'translateX(70%)'},
          '70%' : {transform: 'translateX(70%)'},
          '100%' : {transform: 'translateX(0%)'}
        },
        slideRight: {
          '0%' : {transform: 'translateX(-70%)'},
          '70%' : {transform: 'translateX(-70%)'},
          '100%' : {transform: 'translateX(0%)'}
        },
        fadeInOpacity: {
          '0%' : {opacity:'0'},
          '60%' : {opacity:'0'},
          '70%' : {opacity:'1'},
        },
        transformBonus : {
          '0%' : {transform: 'translate(0,0) rotate(0)'},
          '100%' : {transform: 'translate(0,var(--bonus-translate)) rotate(var(--rotate))'}
        },
        scaleFromZero : {
          '0%' : {transform: 'scale(0)'},
          '100%' : {transform: 'scale(1)'}
        }
      },
      animation: {
        revealHouse: 'revealHouse 2.5s',
        slideLeft: 'slideLeft 2.5s',
        slideRight: 'slideRight 2.5s',
        fadeInOpacity: 'fadeInOpacity 2.5s',
        transformBonus: 'transformBonus 1s',
        scaleFromZero: 'scaleFromZero 1s'
      },
      minWidth: {
        score: '7rem',
        button: '10rem'
      },
      width: {
        lBoard: '45em',
        mdBoard: '40em',
        hecBoard: 'var(--hec-w)',
        circW: 'var(--circ-w)',
        circBorder: 'var(--circ-border)',
      },
      gridTemplateAreas: {
        'smLayout': [
          'a c',
          'b b',
        ],
        'lgLayout': [
          'a b c'
        ]
      },
      rotate: {
        'item1': '90deg'
      },
      screens : {
        'xs': '367px'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
