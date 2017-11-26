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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("../shapes/OpenDirectionShape");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _throttle = __webpack_require__(37);

var _throttle2 = _interopRequireDefault(_throttle);

var _isTouchDevice = __webpack_require__(9);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _OpenDirectionShape = __webpack_require__(15);

var _OpenDirectionShape2 = _interopRequireDefault(_OpenDirectionShape);

var _constants = __webpack_require__(2);

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

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  id: _propTypes2['default'].string.isRequired,
  placeholder: _propTypes2['default'].string, // also used as label
  displayValue: _propTypes2['default'].string,
  inputValue: _propTypes2['default'].string,
  screenReaderMessage: _propTypes2['default'].string,
  focused: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  readOnly: _propTypes2['default'].bool,
  openDirection: _OpenDirectionShape2['default'],
  showCaret: _propTypes2['default'].bool,

  onChange: _propTypes2['default'].func,
  onFocus: _propTypes2['default'].func,
  onKeyDownShiftTab: _propTypes2['default'].func,
  onKeyDownTab: _propTypes2['default'].func,

  onKeyDownArrowDown: _propTypes2['default'].func,
  onKeyDownQuestionMark: _propTypes2['default'].func,

  // accessibility
  isFocused: _propTypes2['default'].bool // describes actual DOM focus
});

var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  inputValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,

  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onFocus: function () {
    function onFocus() {}

    return onFocus;
  }(),
  onKeyDownShiftTab: function () {
    function onKeyDownShiftTab() {}

    return onKeyDownShiftTab;
  }(),
  onKeyDownTab: function () {
    function onKeyDownTab() {}

    return onKeyDownTab;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),

  // accessibility
  isFocused: false
};

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = {
      dateString: '',
      isTouchDevice: false
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.setInputRef = _this.setInputRef.bind(_this);
    return _this;
  }

  _createClass(DateInput, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (!this.props.displayValue && nextProps.displayValue) {
          this.setState({
            dateString: ''
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            focused = _props.focused,
            isFocused = _props.isFocused;

        if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

        if (focused && isFocused) {
          this.inputRef.focus();
          this.inputRef.select();
        } else {
          this.inputRef.blur();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onChange',
    value: function () {
      function onChange(e) {
        var _props2 = this.props,
            onChange = _props2.onChange,
            onKeyDownQuestionMark = _props2.onKeyDownQuestionMark;

        var dateString = e.target.value;

        // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
        // special case the `?` key so that it always triggers the appropriate callback, instead of
        // modifying the input value
        if (dateString[dateString.length - 1] === '?') {
          onKeyDownQuestionMark(e);
        } else {
          this.setState({ dateString: dateString });
          onChange(dateString);
        }
      }

      return onChange;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        var _props3 = this.props,
            onKeyDownShiftTab = _props3.onKeyDownShiftTab,
            onKeyDownTab = _props3.onKeyDownTab,
            onKeyDownArrowDown = _props3.onKeyDownArrowDown,
            onKeyDownQuestionMark = _props3.onKeyDownQuestionMark;
        var key = e.key;

        if (key === 'Tab') {
          if (e.shiftKey) {
            onKeyDownShiftTab(e);
          } else {
            onKeyDownTab(e);
          }
        } else if (key === 'ArrowDown') {
          onKeyDownArrowDown(e);
        } else if (key === '?') {
          e.preventDefault();
          onKeyDownQuestionMark(e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'setInputRef',
    value: function () {
      function setInputRef(ref) {
        this.inputRef = ref;
      }

      return setInputRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _state = this.state,
            dateString = _state.dateString,
            isTouch = _state.isTouchDevice;
        var _props4 = this.props,
            id = _props4.id,
            placeholder = _props4.placeholder,
            displayValue = _props4.displayValue,
            inputValue = _props4.inputValue,
            screenReaderMessage = _props4.screenReaderMessage,
            focused = _props4.focused,
            showCaret = _props4.showCaret,
            onFocus = _props4.onFocus,
            disabled = _props4.disabled,
            required = _props4.required,
            readOnly = _props4.readOnly,
            openDirection = _props4.openDirection;

        var displayText = displayValue || inputValue || dateString || placeholder || '';
        var value = inputValue || displayValue || dateString || '';
        var screenReaderMessageId = 'DateInput__screen-reader-message-' + String(id);

        return _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DateInput', {
            'DateInput--with-caret': showCaret && focused,
            'DateInput--disabled': disabled,
            'DateInput--open-down': openDirection === _constants.OPEN_DOWN,
            'DateInput--open-up': openDirection === _constants.OPEN_UP
          })
        }, _react2['default'].createElement('input', {
          'aria-label': placeholder,
          className: 'DateInput__input needsclick',
          type: 'text',
          id: id,
          name: id,
          ref: this.setInputRef,
          value: value,
          onChange: this.onChange,
          onKeyDown: (0, _throttle2['default'])(this.onKeyDown, 300),
          onFocus: onFocus,
          placeholder: placeholder,
          autoComplete: 'off',
          disabled: disabled,
          readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
          required: required,
          'aria-describedby': screenReaderMessage && screenReaderMessageId
        }), screenReaderMessage && _react2['default'].createElement('p', { id: screenReaderMessageId, className: 'screen-reader-only' }, screenReaderMessage), _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])('DateInput__display-text', {
            'DateInput__display-text--has-input': !!value,
            'DateInput__display-text--focused': focused,
            'DateInput__display-text--disabled': disabled
          })
        }, displayText));
      }

      return render;
    }()
  }]);

  return DateInput;
}(_react2['default'].Component);

exports['default'] = DateInput;

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("is-touch-device");

/***/ })

/******/ });