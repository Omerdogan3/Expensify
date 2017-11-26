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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("../shapes/DayOfWeekShape");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("../utils/isSameDay");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("../utils/getCalendarMonthWeeks");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("./CalendarDay");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 62:
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

var _CalendarDay = __webpack_require__(51);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _getCalendarMonthWeeks = __webpack_require__(47);

var _getCalendarMonthWeeks2 = _interopRequireDefault(_getCalendarMonthWeeks);

var _isSameDay = __webpack_require__(22);

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _toISODateString = __webpack_require__(13);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _ScrollableOrientationShape = __webpack_require__(8);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _DayOfWeekShape = __webpack_require__(12);

var _DayOfWeekShape2 = _interopRequireDefault(_DayOfWeekShape);

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
} /* eslint react/no-array-index-key: 0 */

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  month: _reactMomentProptypes2['default'].momentObj,
  isVisible: _propTypes2['default'].bool,
  enableOutsideDays: _propTypes2['default'].bool,
  modifiers: _propTypes2['default'].object,
  orientation: _ScrollableOrientationShape2['default'],
  daySize: _airbnbPropTypes.nonNegativeInteger,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderMonth: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,
  firstDayOfWeek: _DayOfWeekShape2['default'],

  focusedDate: _reactMomentProptypes2['default'].momentObj, // indicates focusable day
  isFocused: _propTypes2['default'].bool, // indicates whether or not to move focus to focusable day

  // i18n
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
});

var defaultProps = {
  month: (0, _moment2['default'])(),
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
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

  renderMonth: null,
  renderDay: null,
  firstDayOfWeek: null,

  focusedDate: null,
  isFocused: false,

  // i18n
  monthFormat: 'MMMM YYYY', // english locale
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarMonth = function (_React$Component) {
  _inherits(CalendarMonth, _React$Component);

  function CalendarMonth(props) {
    _classCallCheck(this, CalendarMonth);

    var _this = _possibleConstructorReturn(this, (CalendarMonth.__proto__ || Object.getPrototypeOf(CalendarMonth)).call(this, props));

    _this.state = {
      weeks: (0, _getCalendarMonthWeeks2['default'])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment2['default'].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var month = nextProps.month,
            enableOutsideDays = nextProps.enableOutsideDays,
            firstDayOfWeek = nextProps.firstDayOfWeek;

        if (!month.isSame(this.props.month) || enableOutsideDays !== this.props.enableOutsideDays || firstDayOfWeek !== this.props.firstDayOfWeek) {
          this.setState({
            weeks: (0, _getCalendarMonthWeeks2['default'])(month, enableOutsideDays, firstDayOfWeek == null ? _moment2['default'].localeData().firstDayOfWeek() : firstDayOfWeek)
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            month = _props.month,
            monthFormat = _props.monthFormat,
            orientation = _props.orientation,
            isVisible = _props.isVisible,
            modifiers = _props.modifiers,
            onDayClick = _props.onDayClick,
            onDayMouseEnter = _props.onDayMouseEnter,
            onDayMouseLeave = _props.onDayMouseLeave,
            renderMonth = _props.renderMonth,
            renderDay = _props.renderDay,
            daySize = _props.daySize,
            focusedDate = _props.focusedDate,
            isFocused = _props.isFocused,
            phrases = _props.phrases;
        var weeks = this.state.weeks;

        var monthTitle = renderMonth ? renderMonth(month) : month.format(monthFormat);

        var calendarMonthClasses = (0, _classnames2['default'])('CalendarMonth', {
          'CalendarMonth--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
          'CalendarMonth--vertical': orientation === _constants.VERTICAL_ORIENTATION,
          'CalendarMonth--vertical-scrollable': orientation === _constants.VERTICAL_SCROLLABLE
        });

        return _react2['default'].createElement('div', { className: calendarMonthClasses, 'data-visible': isVisible }, _react2['default'].createElement('div', {
          id: 'CalendarMonth__caption',
          className: 'CalendarMonth__caption js-CalendarMonth__caption'
        }, _react2['default'].createElement('strong', null, monthTitle)), _react2['default'].createElement('table', { role: 'presentation' }, _react2['default'].createElement('tbody', { className: 'js-CalendarMonth__grid' }, weeks.map(function (week, i) {
          return _react2['default'].createElement('tr', { key: i }, week.map(function (day, dayOfWeek) {
            return _react2['default'].createElement(_CalendarDay2['default'], {
              day: day,
              daySize: daySize,
              isOutsideDay: !day || day.month() !== month.month(),
              tabIndex: isVisible && (0, _isSameDay2['default'])(day, focusedDate) ? 0 : -1,
              isFocused: isFocused,
              key: dayOfWeek,
              onDayMouseEnter: onDayMouseEnter,
              onDayMouseLeave: onDayMouseLeave,
              onDayClick: onDayClick,
              renderDay: renderDay,
              phrases: phrases,
              modifiers: modifiers[(0, _toISODateString2['default'])(day)]
            });
          }));
        }))));
      }

      return render;
    }()
  }]);

  return CalendarMonth;
}(_react2['default'].Component);

exports['default'] = CalendarMonth;

CalendarMonth.propTypes = propTypes;
CalendarMonth.defaultProps = defaultProps;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ })

/******/ });