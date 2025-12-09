function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Editable from '../Editable/Editable';
import { defaultColors, generateCSSVariables } from '../../theme/colors';
import './BlockEditor.css';

/**
 * BlockEditor Component
 * A block-based rich text editor for creating structured content
 *
 * @param {string} title - Article title
 * @param {array} content - Array of content blocks [{id, type, value}]
 * @param {string} publicationDate - Publication date string
 * @param {function} onTitleChange - Callback when title changes
 * @param {function} onContentChange - Callback when content changes
 * @param {function} onPublish - Callback when publish button is clicked
 * @param {function} onImageUpload - Callback for image upload, receives File object
 * @param {function} onImageDelete - Callback for image deletion, receives image URL
 * @param {array} toolbarButtons - Array of enabled toolbar buttons ['h4', 'p', 'img']
 * @param {object} allowedImageTypes - Accepted image file types
 * @param {boolean} showBackButton - Show back button in toolbar
 * @param {function} onBack - Callback when back button is clicked
 * @param {string} publishButtonText - Text for publish button
 * @param {string} titlePlaceholder - Placeholder for title field
 * @param {object} colors - Custom color theme object
 */
var BlockEditor = function BlockEditor(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? [] : _ref$content,
    _ref$publicationDate = _ref.publicationDate,
    publicationDate = _ref$publicationDate === void 0 ? '' : _ref$publicationDate,
    onTitleChange = _ref.onTitleChange,
    onContentChange = _ref.onContentChange,
    onPublish = _ref.onPublish,
    onImageUpload = _ref.onImageUpload,
    onImageDelete = _ref.onImageDelete,
    _ref$toolbarButtons = _ref.toolbarButtons,
    toolbarButtons = _ref$toolbarButtons === void 0 ? ['h4', 'p', 'img'] : _ref$toolbarButtons,
    _ref$allowedImageType = _ref.allowedImageTypes,
    allowedImageTypes = _ref$allowedImageType === void 0 ? '.png, .jpg, .jpeg' : _ref$allowedImageType,
    _ref$showBackButton = _ref.showBackButton,
    showBackButton = _ref$showBackButton === void 0 ? true : _ref$showBackButton,
    onBack = _ref.onBack,
    _ref$publishButtonTex = _ref.publishButtonText,
    publishButtonText = _ref$publishButtonTex === void 0 ? 'Pubblica' : _ref$publishButtonTex,
    _ref$titlePlaceholder = _ref.titlePlaceholder,
    titlePlaceholder = _ref$titlePlaceholder === void 0 ? 'Titolo articolo' : _ref$titlePlaceholder,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? {} : _ref$colors;
  var _useState = useState(content),
    _useState2 = _slicedToArray(_useState, 2),
    blogContent = _useState2[0],
    setBlogContent = _useState2[1];
  var _useState3 = useState(title),
    _useState4 = _slicedToArray(_useState3, 2),
    blogTitle = _useState4[0],
    setBlogTitle = _useState4[1];
  var fileInputRef = React.useRef(null);

  // Merge custom colors with defaults
  var theme = _objectSpread(_objectSpread({}, defaultColors), colors);

  // Sync with external props
  useEffect(function () {
    setBlogContent(content);
  }, [content]);
  useEffect(function () {
    setBlogTitle(title);
  }, [title]);
  var generateId = function generateId() {
    var randomString = Math.random().toString(36).substr(2, 9);
    return '_' + randomString;
  };
  var handleImageUpload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var file, imageUrl, newContent, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            file = event.target.files[0];
            if (file) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!onImageUpload) {
              _context.n = 5;
              break;
            }
            _context.p = 2;
            _context.n = 3;
            return onImageUpload(file);
          case 3:
            imageUrl = _context.v;
            newContent = [].concat(_toConsumableArray(blogContent), [{
              id: generateId(),
              type: 'img',
              value: imageUrl
            }]);
            setBlogContent(newContent);
            if (onContentChange) {
              onContentChange(newContent);
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error("Errore nel caricamento dell'immagine:", _t);
          case 5:
            // Reset input
            event.target.value = '';
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function handleImageUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var addElement = useCallback(function (type) {
    var newContent = [].concat(_toConsumableArray(blogContent), [{
      id: generateId(),
      type: type,
      value: ''
    }]);
    setBlogContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  }, [blogContent, onContentChange]);
  var handleContentBlockChange = useCallback(function (id, newText) {
    var newContent = blogContent.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, {
        value: newText
      }) : item;
    });
    setBlogContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  }, [blogContent, onContentChange]);
  var handleKeyDown = useCallback(function (event, id, type, value) {
    if (event.key === 'Backspace' && (type === 'p' || type === 'h4') && value === '') {
      event.preventDefault();
      var newContent = blogContent.filter(function (item) {
        return item.id !== id;
      });
      setBlogContent(newContent);
      if (onContentChange) {
        onContentChange(newContent);
      }
    }
  }, [blogContent, onContentChange]);
  var deleteImage = useCallback(function (id, imageUrl) {
    // Chiama la callback per eliminare l'immagine dal server (se fornita)
    if (onImageDelete && imageUrl) {
      onImageDelete(imageUrl);
    }

    // Rimuovi l'immagine dal contenuto
    var newContent = blogContent.filter(function (item) {
      return item.id !== id;
    });
    setBlogContent(newContent);
    if (onContentChange) {
      onContentChange(newContent);
    }
  }, [blogContent, onContentChange, onImageDelete]);
  var handleTitleChange = function handleTitleChange(newTitle) {
    setBlogTitle(newTitle);
    if (onTitleChange) {
      onTitleChange(newTitle);
    }
  };
  var handlePublish = function handlePublish(e) {
    e.preventDefault();
    if (onPublish) {
      onPublish(blogTitle, blogContent);
    }
  };

  // Generate inline styles for CSS variables
  var containerStyle = {
    '--block-editor-container-background': theme.containerBackground,
    '--block-editor-toolbar-background': theme.toolbarBackground,
    '--block-editor-toolbar-border': theme.toolbarBorder,
    '--block-editor-toolbar-shadow': theme.toolbarShadow,
    '--block-editor-toolbar-icon-color': theme.toolbarIconColor,
    '--block-editor-toolbar-icon-hover': theme.toolbarIconHover,
    '--block-editor-publish-button-background': theme.publishButtonBackground,
    '--block-editor-publish-button-color': theme.publishButtonColor,
    '--block-editor-publish-button-hover': theme.publishButtonHover,
    '--block-editor-back-button-color': theme.backButtonColor,
    '--block-editor-back-button-hover': theme.backButtonHover,
    '--block-editor-text-color': theme.textColor,
    '--block-editor-heading-color': theme.headingColor,
    '--block-editor-input-border': theme.inputBorder,
    '--block-editor-input-focus-border': theme.inputFocusBorder,
    '--block-editor-date-color': theme.dateColor,
    '--block-editor-divider-color': theme.dividerColor,
    '--block-editor-image-delete-background': theme.imageDeleteBackground,
    '--block-editor-image-delete-color': theme.imageDeleteColor,
    '--block-editor-image-delete-hover-color': theme.imageDeleteHoverColor,
    '--block-editor-image-delete-shadow': theme.imageDeleteShadow,
    '--block-editor-image-delete-hover-shadow': theme.imageDeleteHoverShadow
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "blog-editor-container",
    style: containerStyle
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handlePublish
  }, /*#__PURE__*/React.createElement("div", {
    className: "editor-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row align-items-center"
  }, showBackButton && /*#__PURE__*/React.createElement("div", {
    className: "col-sm-0 col-lg-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "back-button",
    onClick: onBack,
    "aria-label": "Indietro"
  }, "\u2190")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(showBackButton ? 'col-sm-9 col-lg-10' : 'col-sm-9 col-lg-11', " d-flex justify-content-center align-items-center toolbar")
  }, toolbarButtons.includes('h4') && /*#__PURE__*/React.createElement("svg", {
    className: "toolbar-icon",
    onClick: function onClick() {
      return addElement('h4');
    },
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    width: "14",
    viewBox: "0 0 448 512",
    title: "Aggiungi titolo"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32-14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"
  })), toolbarButtons.includes('p') && /*#__PURE__*/React.createElement("svg", {
    className: "toolbar-icon",
    onClick: function onClick() {
      return addElement('p');
    },
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    width: "14",
    viewBox: "0 0 448 512",
    title: "Aggiungi paragrafo"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z"
  })), toolbarButtons.includes('img') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    className: "hidden",
    name: "immagini[]",
    accept: allowedImageTypes,
    onChange: handleImageUpload
  }), /*#__PURE__*/React.createElement("svg", {
    className: "toolbar-icon",
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    xmlns: "http://www.w3.org/2000/svg",
    height: "16",
    width: "16",
    viewBox: "0 0 512 512",
    title: "Aggiungi immagine"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-0 col-sm-3 col-md-3 col-lg-1 d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "publish-button"
  }, publishButtonText))))), /*#__PURE__*/React.createElement("div", {
    className: "container editor-header"
  }, /*#__PURE__*/React.createElement(Editable, {
    tag: "h3",
    placeholder: titlePlaceholder,
    value: blogTitle,
    onChange: handleTitleChange,
    className: "article-title"
  }), /*#__PURE__*/React.createElement("span", {
    className: "publication-date"
  }, publicationDate), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "container editor-content"
  }, blogContent.length > 0 && blogContent.map(function (element) {
    return /*#__PURE__*/React.createElement("div", {
      key: element.id,
      className: "content-block"
    }, element.type === 'img' ? /*#__PURE__*/React.createElement("div", {
      className: "image-block"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "delete-image",
      xmlns: "http://www.w3.org/2000/svg",
      height: "16",
      width: "12",
      viewBox: "0 0 384 512",
      onClick: function onClick() {
        return deleteImage(element.id, element.value);
      },
      title: "Elimina immagine"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
    })), /*#__PURE__*/React.createElement("img", {
      src: element.value,
      alt: "Content",
      className: "content-image"
    })) : /*#__PURE__*/React.createElement(Editable, {
      tag: element.type,
      value: element.value,
      placeholder: "Scrivi qualcosa...",
      onChange: function onChange(newText) {
        return handleContentBlockChange(element.id, newText);
      },
      onKeyDown: function onKeyDown(event) {
        return handleKeyDown(event, element.id, element.type, element.value);
      }
    }));
  })))));
};
BlockEditor.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.oneOf(['h4', 'p', 'img']),
    value: PropTypes.string
  })),
  publicationDate: PropTypes.string,
  onTitleChange: PropTypes.func,
  onContentChange: PropTypes.func,
  onPublish: PropTypes.func,
  onImageUpload: PropTypes.func,
  onImageDelete: PropTypes.func,
  toolbarButtons: PropTypes.arrayOf(PropTypes.oneOf(['h4', 'p', 'img'])),
  allowedImageTypes: PropTypes.string,
  showBackButton: PropTypes.bool,
  onBack: PropTypes.func,
  publishButtonText: PropTypes.string,
  titlePlaceholder: PropTypes.string,
  colors: PropTypes.object
};
export default BlockEditor;