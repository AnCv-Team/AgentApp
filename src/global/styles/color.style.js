const COLOR = {
  BLUE: '#2285E0',
  LIGHT_BLUE: '#62AEFB',
  LIGHTER_BLUE: '#C7EAFF',
  DANGER: '#E04422',
  LIGHT_DANGER: '#FFC4C4',
  LIGHTER_DANGER: '#FFE8E3',
  SUCCESS: '#20D171',
  LIGHT_SUCCESS: '#68F3A8',
  LIGHTER_SUCCESS: '#E3FFF0',
  CLOUD: '#B2E2FE',
  LIGHT_CLOUD: '#E7F6FF',
  YELLOW: '#FFC700',
  LIGHT_YELLOW: '#FFFACD',

  DARK: '#0E1405',
  LIGHT: '#F6F9FB',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#818181',
  LIGHT_GRAY: '#F3F3F3',

  TRANSPARENT: 'transparent',

  setOpacity: (hexColor, opacity) => {
    const hexOpacity = Math.floor(opacity * 255).toString(16);
    return `${hexColor}${hexOpacity}`;
  },
};

Object.freeze(COLOR);

export default COLOR;
