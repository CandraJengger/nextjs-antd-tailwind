module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
    colors: {
      primary: '#1084EC',
      secondary: '#f7fafc',
      violet: '#883677',
      congo: '##FF958C',
      success: '#2dce89',
      warning: '#fb6340',
      danger: '#f5365c',
      dark: '#212529',
      info: '#1CA7EC',
      black: '#2E3A44',
      grey1: '#A0AABF',
      grey2: '#C0C6D4',
      grey3: '#E3E8F1',
      light: '​#adb5bd',
      white: '#FFF',
      transparent: 'transparent'
    }
  },
  plugins: []
};
