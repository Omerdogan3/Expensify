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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
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
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("is-touch-device");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-moment-proptypes");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("../shapes/DayOfWeekShape");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("./OutsideClickHandler");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = require("../utils/isAfterDay");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("../utils/isDayVisible");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("../utils/isSameDay");

/***/ }),
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = require("../utils/getVisibleDays");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

module.exports = require("./DayPicker");

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("object.values");

/***/ }),
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
/* 50 */,
/* 51 */,
/* 52 */,
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
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
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

var _object3 = __webpack_require__(24);

var _object4 = _interopRequireDefault(_object3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _object = __webpack_require__(38);

var _object2 = _interopRequireDefault(_object);

var _isTouchDevice = __webpack_require__(9);

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _defaultPhrases = __webpack_require__(3);

var _getPhrasePropTypes = __webpack_require__(5);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _isSameDay = __webpack_require__(22);

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _isAfterDay = __webpack_require__(20);

var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

var _getVisibleDays = __webpack_require__(31);

var _getVisibleDays2 = _interopRequireDefault(_getVisibleDays);

var _isDayVisible = __webpack_require__(21);

var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

var _toISODateString = __webpack_require__(13);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _toISOMonthString = __webpack_require__(23);

var _toISOMonthString2 = _interopRequireDefault(_toISOMonthString);

var _ScrollableOrientationShape = __webpack_require__(8);

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _DayOfWeekShape = __webpack_require__(12);

var _DayOfWeekShape2 = _interopRequireDefault(_DayOfWeekShape);

var _constants = __webpack_require__(2);

var _DayPicker = __webpack_require__(36);

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _OutsideClickHandler = __webpack_require__(17);

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
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
  date: _reactMomentProptypes2['default'].momentObj,
  onDateChange: _propTypes2['default'].func,

  focused: _propTypes2['default'].bool,
  onFocusChange: _propTypes2['default'].func,
  onClose: _propTypes2['default'].func,

  keepOpenOnDateSelect: _propTypes2['default'].bool,
  isOutsideRange: _propTypes2['default'].func,
  isDayBlocked: _propTypes2['default'].func,
  isDayHighlighted: _propTypes2['default'].func,

  // DayPicker props
  renderMonth: _propTypes2['default'].func,
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _ScrollableOrientationShape2['default'],
  withPortal: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  firstDayOfWeek: _DayOfWeekShape2['default'],
  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,

  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,

  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onOutsideClick: _propTypes2['default'].func,
  renderDay: _propTypes2['default'].func,
  renderCalendarInfo: _propTypes2['default'].func,

  // accessibility
  onBlur: _propTypes2['default'].func,
  isFocused: _propTypes2['default'].bool,
  showKeyboardShortcuts: _propTypes2['default'].bool,

  // i18n
  monthFormat: _propTypes2['default'].string,
  weekDayFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases)),

  isRTL: _propTypes2['default'].bool
});

var defaultProps = {
  date: undefined, // TODO: use null
  onDateChange: function () {
    function onDateChange() {}

    return onDateChange;
  }(),

  focused: false,
  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),

  keepOpenOnDateSelect: false,
  isOutsideRange: function () {
    function isOutsideRange() {}

    return isOutsideRange;
  }(),
  isDayBlocked: function () {
    function isDayBlocked() {}

    return isDayBlocked;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),

  // DayPicker props
  renderMonth: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: _constants.DAY_SIZE,

  navPrev: null,
  navNext: null,

  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),

  onOutsideClick: null,

  renderDay: null,
  renderCalendarInfo: null,

  // accessibility
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),

  isFocused: false,
  showKeyboardShortcuts: false,

  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,

  isRTL: false
};

var DayPickerSingleDateController = function (_React$Component) {
  _inherits(DayPickerSingleDateController, _React$Component);

  function DayPickerSingleDateController(props) {
    _classCallCheck(this, DayPickerSingleDateController);

    var _this = _possibleConstructorReturn(this, (DayPickerSingleDateController.__proto__ || Object.getPrototypeOf(DayPickerSingleDateController)).call(this, props));

    _this.isTouchDevice = false;
    _this.today = (0, _moment2['default'])();

    _this.modifiers = {
      today: function () {
        function today(day) {
          return _this.isToday(day);
        }

        return today;
      }(),
      blocked: function () {
        function blocked(day) {
          return _this.isBlocked(day);
        }

        return blocked;
      }(),
      'blocked-calendar': function () {
        function blockedCalendar(day) {
          return props.isDayBlocked(day);
        }

        return blockedCalendar;
      }(),
      'blocked-out-of-range': function () {
        function blockedOutOfRange(day) {
          return props.isOutsideRange(day);
        }

        return blockedOutOfRange;
      }(),
      'highlighted-calendar': function () {
        function highlightedCalendar(day) {
          return props.isDayHighlighted(day);
        }

        return highlightedCalendar;
      }(),
      valid: function () {
        function valid(day) {
          return !_this.isBlocked(day);
        }

        return valid;
      }(),
      hovered: function () {
        function hovered(day) {
          return _this.isHovered(day);
        }

        return hovered;
      }(),
      selected: function () {
        function selected(day) {
          return _this.isSelected(day);
        }

        return selected;
      }()
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };

    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
    _this.onDayClick = _this.onDayClick.bind(_this);

    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);

    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_this);
    return _this;
  }

  _createClass(DayPickerSingleDateController, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.isTouchDevice = (0, _isTouchDevice2['default'])();
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var date = nextProps.date,
            focused = nextProps.focused,
            isOutsideRange = nextProps.isOutsideRange,
            isDayBlocked = nextProps.isDayBlocked,
            isDayHighlighted = nextProps.isDayHighlighted,
            initialVisibleMonth = nextProps.initialVisibleMonth,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays;
        var visibleDays = this.state.visibleDays;

        var recomputeOutsideRange = false;
        var recomputeDayBlocked = false;
        var recomputeDayHighlighted = false;

        if (isOutsideRange !== this.props.isOutsideRange) {
          this.modifiers['blocked-out-of-range'] = function (day) {
            return isOutsideRange(day);
          };
          recomputeOutsideRange = true;
        }

        if (isDayBlocked !== this.props.isDayBlocked) {
          this.modifiers['blocked-calendar'] = function (day) {
            return isDayBlocked(day);
          };
          recomputeDayBlocked = true;
        }

        if (isDayHighlighted !== this.props.isDayHighlighted) {
          this.modifiers['highlighted-calendar'] = function (day) {
            return isDayHighlighted(day);
          };
          recomputeDayHighlighted = true;
        }

        var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

        if (numberOfMonths !== this.props.numberOfMonths || enableOutsideDays !== this.props.enableOutsideDays || initialVisibleMonth !== this.props.initialVisibleMonth && !this.props.focused && focused) {
          var newMonthState = this.getStateForNewMonth(nextProps);
          var currentMonth = newMonthState.currentMonth;
          visibleDays = newMonthState.visibleDays;
          this.setState({
            currentMonth: currentMonth,
            visibleDays: visibleDays
          });
        }

        var didDateChange = date !== this.props.date;
        var didFocusChange = focused !== this.props.focused;

        var modifiers = {};

        if (didDateChange) {
          modifiers = this.deleteModifier(modifiers, this.props.date, 'selected');
          modifiers = this.addModifier(modifiers, date, 'selected');
        }

        if (didFocusChange || recomputePropModifiers) {
          (0, _object2['default'])(visibleDays).forEach(function (days) {
            Object.keys(days).forEach(function (day) {
              var momentObj = (0, _moment2['default'])(day);
              if (_this2.isBlocked(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
              }

              if (didFocusChange || recomputeOutsideRange) {
                if (isOutsideRange(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
                }
              }

              if (didFocusChange || recomputeDayBlocked) {
                if (isDayBlocked(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
                }
              }

              if (didFocusChange || recomputeDayHighlighted) {
                if (isDayHighlighted(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
                }
              }
            });
          });
        }

        var today = (0, _moment2['default'])();
        if (!(0, _isSameDay2['default'])(this.today, today)) {
          modifiers = this.deleteModifier(modifiers, this.today, 'today');
          modifiers = this.addModifier(modifiers, today, 'today');
          this.today = today;
        }

        if (Object.keys(modifiers).length > 0) {
          this.setState({
            visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentWillUpdate',
    value: function () {
      function componentWillUpdate() {
        this.today = (0, _moment2['default'])();
      }

      return componentWillUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        if (e) e.preventDefault();
        if (this.isBlocked(day)) return;
        var _props = this.props,
            onDateChange = _props.onDateChange,
            keepOpenOnDateSelect = _props.keepOpenOnDateSelect,
            onFocusChange = _props.onFocusChange,
            onClose = _props.onClose;

        onDateChange(day);
        if (!keepOpenOnDateSelect) {
          onFocusChange({ focused: null });
          onClose({ date: day });
        }
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day) {
        if (this.isTouchDevice) return;
        var _state = this.state,
            hoverDate = _state.hoverDate,
            visibleDays = _state.visibleDays;

        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
        modifiers = this.addModifier(modifiers, day, 'hovered');

        this.setState({
          hoverDate: day,
          visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
        });
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave() {
        var _state2 = this.state,
            hoverDate = _state2.hoverDate,
            visibleDays = _state2.visibleDays;

        if (this.isTouchDevice || !hoverDate) return;

        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');

        this.setState({
          hoverDate: null,
          visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
        });
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'onPrevMonthClick',
    value: function () {
      function onPrevMonthClick() {
        var _props2 = this.props,
            onPrevMonthClick = _props2.onPrevMonthClick,
            numberOfMonths = _props2.numberOfMonths,
            enableOutsideDays = _props2.enableOutsideDays;
        var _state3 = this.state,
            currentMonth = _state3.currentMonth,
            visibleDays = _state3.visibleDays;

        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });

        var prevMonth = currentMonth.clone().subtract(1, 'month');
        var prevMonthVisibleDays = (0, _getVisibleDays2['default'])(prevMonth, 1, enableOutsideDays);

        this.setState({
          currentMonth: prevMonth,
          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
        });

        onPrevMonthClick(prevMonth.clone());
      }

      return onPrevMonthClick;
    }()
  }, {
    key: 'onNextMonthClick',
    value: function () {
      function onNextMonthClick() {
        var _props3 = this.props,
            onNextMonthClick = _props3.onNextMonthClick,
            numberOfMonths = _props3.numberOfMonths,
            enableOutsideDays = _props3.enableOutsideDays;
        var _state4 = this.state,
            currentMonth = _state4.currentMonth,
            visibleDays = _state4.visibleDays;

        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });

        var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
        var nextMonthVisibleDays = (0, _getVisibleDays2['default'])(nextMonth, 1, enableOutsideDays);

        var newCurrentMonth = currentMonth.clone().add(1, 'month');
        this.setState({
          currentMonth: newCurrentMonth,
          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
        });

        onNextMonthClick(newCurrentMonth.clone());
      }

      return onNextMonthClick;
    }()
  }, {
    key: 'getFirstFocusableDay',
    value: function () {
      function getFirstFocusableDay(newMonth) {
        var _this3 = this;

        var _props4 = this.props,
            date = _props4.date,
            numberOfMonths = _props4.numberOfMonths;

        var focusedDate = newMonth.clone().startOf('month');
        if (date) {
          focusedDate = date.clone();
        }

        if (this.isBlocked(focusedDate)) {
          var days = [];
          var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
          var currentDay = focusedDate.clone();
          while (!(0, _isAfterDay2['default'])(currentDay, lastVisibleDay)) {
            currentDay = currentDay.clone().add(1, 'day');
            days.push(currentDay);
          }

          var viableDays = days.filter(function (day) {
            return !_this3.isBlocked(day) && (0, _isAfterDay2['default'])(day, focusedDate);
          });
          if (viableDays.length > 0) focusedDate = viableDays[0];
        }

        return focusedDate;
      }

      return getFirstFocusableDay;
    }()
  }, {
    key: 'getModifiers',
    value: function () {
      function getModifiers(visibleDays) {
        var _this4 = this;

        var modifiers = {};
        Object.keys(visibleDays).forEach(function (month) {
          modifiers[month] = {};
          visibleDays[month].forEach(function (day) {
            modifiers[month][(0, _toISODateString2['default'])(day)] = _this4.getModifiersForDay(day);
          });
        });

        return modifiers;
      }

      return getModifiers;
    }()
  }, {
    key: 'getModifiersForDay',
    value: function () {
      function getModifiersForDay(day) {
        var _this5 = this;

        return new Set(Object.keys(this.modifiers).filter(function (modifier) {
          return _this5.modifiers[modifier](day);
        }));
      }

      return getModifiersForDay;
    }()
  }, {
    key: 'getStateForNewMonth',
    value: function () {
      function getStateForNewMonth(nextProps) {
        var _this6 = this;

        var initialVisibleMonth = nextProps.initialVisibleMonth,
            date = nextProps.date,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays;

        var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
          return date;
        } : function () {
          return _this6.today;
        });
        var currentMonth = initialVisibleMonthThunk();
        var visibleDays = this.getModifiers((0, _getVisibleDays2['default'])(currentMonth, numberOfMonths, enableOutsideDays));
        return { currentMonth: currentMonth, visibleDays: visibleDays };
      }

      return getStateForNewMonth;
    }()
  }, {
    key: 'addModifier',
    value: function () {
      function addModifier(updatedDays, day, modifier) {
        var _props5 = this.props,
            numberOfVisibleMonths = _props5.numberOfMonths,
            enableOutsideDays = _props5.enableOutsideDays,
            orientation = _props5.orientation;
        var _state5 = this.state,
            firstVisibleMonth = _state5.currentMonth,
            visibleDays = _state5.visibleDays;

        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;
        if (orientation !== _constants.VERTICAL_SCROLLABLE) {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }
        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString2['default'])(day);

        var updatedDaysAfterAddition = (0, _object4['default'])({}, updatedDays);
        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });

          updatedDaysAfterAddition = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers.add(modifier);
            return (0, _object4['default'])({}, days, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterAddition);
        } else {
          var monthIso = (0, _toISOMonthString2['default'])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];

          var modifiers = new Set(month[iso]);
          modifiers.add(modifier);
          updatedDaysAfterAddition = (0, _object4['default'])({}, updatedDaysAfterAddition, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterAddition;
      }

      return addModifier;
    }()
  }, {
    key: 'deleteModifier',
    value: function () {
      function deleteModifier(updatedDays, day, modifier) {
        var _props6 = this.props,
            numberOfVisibleMonths = _props6.numberOfMonths,
            enableOutsideDays = _props6.enableOutsideDays,
            orientation = _props6.orientation;
        var _state6 = this.state,
            firstVisibleMonth = _state6.currentMonth,
            visibleDays = _state6.visibleDays;

        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;
        if (orientation !== _constants.VERTICAL_SCROLLABLE) {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }
        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString2['default'])(day);

        var updatedDaysAfterDeletion = (0, _object4['default'])({}, updatedDays);
        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });

          updatedDaysAfterDeletion = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers['delete'](modifier);
            return (0, _object4['default'])({}, days, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterDeletion);
        } else {
          var monthIso = (0, _toISOMonthString2['default'])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];

          var modifiers = new Set(month[iso]);
          modifiers['delete'](modifier);
          updatedDaysAfterDeletion = (0, _object4['default'])({}, updatedDaysAfterDeletion, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterDeletion;
      }

      return deleteModifier;
    }()
  }, {
    key: 'isBlocked',
    value: function () {
      function isBlocked(day) {
        var _props7 = this.props,
            isDayBlocked = _props7.isDayBlocked,
            isOutsideRange = _props7.isOutsideRange;

        return isDayBlocked(day) || isOutsideRange(day);
      }

      return isBlocked;
    }()
  }, {
    key: 'isHovered',
    value: function () {
      function isHovered(day) {
        var _ref = this.state || {},
            hoverDate = _ref.hoverDate;

        return (0, _isSameDay2['default'])(day, hoverDate);
      }

      return isHovered;
    }()
  }, {
    key: 'isSelected',
    value: function () {
      function isSelected(day) {
        return (0, _isSameDay2['default'])(day, this.props.date);
      }

      return isSelected;
    }()
  }, {
    key: 'isToday',
    value: function () {
      function isToday(day) {
        return (0, _isSameDay2['default'])(day, this.today);
      }

      return isToday;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props8 = this.props,
            numberOfMonths = _props8.numberOfMonths,
            orientation = _props8.orientation,
            monthFormat = _props8.monthFormat,
            renderMonth = _props8.renderMonth,
            navPrev = _props8.navPrev,
            navNext = _props8.navNext,
            withPortal = _props8.withPortal,
            focused = _props8.focused,
            enableOutsideDays = _props8.enableOutsideDays,
            hideKeyboardShortcutsPanel = _props8.hideKeyboardShortcutsPanel,
            daySize = _props8.daySize,
            firstDayOfWeek = _props8.firstDayOfWeek,
            renderDay = _props8.renderDay,
            renderCalendarInfo = _props8.renderCalendarInfo,
            isFocused = _props8.isFocused,
            isRTL = _props8.isRTL,
            phrases = _props8.phrases,
            onOutsideClick = _props8.onOutsideClick,
            onBlur = _props8.onBlur,
            showKeyboardShortcuts = _props8.showKeyboardShortcuts,
            weekDayFormat = _props8.weekDayFormat;
        var _state7 = this.state,
            currentMonth = _state7.currentMonth,
            visibleDays = _state7.visibleDays;

        var dayPickerComponent = _react2['default'].createElement(_DayPicker2['default'], {
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          modifiers: visibleDays,
          numberOfMonths: numberOfMonths,
          onDayClick: this.onDayClick,
          onDayMouseEnter: this.onDayMouseEnter,
          onDayMouseLeave: this.onDayMouseLeave,
          onPrevMonthClick: this.onPrevMonthClick,
          onNextMonthClick: this.onNextMonthClick,
          monthFormat: monthFormat,
          withPortal: withPortal,
          hidden: !focused,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          initialVisibleMonth: function () {
            function initialVisibleMonth() {
              return currentMonth;
            }

            return initialVisibleMonth;
          }(),
          firstDayOfWeek: firstDayOfWeek,
          navPrev: navPrev,
          navNext: navNext,
          renderMonth: renderMonth,
          renderDay: renderDay,
          renderCalendarInfo: renderCalendarInfo,
          isFocused: isFocused,
          getFirstFocusableDay: this.getFirstFocusableDay,
          onBlur: onBlur,
          phrases: phrases,
          daySize: daySize,
          isRTL: isRTL,
          showKeyboardShortcuts: showKeyboardShortcuts,
          weekDayFormat: weekDayFormat
        });

        if (onOutsideClick) {
          return _react2['default'].createElement(_OutsideClickHandler2['default'], {
            onOutsideClick: onOutsideClick
          }, dayPickerComponent);
        }

        return dayPickerComponent;
      }

      return render;
    }()
  }]);

  return DayPickerSingleDateController;
}(_react2['default'].Component);

exports['default'] = DayPickerSingleDateController;

DayPickerSingleDateController.propTypes = propTypes;
DayPickerSingleDateController.defaultProps = defaultProps;

/***/ })
/******/ ]);