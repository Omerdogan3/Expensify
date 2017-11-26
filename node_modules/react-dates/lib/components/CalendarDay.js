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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-moment-proptypes");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrase");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 61:
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

var _reactAddonsShallowCompare = __webpack_require__(14);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = __webpack_require__(3);

var _getPhrasePropTypes = __webpack_require__(5);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _getPhrase = __webpack_require__(48);

var _getPhrase2 = _interopRequireDefault(_getPhrase);

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
  day: _reactMomentProptypes2['default'].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes2['default'].bool,
  modifiers: _propTypes2['default'].instanceOf(Set),
  isFocused: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].oneOf([0, -1]),
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
});

var defaultProps = {
  day: (0, _moment2['default'])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),

  renderDay: null,

  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay() {
    var _ref;

    _classCallCheck(this, CalendarDay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).call.apply(_ref, [this].concat(args)));

    _this.setButtonRef = _this.setButtonRef.bind(_this);
    return _this;
  }

  _createClass(CalendarDay, [{
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            isFocused = _props.isFocused,
            tabIndex = _props.tabIndex;

        if (tabIndex === 0) {
          if (isFocused || tabIndex !== prevProps.tabIndex) {
            this.buttonRef.focus();
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;

        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;

        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;

        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'setButtonRef',
    value: function () {
      function setButtonRef(ref) {
        this.buttonRef = ref;
      }

      return setButtonRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props2 = this.props,
            day = _props2.day,
            daySize = _props2.daySize,
            isOutsideDay = _props2.isOutsideDay,
            modifiers = _props2.modifiers,
            renderDay = _props2.renderDay,
            tabIndex = _props2.tabIndex,
            _props2$phrases = _props2.phrases,
            chooseAvailableDate = _props2$phrases.chooseAvailableDate,
            dateIsUnavailable = _props2$phrases.dateIsUnavailable;

        if (!day) return _react2['default'].createElement('td', null);

        var className = (0, _classnames2['default'])('CalendarDay', {
          'CalendarDay--outside': isOutsideDay
        }, Array.from(modifiers, function (mod) {
          return 'CalendarDay--' + String(mod);
        }));

        var formattedDate = String(day.format('dddd')) + ', ' + String(day.format('LL'));

        var ariaLabel = (0, _getPhrase2['default'])(chooseAvailableDate, {
          date: formattedDate
        });

        if (_constants.BLOCKED_MODIFIER in modifiers && modifiers[_constants.BLOCKED_MODIFIER](day)) {
          ariaLabel = (0, _getPhrase2['default'])(dateIsUnavailable, { date: formattedDate });
        }

        var daySizeStyles = {
          width: daySize,
          height: daySize - 1
        };

        return _react2['default'].createElement('td', { className: className, style: daySizeStyles }, _react2['default'].createElement('button', {
          type: 'button',
          ref: this.setButtonRef,
          className: 'CalendarDay__button',
          'aria-label': ariaLabel,
          onMouseEnter: function () {
            function onMouseEnter(e) {
              _this2.onDayMouseEnter(day, e);
            }

            return onMouseEnter;
          }(),
          onMouseLeave: function () {
            function onMouseLeave(e) {
              _this2.onDayMouseLeave(day, e);
            }

            return onMouseLeave;
          }(),
          onMouseUp: function () {
            function onMouseUp(e) {
              e.currentTarget.blur();
            }

            return onMouseUp;
          }(),
          onClick: function () {
            function onClick(e) {
              _this2.onDayClick(day, e);
            }

            return onClick;
          }(),
          tabIndex: tabIndex
        }, renderDay ? renderDay(day) : day.format('D')));
      }

      return render;
    }()
  }]);

  return CalendarDay;
}(_react2['default'].Component);

exports['default'] = CalendarDay;

CalendarDay.propTypes = propTypes;
CalendarDay.defaultProps = defaultProps;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });