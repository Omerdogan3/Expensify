module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function () {
      function render() {
        return _react2["default"].createElement(
          "svg",
          _extends({ viewBox: "0 0 12 12" }, this.props),
          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
        );
      }

      return render;
    }()
  }]);

  return SVG;
}(_react2["default"].Component);

exports["default"] = SVG;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.KeyboardShortcutRow = KeyboardShortcutRow;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = __webpack_require__(3);

var _getPhrasePropTypes = __webpack_require__(5);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _close = __webpack_require__(11);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TOP_LEFT = exports.TOP_LEFT = 'top-left';
var TOP_RIGHT = exports.TOP_RIGHT = 'top-right';
var BOTTOM_RIGHT = exports.BOTTOM_RIGHT = 'bottom-right';

var propTypes = {
  block: _propTypes2['default'].bool,
  buttonLocation: _propTypes2['default'].oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
  showKeyboardShortcutsPanel: _propTypes2['default'].bool,
  openKeyboardShortcutsPanel: _propTypes2['default'].func,
  closeKeyboardShortcutsPanel: _propTypes2['default'].func,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerKeyboardShortcutsPhrases))
};

var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function () {
    function openKeyboardShortcutsPanel() {}

    return openKeyboardShortcutsPanel;
  }(),
  closeKeyboardShortcutsPanel: function () {
    function closeKeyboardShortcutsPanel() {}

    return closeKeyboardShortcutsPanel;
  }(),

  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases
};

function KeyboardShortcutRow(_ref) {
  var unicode = _ref.unicode,
      label = _ref.label,
      action = _ref.action;

  return _react2['default'].createElement('li', { className: 'KeyboardShortcutRow' }, _react2['default'].createElement('div', {
    className: 'KeyboardShortcutRow__key-container'
  }, _react2['default'].createElement('span', {
    className: 'KeyboardShortcutRow__key',
    role: 'img',
    'aria-label': label
  }, unicode)), _react2['default'].createElement('div', { className: 'KeyboardShortcutRow__action' }, action));
}

KeyboardShortcutRow.propTypes = {
  unicode: _propTypes2['default'].string.isRequired,
  label: _propTypes2['default'].string.isRequired,
  action: _propTypes2['default'].string.isRequired
};

var DayPickerKeyboardShortcuts = function (_React$Component) {
  _inherits(DayPickerKeyboardShortcuts, _React$Component);

  function DayPickerKeyboardShortcuts() {
    var _ref2;

    _classCallCheck(this, DayPickerKeyboardShortcuts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref2 = DayPickerKeyboardShortcuts.__proto__ || Object.getPrototypeOf(DayPickerKeyboardShortcuts)).call.apply(_ref2, [this].concat(args)));

    _this.onClick = _this.onClick.bind(_this);
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind(_this);
    return _this;
  }

  _createClass(DayPickerKeyboardShortcuts, [{
    key: 'onClick',
    value: function () {
      function onClick() {
        var _this2 = this;

        var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel;

        // we want to return focus to this button after closing the keyboard shortcuts panel

        openKeyboardShortcutsPanel(function () {
          _this2.showKeyboardShortcutsButton.focus();
        });
      }

      return onClick;
    }()
  }, {
    key: 'setShowKeyboardShortcutsButtonRef',
    value: function () {
      function setShowKeyboardShortcutsButtonRef(ref) {
        this.showKeyboardShortcutsButton = ref;
      }

      return setShowKeyboardShortcutsButtonRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            block = _props.block,
            buttonLocation = _props.buttonLocation,
            showKeyboardShortcutsPanel = _props.showKeyboardShortcutsPanel,
            closeKeyboardShortcutsPanel = _props.closeKeyboardShortcutsPanel,
            phrases = _props.phrases;

        var keyboardShortcuts = [{
          unicode: '↵',
          label: phrases.enterKey,
          action: phrases.selectFocusedDate
        }, {
          unicode: '←/→',
          label: phrases.leftArrowRightArrow,
          action: phrases.moveFocusByOneDay
        }, {
          unicode: '↑/↓',
          label: phrases.upArrowDownArrow,
          action: phrases.moveFocusByOneWeek
        }, {
          unicode: 'PgUp/PgDn',
          label: phrases.pageUpPageDown,
          action: phrases.moveFocusByOneMonth
        }, {
          unicode: 'Home/End',
          label: phrases.homeEnd,
          action: phrases.moveFocustoStartAndEndOfWeek
        }, {
          unicode: 'Esc',
          label: phrases.escape,
          action: phrases.returnFocusToInput
        }, {
          unicode: '?',
          label: phrases.questionMark,
          action: phrases.openThisPanel
        }];

        var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;

        return _react2['default'].createElement('div', null, _react2['default'].createElement('button', {
          ref: this.setShowKeyboardShortcutsButtonRef,
          className: (0, _classnames2['default'])('DayPickerKeyboardShortcuts__show', {
            'DayPickerKeyboardShortcuts__show--bottom-right': buttonLocation === BOTTOM_RIGHT,
            'DayPickerKeyboardShortcuts__show--top-right': buttonLocation === TOP_RIGHT,
            'DayPickerKeyboardShortcuts__show--top-left': buttonLocation === TOP_LEFT
          }),
          type: 'button',
          'aria-label': toggleButtonText,
          onClick: this.onClick,
          onMouseUp: function () {
            function onMouseUp(e) {
              e.currentTarget.blur();
            }

            return onMouseUp;
          }()
        }, _react2['default'].createElement('span', { className: 'DayPickerKeyboardShortcuts__show_span' }, '?')), showKeyboardShortcutsPanel && _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DayPickerKeyboardShortcuts__panel', {
            'DayPickerKeyboardShortcuts__panel--block': block
          }),
          role: 'dialog',
          'aria-labelledby': 'DayPickerKeyboardShortcuts__title'
        }, _react2['default'].createElement('div', {
          id: 'DayPickerKeyboardShortcuts__title',
          className: 'DayPickerKeyboardShortcuts__title'
        }, phrases.keyboardShortcuts), _react2['default'].createElement('button', {
          className: 'DayPickerKeyboardShortcuts__close',
          type: 'button',
          'aria-label': phrases.hideKeyboardShortcutsPanel,
          onClick: closeKeyboardShortcutsPanel,
          onKeyDown: function () {
            function onKeyDown(e) {
              // Because the close button is the only focusable element inside of the panel, this
              // amount to a very basic focus trap. The user can exit the panel by "pressing" the
              // close button or hitting escape
              if (e.key === 'Tab') {
                e.preventDefault();
              }
            }

            return onKeyDown;
          }()
        }, _react2['default'].createElement(_close2['default'], null)), _react2['default'].createElement('ul', { className: 'DayPickerKeyboardShortcuts__list' }, keyboardShortcuts.map(function (_ref3) {
          var unicode = _ref3.unicode,
              label = _ref3.label,
              action = _ref3.action;
          return _react2['default'].createElement(KeyboardShortcutRow, { key: label, unicode: unicode, label: label, action: action });
        }))));
      }

      return render;
    }()
  }]);

  return DayPickerKeyboardShortcuts;
}(_react2['default'].Component);

exports['default'] = DayPickerKeyboardShortcuts;

DayPickerKeyboardShortcuts.propTypes = (0, _airbnbPropTypes.forbidExtraProps)(propTypes);
DayPickerKeyboardShortcuts.defaultProps = defaultProps;

/***/ })

/******/ });