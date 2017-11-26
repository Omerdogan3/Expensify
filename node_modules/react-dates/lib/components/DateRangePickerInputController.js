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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("../utils/toISODateString");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("../shapes/OpenDirectionShape");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("../shapes/IconPositionShape");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("../../constants");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("../defaultPhrases");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("../utils/isBeforeDay");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("../utils/toLocalizedDateString");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("../utils/toMomentObject");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("../utils/getPhrasePropTypes");

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = require("./DateRangePickerInput");

/***/ }),

/***/ 67:
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

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _reactMomentProptypes = __webpack_require__(10);

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__(1);

var _OpenDirectionShape = __webpack_require__(15);

var _OpenDirectionShape2 = _interopRequireDefault(_OpenDirectionShape);

var _defaultPhrases = __webpack_require__(3);

var _getPhrasePropTypes = __webpack_require__(5);

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _DateRangePickerInput = __webpack_require__(54);

var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

var _IconPositionShape = __webpack_require__(19);

var _IconPositionShape2 = _interopRequireDefault(_IconPositionShape);

var _toMomentObject = __webpack_require__(34);

var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

var _toLocalizedDateString = __webpack_require__(33);

var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

var _toISODateString = __webpack_require__(13);

var _toISODateString2 = _interopRequireDefault(_toISODateString);

var _isInclusivelyAfterDay = __webpack_require__(16);

var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

var _isBeforeDay = __webpack_require__(32);

var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

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
  startDate: _reactMomentProptypes2['default'].momentObj,
  startDateId: _propTypes2['default'].string,
  startDatePlaceholderText: _propTypes2['default'].string,
  isStartDateFocused: _propTypes2['default'].bool,

  endDate: _reactMomentProptypes2['default'].momentObj,
  endDateId: _propTypes2['default'].string,
  endDatePlaceholderText: _propTypes2['default'].string,
  isEndDateFocused: _propTypes2['default'].bool,

  screenReaderMessage: _propTypes2['default'].string,
  showClearDates: _propTypes2['default'].bool,
  showCaret: _propTypes2['default'].bool,
  showDefaultInputIcon: _propTypes2['default'].bool,
  inputIconPosition: _IconPositionShape2['default'],
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  readOnly: _propTypes2['default'].bool,
  openDirection: _OpenDirectionShape2['default'],

  keepOpenOnDateSelect: _propTypes2['default'].bool,
  reopenPickerOnClearDates: _propTypes2['default'].bool,
  withFullScreenPortal: _propTypes2['default'].bool,
  minimumNights: _airbnbPropTypes.nonNegativeInteger,
  isOutsideRange: _propTypes2['default'].func,
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),

  onFocusChange: _propTypes2['default'].func,
  onClose: _propTypes2['default'].func,
  onDatesChange: _propTypes2['default'].func,
  onArrowDown: _propTypes2['default'].func,
  onQuestionMark: _propTypes2['default'].func,

  customInputIcon: _propTypes2['default'].node,
  customArrowIcon: _propTypes2['default'].node,
  customCloseIcon: _propTypes2['default'].node,

  // accessibility
  isFocused: _propTypes2['default'].bool,

  // i18n
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DateRangePickerInputPhrases)),

  isRTL: _propTypes2['default'].bool
});

var defaultProps = {
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,

  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,

  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,

  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  minimumNights: 1,
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
    }

    return isOutsideRange;
  }(),
  displayFormat: function () {
    function displayFormat() {
      return _moment2['default'].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),

  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  onDatesChange: function () {
    function onDatesChange() {}

    return onDatesChange;
  }(),
  onArrowDown: function () {
    function onArrowDown() {}

    return onArrowDown;
  }(),
  onQuestionMark: function () {
    function onQuestionMark() {}

    return onQuestionMark;
  }(),

  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // accessibility
  isFocused: false,

  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,

  isRTL: false
};

var DateRangePickerInputController = function (_React$Component) {
  _inherits(DateRangePickerInputController, _React$Component);

  function DateRangePickerInputController(props) {
    _classCallCheck(this, DateRangePickerInputController);

    var _this = _possibleConstructorReturn(this, (DateRangePickerInputController.__proto__ || Object.getPrototypeOf(DateRangePickerInputController)).call(this, props));

    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.onStartDateChange = _this.onStartDateChange.bind(_this);
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
    _this.onEndDateChange = _this.onEndDateChange.bind(_this);
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
    _this.clearDates = _this.clearDates.bind(_this);
    return _this;
  }

  _createClass(DateRangePickerInputController, [{
    key: 'onClearFocus',
    value: function () {
      function onClearFocus() {
        var _props = this.props,
            onFocusChange = _props.onFocusChange,
            onClose = _props.onClose,
            startDate = _props.startDate,
            endDate = _props.endDate;

        onFocusChange(null);
        onClose({ startDate: startDate, endDate: endDate });
      }

      return onClearFocus;
    }()
  }, {
    key: 'onEndDateChange',
    value: function () {
      function onEndDateChange(endDateString) {
        var _props2 = this.props,
            startDate = _props2.startDate,
            isOutsideRange = _props2.isOutsideRange,
            minimumNights = _props2.minimumNights,
            keepOpenOnDateSelect = _props2.keepOpenOnDateSelect,
            onDatesChange = _props2.onDatesChange;

        var endDate = (0, _toMomentObject2['default'])(endDateString, this.getDisplayFormat());

        var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && (0, _isBeforeDay2['default'])(endDate, startDate.clone().add(minimumNights, 'days')));
        if (isEndDateValid) {
          onDatesChange({ startDate: startDate, endDate: endDate });
          if (!keepOpenOnDateSelect) this.onClearFocus();
        } else {
          onDatesChange({
            startDate: startDate,
            endDate: null
          });
        }
      }

      return onEndDateChange;
    }()
  }, {
    key: 'onEndDateFocus',
    value: function () {
      function onEndDateFocus() {
        var _props3 = this.props,
            startDate = _props3.startDate,
            onFocusChange = _props3.onFocusChange,
            withFullScreenPortal = _props3.withFullScreenPortal,
            disabled = _props3.disabled;

        if (!startDate && withFullScreenPortal && !disabled) {
          // When the datepicker is full screen, we never want to focus the end date first
          // because there's no indication that that is the case once the datepicker is open and it
          // might confuse the user
          onFocusChange(_constants.START_DATE);
        } else if (!disabled) {
          onFocusChange(_constants.END_DATE);
        }
      }

      return onEndDateFocus;
    }()
  }, {
    key: 'onStartDateChange',
    value: function () {
      function onStartDateChange(startDateString) {
        var startDate = (0, _toMomentObject2['default'])(startDateString, this.getDisplayFormat());

        var endDate = this.props.endDate;
        var _props4 = this.props,
            isOutsideRange = _props4.isOutsideRange,
            minimumNights = _props4.minimumNights,
            onDatesChange = _props4.onDatesChange,
            onFocusChange = _props4.onFocusChange;

        var isStartDateValid = startDate && !isOutsideRange(startDate);
        if (isStartDateValid) {
          if (startDate && (0, _isBeforeDay2['default'])(endDate, startDate.clone().add(minimumNights, 'days'))) {
            endDate = null;
          }

          onDatesChange({ startDate: startDate, endDate: endDate });
          onFocusChange(_constants.END_DATE);
        } else {
          onDatesChange({
            startDate: null,
            endDate: endDate
          });
        }
      }

      return onStartDateChange;
    }()
  }, {
    key: 'onStartDateFocus',
    value: function () {
      function onStartDateFocus() {
        if (!this.props.disabled) {
          this.props.onFocusChange(_constants.START_DATE);
        }
      }

      return onStartDateFocus;
    }()
  }, {
    key: 'getDisplayFormat',
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;

        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: 'getDateString',
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();
        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }
        return (0, _toLocalizedDateString2['default'])(date);
      }

      return getDateString;
    }()
  }, {
    key: 'clearDates',
    value: function () {
      function clearDates() {
        var _props5 = this.props,
            onDatesChange = _props5.onDatesChange,
            reopenPickerOnClearDates = _props5.reopenPickerOnClearDates,
            onFocusChange = _props5.onFocusChange;

        onDatesChange({ startDate: null, endDate: null });
        if (reopenPickerOnClearDates) {
          onFocusChange(_constants.START_DATE);
        }
      }

      return clearDates;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props6 = this.props,
            startDate = _props6.startDate,
            startDateId = _props6.startDateId,
            startDatePlaceholderText = _props6.startDatePlaceholderText,
            isStartDateFocused = _props6.isStartDateFocused,
            endDate = _props6.endDate,
            endDateId = _props6.endDateId,
            endDatePlaceholderText = _props6.endDatePlaceholderText,
            isEndDateFocused = _props6.isEndDateFocused,
            screenReaderMessage = _props6.screenReaderMessage,
            showClearDates = _props6.showClearDates,
            showCaret = _props6.showCaret,
            showDefaultInputIcon = _props6.showDefaultInputIcon,
            inputIconPosition = _props6.inputIconPosition,
            customInputIcon = _props6.customInputIcon,
            customArrowIcon = _props6.customArrowIcon,
            customCloseIcon = _props6.customCloseIcon,
            disabled = _props6.disabled,
            required = _props6.required,
            readOnly = _props6.readOnly,
            openDirection = _props6.openDirection,
            isFocused = _props6.isFocused,
            phrases = _props6.phrases,
            onArrowDown = _props6.onArrowDown,
            onQuestionMark = _props6.onQuestionMark,
            isRTL = _props6.isRTL;

        var startDateString = this.getDateString(startDate);
        var startDateValue = (0, _toISODateString2['default'])(startDate);
        var endDateString = this.getDateString(endDate);
        var endDateValue = (0, _toISODateString2['default'])(endDate);

        return _react2['default'].createElement(_DateRangePickerInput2['default'], {
          startDate: startDateString,
          startDateValue: startDateValue,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: isStartDateFocused,
          endDate: endDateString,
          endDateValue: endDateValue,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: isEndDateFocused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          showCaret: showCaret,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customInputIcon: customInputIcon,
          customArrowIcon: customArrowIcon,
          customCloseIcon: customCloseIcon,
          phrases: phrases,
          onStartDateChange: this.onStartDateChange,
          onStartDateFocus: this.onStartDateFocus,
          onStartDateShiftTab: this.onClearFocus,
          onEndDateChange: this.onEndDateChange,
          onEndDateFocus: this.onEndDateFocus,
          onEndDateTab: this.onClearFocus,
          showClearDates: showClearDates,
          onClearDates: this.clearDates,
          screenReaderMessage: screenReaderMessage,
          onArrowDown: onArrowDown,
          onQuestionMark: onQuestionMark,
          isRTL: isRTL
        });
      }

      return render;
    }()
  }]);

  return DateRangePickerInputController;
}(_react2['default'].Component);

exports['default'] = DateRangePickerInputController;

DateRangePickerInputController.propTypes = propTypes;
DateRangePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });