/**
 * Default color theme for BlockEditor
 * You can customize these colors to match your application's design
 */

export const defaultColors = {
  // Editor container
  containerBackground: '#fff',

  // Toolbar
  toolbarBackground: '#fff',
  toolbarBorder: 'rgba(0, 0, 0, .05)',
  toolbarShadow: '0px 5px 9px -6px rgba(0, 0, 0, .1)',
  toolbarIconColor: 'rgba(0, 0, 0, .4)',
  toolbarIconHover: 'rgba(0, 0, 0, .7)',

  // Buttons
  publishButtonBackground: '#000',
  publishButtonColor: '#fff',
  publishButtonHover: '#333',

  backButtonColor: 'rgba(0, 0, 0, .6)',
  backButtonHover: 'rgba(0, 0, 0, .9)',

  // Content
  textColor: '#000',
  headingColor: '#000',

  // Inputs
  inputBorder: 'rgba(0, 0, 0, .1)',
  inputFocusBorder: 'rgba(0, 0, 0, .2)',

  // Date/Meta
  dateColor: 'rgba(0, 0, 0, .3)',

  // Dividers
  dividerColor: 'rgba(0, 0, 0, .3)',

  // Image delete button
  imageDeleteBackground: '#fff',
  imageDeleteColor: 'red',
  imageDeleteHoverColor: 'darkred',
  imageDeleteShadow: '0px 0px 19px -7px #000000',
  imageDeleteHoverShadow: '0px 0px 25px -5px #000000'
};

/**
 * Generate CSS variables from color object
 * @param {Object} colors - Color configuration object
 * @returns {string} CSS variables string
 */
export const generateCSSVariables = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => `--block-editor-${camelToKebab(key)}: ${value};`)
    .join('\n  ');
};

/**
 * Convert camelCase to kebab-case
 * @param {string} str - camelCase string
 * @returns {string} kebab-case string
 */
const camelToKebab = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
