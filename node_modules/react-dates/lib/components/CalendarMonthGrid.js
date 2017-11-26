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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("airbnb-prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-moment-proptypes");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("../shapes/DayOfWeekShape");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("consolidated-events");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = require("../utils/isAfterDay");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("../utils/toISOMonthString");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("object.assign");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("../utils/getCalendarMonthWidth");

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("../utils/getTransformStyles");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

module.exports = require("../utils/isTransitionEndSupported");

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("./CalendarMonth");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
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

var _object = __webpack_require__(24);

var _object2 = _interopRequireDefault(_object);

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

var _consolidatedEvents = __webpack_require__(18);

var _defaultPhrases = __webpack_require__(3);

var _getPhrasePropTypes = __webpack_require__(5);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _CalendarMonth = __webpack_require__(52);

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _isTransitionEndSupported = __webpack_require__(50);

var _isTransitionEndSupported2 = _interopRequireDefault(_isTransitionEndSupported);

var _getTransformStyles = __webpack_require__(30);

var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

var _getCalendarMonthWidth = __webpack_require__(28);

var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

var _toISOMonthString = __webpack_require__(23);

var _toISOMonthString2 = _interopRequireDefault(_toISOMonthString);

var _isAfterDay = __webpack_require__(20);

var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

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
}

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  enableOutsideDays: _propTypes2['default'].bool,
  firstVisibleMonthIndex: _propTypes2['default'].number,
  initialMonth: _reactMomentProptypes2['default'].momentObj,
  isAnimating: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  modifiers: _propTypes2['default'].object,
  orientation: _ScrollableOrientationShape2['default'],
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  onMonthTransitionEnd: _propTypes2['default'].func,
  renderMonth: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,
  transformValue: _propTypes2['default'].string,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  focusedDate: _reactMomentProptypes2['default'].momentObj, // indicates focusable day
  isFocused: _propTypes2['default'].bool, // indicates whether or not to move focus to focusable day
  firstDayOfWeek: _DayOfWeekShape2['default'],

  // i18n
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
});

var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  initialMonth: (0, _moment2['default'])(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
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
  onMonthTransitionEnd: function () {
    function onMonthTransitionEnd() {}

    return onMonthTransitionEnd;
  }(),

  renderMonth: null,
  renderDay: null,
  transformValue: 'none',
  daySize: _constants.DAY_SIZE,
  focusedDate: null,
  isFocused: false,
  firstDayOfWeek: null,

  // i18n
  monthFormat: 'MMMM YYYY', // english locale
  phrases: _defaultPhrases.CalendarDayPhrases
};

function getMonths(initialMonth, numberOfMonths, withoutTransitionMonths) {
  var month = initialMonth.clone();
  if (!withoutTransitionMonths) month = month.subtract(1, 'month');

  var months = [];
  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }

  return months;
}

var CalendarMonthGrid = function (_React$Component) {
  _inherits(CalendarMonthGrid, _React$Component);

  function CalendarMonthGrid(props) {
    _classCallCheck(this, CalendarMonthGrid);

    var _this = _possibleConstructorReturn(this, (CalendarMonthGrid.__proto__ || Object.getPrototypeOf(CalendarMonthGrid)).call(this, props));

    var withoutTransitionMonths = props.orientation === _constants.VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };

    _this.isTransitionEndSupported = (0, _isTransitionEndSupported2['default'])();
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
    _this.setContainerRef = _this.setContainerRef.bind(_this);
    return _this;
  }

  _createClass(CalendarMonthGrid, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.eventHandle = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var initialMonth = nextProps.initialMonth,
            numberOfMonths = nextProps.numberOfMonths,
            orientation = nextProps.orientation;
        var months = this.state.months;

        var hasMonthChanged = !this.props.initialMonth.isSame(initialMonth, 'month');
        var hasNumberOfMonthsChanged = this.props.numberOfMonths !== numberOfMonths;
        var newMonths = months;

        if (hasMonthChanged && !hasNumberOfMonthsChanged) {
          if ((0, _isAfterDay2['default'])(initialMonth, this.props.initialMonth)) {
            newMonths = months.slice(1);
            newMonths.push(months[months.length - 1].clone().add(1, 'month'));
          } else {
            newMonths = months.slice(0, months.length - 1);
            newMonths.unshift(months[0].clone().subtract(1, 'month'));
          }
        }

        if (hasNumberOfMonthsChanged) {
          var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
          newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
        }

        this.setState({
          months: newMonths
        });
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
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate() {
        var _props = this.props,
            isAnimating = _props.isAnimating,
            onMonthTransitionEnd = _props.onMonthTransitionEnd;

        // For IE9, immediately call onMonthTransitionEnd instead of
        // waiting for the animation to complete

        if (!this.isTransitionEndSupported && isAnimating) {
          onMonthTransitionEnd();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        (0, _consolidatedEvents.removeEventListener)(this.eventHandle);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'onTransitionEnd',
    value: function () {
      function onTransitionEnd() {
        this.props.onMonthTransitionEnd();
      }

      return onTransitionEnd;
    }()
  }, {
    key: 'setContainerRef',
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            enableOutsideDays = _props2.enableOutsideDays,
            firstVisibleMonthIndex = _props2.firstVisibleMonthIndex,
            isAnimating = _props2.isAnimating,
            modifiers = _props2.modifiers,
            numberOfMonths = _props2.numberOfMonths,
            monthFormat = _props2.monthFormat,
            orientation = _props2.orientation,
            transformValue = _props2.transformValue,
            daySize = _props2.daySize,
            onDayMouseEnter = _props2.onDayMouseEnter,
            onDayMouseLeave = _props2.onDayMouseLeave,
            onDayClick = _props2.onDayClick,
            renderMonth = _props2.renderMonth,
            renderDay = _props2.renderDay,
            onMonthTransitionEnd = _props2.onMonthTransitionEnd,
            firstDayOfWeek = _props2.firstDayOfWeek,
            focusedDate = _props2.focusedDate,
            isFocused = _props2.isFocused,
            phrases = _props2.phrases;
        var months = this.state.months;

        var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
        var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;

        var className = (0, _classnames2['default'])('CalendarMonthGrid', {
          'CalendarMonthGrid--horizontal': isHorizontal,
          'CalendarMonthGrid--vertical': isVertical,
          'CalendarMonthGrid--vertical-scrollable': isVerticalScrollable,
          'CalendarMonthGrid--animating': isAnimating
        });

        var calendarMonthWidth = (0, _getCalendarMonthWidth2['default'])(daySize);

        var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;

        var style = (0, _object2['default'])({}, (0, _getTransformStyles2['default'])(transformValue), {
          width: width
        });

        return _react2['default'].createElement('div', {
          ref: this.setContainerRef,
          className: className,
          style: style,
          onTransitionEnd: onMonthTransitionEnd
        }, months.map(function (month, i) {
          var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
          var monthString = (0, _toISOMonthString2['default'])(month);
          return _react2['default'].createElement(_CalendarMonth2['default'], {
            key: monthString,
            month: month,
            isVisible: isVisible,
            enableOutsideDays: enableOutsideDays,
            modifiers: modifiers[monthString],
            monthFormat: monthFormat,
            orientation: orientation,
            onDayMouseEnter: onDayMouseEnter,
            onDayMouseLeave: onDayMouseLeave,
            onDayClick: onDayClick,
            renderMonth: renderMonth,
            renderDay: renderDay,
            firstDayOfWeek: firstDayOfWeek,
            daySize: daySize,
            focusedDate: isVisible ? focusedDate : null,
            isFocused: isFocused,
            phrases: phrases
          });
        }));
      }

      return render;
    }()
  }]);

  return CalendarMonthGrid;
}(_react2['default'].Component);

exports['default'] = CalendarMonthGrid;

CalendarMonthGrid.propTypes = propTypes;
CalendarMonthGrid.defaultProps = defaultProps;

/***/ })
/******/ ]);