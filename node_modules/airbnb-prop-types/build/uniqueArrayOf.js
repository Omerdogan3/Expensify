Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = uniqueArrayOfTypeValidator;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _propTypes = require('prop-types');

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _uniqueArray = require('./uniqueArray');

var _uniqueArray2 = _interopRequireDefault(_uniqueArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unique = (0, _uniqueArray2['default'])();

function uniqueArrayOfTypeValidator(type) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a validator function');
  }

  var mapper = null;
  var name = 'uniqueArrayOfType';

  if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 1) {
    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'function') {
      mapper = arguments.length <= 1 ? undefined : arguments[1];
    } else if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') {
      name = arguments.length <= 1 ? undefined : arguments[1];
    } else {
      throw new TypeError('single input must either be string or function');
    }
  } else if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 2) {
    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'function' && typeof (arguments.length <= 2 ? undefined : arguments[2]) === 'string') {
      mapper = arguments.length <= 1 ? undefined : arguments[1];
      name = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      throw new TypeError('multiple inputs must be in [function, string] order');
    }
  } else if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 2) {
    throw new TypeError('only [], [name], [mapper], and [mapper, name] are valid inputs');
  }

  function uniqueArrayOfMapped(props, propName) {
    var propValue = props[propName];
    if (propValue == null) {
      return null;
    }

    var values = propValue.map(mapper);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return unique.apply(undefined, [(0, _object2['default'])({}, props, _defineProperty({}, propName, values)), propName].concat(args));
  }

  uniqueArrayOfMapped.isRequired = function () {
    function isRequired(props, propName) {
      var propValue = props[propName];

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      if (propValue == null) {
        return _propTypes.array.isRequired.apply(_propTypes.array, [props, propName].concat(args));
      }
      return uniqueArrayOfMapped.apply(undefined, [props, propName].concat(args));
    }

    return isRequired;
  }();

  var arrayValidator = (0, _propTypes.arrayOf)(type);

  var uniqueValidator = mapper ? uniqueArrayOfMapped : unique;

  var validator = (0, _and2['default'])([arrayValidator, uniqueValidator], name);
  validator.isRequired = (0, _and2['default'])([uniqueValidator.isRequired, arrayValidator.isRequired], String(name) + '.isRequired');

  return validator;
}
//# sourceMappingURL=uniqueArrayOf.js.map