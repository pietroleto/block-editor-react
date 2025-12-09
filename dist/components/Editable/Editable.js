function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Editable.css';

/**
 * Editable Component
 * A contentEditable wrapper that provides a clean interface for inline editing
 *
 * @param {string} tag - HTML tag to render (h1, h2, h3, h4, h5, h6, p, div, span)
 * @param {function} onChange - Callback when content changes, receives new text
 * @param {string} placeholder - Placeholder text when empty
 * @param {string} value - Controlled value
 * @param {function} onKeyDown - Callback for keydown events
 * @param {object} style - Custom inline styles
 * @param {string} className - Additional CSS classes
 */
var Editable = function Editable(_ref) {
  var _ref$tag = _ref.tag,
    Tag = _ref$tag === void 0 ? 'div' : _ref$tag,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    value = _ref.value,
    onKeyDown = _ref.onKeyDown,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var editableRef = useRef(null);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isEmpty = _useState2[0],
    setIsEmpty = _useState2[1];

  // Update content when value prop changes
  useEffect(function () {
    if (editableRef.current && editableRef.current.textContent !== value) {
      editableRef.current.textContent = value;
      setIsEmpty(value === '');
    }
  }, [value]);
  var handleInput = function handleInput() {
    var newText = editableRef.current.textContent;
    setIsEmpty(newText === '');
    if (onChange) {
      onChange(newText);
    }
  };
  return /*#__PURE__*/React.createElement(Tag, {
    ref: editableRef,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: handleInput,
    onKeyDown: onKeyDown,
    "data-placeholder": placeholder,
    className: "editable-component ".concat(isEmpty ? 'empty' : '', " ").concat(className),
    style: style
  });
};
Editable.propTypes = {
  tag: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onKeyDown: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string
};
Editable.defaultProps = {
  tag: 'div',
  placeholder: '',
  value: '',
  style: {},
  className: ''
};
export default Editable;