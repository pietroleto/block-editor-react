function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Default color theme for BlockEditor
 * You can customize these colors to match your application's design
 */

export var defaultColors = {
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
export var generateCSSVariables = function generateCSSVariables(colors) {
  return Object.entries(colors).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return "--block-editor-".concat(camelToKebab(key), ": ").concat(value, ";");
  }).join('\n  ');
};

/**
 * Convert camelCase to kebab-case
 * @param {string} str - camelCase string
 * @returns {string} kebab-case string
 */
var camelToKebab = function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};