import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  h,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  unref,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-R5XSPQNB.js";
import "./chunk-SSYGV25P.js";

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// node_modules/date-fns/esm/addMonths/index.js
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

// node_modules/date-fns/esm/add/index.js
function add(dirtyDate, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var date = toDate(dirtyDate);
  var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date;
  var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1e3;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/startOfWeek/index.js
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/startOfISOWeek/index.js
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

// node_modules/date-fns/esm/getISOWeekYear/index.js
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfISOWeekYear/index.js
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/startOfDay/index.js
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/differenceInCalendarDays/index.js
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

// node_modules/date-fns/esm/addQuarters/index.js
function addQuarters(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var months = amount * 3;
  return addMonths(dirtyDate, months);
}

// node_modules/date-fns/esm/addYears/index.js
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

// node_modules/date-fns/esm/constants/index.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/date-fns/esm/isDate/index.js
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/getQuarter/index.js
function getQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

// node_modules/date-fns/esm/eachDayOfInterval/index.js
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}

// node_modules/date-fns/esm/startOfQuarter/index.js
function startOfQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/eachQuarterOfInterval/index.js
function eachQuarterOfInterval(dirtyInterval) {
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var startDateQuarter = startOfQuarter(startDate);
  var endDateQuarter = startOfQuarter(endDate);
  endTime = endDateQuarter.getTime();
  var quarters = [];
  var currentQuarter = startDateQuarter;
  while (currentQuarter.getTime() <= endTime) {
    quarters.push(toDate(currentQuarter));
    currentQuarter = addQuarters(currentQuarter, 1);
  }
  return quarters;
}

// node_modules/date-fns/esm/endOfYear/index.js
function endOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

// node_modules/date-fns/esm/startOfYear/index.js
function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = /* @__PURE__ */ new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/endOfWeek/index.js
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

// node_modules/date-fns/esm/endOfQuarter/index.js
function endOfQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY2 = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY2) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h2(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds2 = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds2 * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h3(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/esm/_lib/assign/index.js
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

// node_modules/date-fns/esm/formatDistanceStrict/index.js
var MILLISECONDS_IN_MINUTE = 1e3 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;

// node_modules/date-fns/esm/getDay/index.js
function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

// node_modules/date-fns/esm/getDaysInMonth/index.js
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth2 = /* @__PURE__ */ new Date(0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}

// node_modules/date-fns/esm/getHours/index.js
function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

// node_modules/date-fns/esm/getISOWeek/index.js
var MILLISECONDS_IN_WEEK3 = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK3) + 1;
}

// node_modules/date-fns/esm/getMinutes/index.js
function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

// node_modules/date-fns/esm/getMonth/index.js
function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

// node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js
var MILLISECONDS_IN_DAY3 = 24 * 60 * 60 * 1e3;

// node_modules/date-fns/esm/getSeconds/index.js
function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

// node_modules/date-fns/esm/getWeekYear/index.js
function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfWeekYear/index.js
function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/getWeek/index.js
var MILLISECONDS_IN_WEEK4 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK4) + 1;
}

// node_modules/date-fns/esm/getYear/index.js
function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

// node_modules/date-fns/esm/isAfter/index.js
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

// node_modules/date-fns/esm/isBefore/index.js
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// node_modules/date-fns/esm/isEqual/index.js
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it2) {
    if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it2)
        o = it2;
      var i2 = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i2 >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i2++]
          };
        },
        e: function e2(_e2) {
          throw _e2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s3() {
      it2 = it2.call(o);
    },
    n: function n() {
      var step = it2.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it2["return"] != null)
          it2["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/date-fns/esm/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = function() {
  function Setter2() {
    _classCallCheck(this, Setter2);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
}();
var ValueSetter = function(_Setter) {
  _inherits(ValueSetter2, _Setter);
  var _super = _createSuper(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set2(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = function(_Setter2) {
  _inherits(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set2(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
}(Setter);

// node_modules/date-fns/esm/parse/_lib/Parser.js
var Parser = function() {
  function Parser2() {
    _classCallCheck(this, Parser2);
    _defineProperty(this, "incompatibleTokens", void 0);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", void 0);
  }
  _createClass(Parser2, [{
    key: "run",
    value: function run(dateString, token, match2, options) {
      var result = this.parse(dateString, token, match2, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
}();

// node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js
var EraParser = function(_Parser) {
  _inherits(EraParser2, _Parser);
  var _super = _createSuper(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 140);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
        case "GGGGG":
          return match2.era(dateString, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return match2.era(dateString, {
            width: "wide"
          }) || match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/esm/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js
var YearParser = function(_Parser) {
  _inherits(YearParser2, _Parser);
  var _super = _createSuper(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = function(_Parser) {
  _inherits(LocalWeekYearParser2, _Parser);
  var _super = _createSuper(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "Yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = function(_Parser) {
  _inherits(ISOWeekYearParser2, _Parser);
  var _super = _createSuper(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = function(_Parser) {
  _inherits(ExtendedYearParser2, _Parser);
  var _super = _createSuper(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js
var QuarterParser = function(_Parser) {
  _inherits(QuarterParser2, _Parser);
  var _super = _createSuper(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        case "Qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "QQQ":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = function(_Parser) {
  _inherits(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        case "qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "qqq":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js
var MonthParser = function(_Parser) {
  _inherits(MonthParser2, _Parser);
  var _super = _createSuper(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    return _this;
  }
  _createClass(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Mo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "MMM":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = function(_Parser) {
  _inherits(StandAloneMonthParser2, _Parser);
  var _super = _createSuper(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Lo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "LLL":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCWeek/index.js
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = function(_Parser) {
  _inherits(LocalWeekParser2, _Parser);
  var _super = _createSuper(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = function(_Parser) {
  _inherits(ISOWeekParser2, _Parser);
  var _super = _createSuper(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = function(_Parser) {
  _inherits(DateParser2, _Parser);
  var _super = _createSuper(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear2) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = function(_Parser) {
  _inherits(DayOfYearParser2, _Parser);
  var _super = _createSuper(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      if (isLeapYear2) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCDay/index.js
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js
var DayParser = function(_Parser) {
  _inherits(DayParser2, _Parser);
  var _super = _createSuper(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = function(_Parser) {
  _inherits(LocalDayParser2, _Parser);
  var _super = _createSuper(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "eo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "eee":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = function(_Parser) {
  _inherits(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "co":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "ccc":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISODay/index.js
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js
var ISODayParser = function(_Parser) {
  _inherits(ISODayParser2, _Parser);
  var _super = _createSuper(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        case "io":
          return match2.ordinalNumber(dateString, {
            unit: "day"
          });
        case "iii":
          return mapValue(match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiii":
          return mapValue(match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiiii":
          return mapValue(match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiii":
        default:
          return mapValue(match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js
var AMPMParser = function(_Parser) {
  _inherits(AMPMParser2, _Parser);
  var _super = _createSuper(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = function(_Parser) {
  _inherits(AMPMMidnightParser2, _Parser);
  var _super = _createSuper(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = function(_Parser) {
  _inherits(DayPeriodParser2, _Parser);
  var _super = _createSuper(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = function(_Parser) {
  _inherits(Hour1to12Parser2, _Parser);
  var _super = _createSuper(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = function(_Parser) {
  _inherits(Hour0to23Parser2, _Parser);
  var _super = _createSuper(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = function(_Parser) {
  _inherits(Hour0To11Parser2, _Parser);
  var _super = _createSuper(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = function(_Parser) {
  _inherits(Hour1To24Parser2, _Parser);
  var _super = _createSuper(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js
var MinuteParser = function(_Parser) {
  _inherits(MinuteParser2, _Parser);
  var _super = _createSuper(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 60);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match2.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js
var SecondParser = function(_Parser) {
  _inherits(SecondParser2, _Parser);
  var _super = _createSuper(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 50);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match2.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = function(_Parser) {
  _inherits(FractionOfSecondParser2, _Parser);
  var _super = _createSuper(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 30);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback3 = function valueCallback4(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback3);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = function(_Parser) {
  _inherits(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = function(_Parser) {
  _inherits(ISOTimezoneParser2, _Parser);
  var _super = _createSuper(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = function(_Parser) {
  _inherits(TimestampSecondsParser2, _Parser);
  var _super = _createSuper(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 40);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = function(_Parser) {
  _inherits(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 20);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/index.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/esm/parse/index.js
var formattingTokensRegExp2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp2 = /^'([^]*?)'?$/;
var doubleQuoteRegExp2 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp2 = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  if (!locale2.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp2).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters_default) {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp2);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale2.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp2)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString2(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof(_ret) === "object")
        return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a3, b2) {
    return b2 - a3;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a3, b2) {
      return b2.subPriority - a3.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString2(input) {
  return input.match(escapedStringRegExp2)[1].replace(doubleQuoteRegExp2, "'");
}

// node_modules/date-fns/esm/isSameQuarter/index.js
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

// node_modules/date-fns/esm/subDays/index.js
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

// node_modules/date-fns/esm/parseISO/index.js
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = /* @__PURE__ */ new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex2(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex2(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex2(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// node_modules/date-fns/esm/setMonth/index.js
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

// node_modules/date-fns/esm/set/index.js
function set(dirtyDate, values) {
  requiredArgs(2, arguments);
  if (_typeof(values) !== "object" || values === null) {
    throw new RangeError("values parameter must be an object");
  }
  var date = toDate(dirtyDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds));
  }
  return date;
}

// node_modules/date-fns/esm/setHours/index.js
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

// node_modules/date-fns/esm/setMilliseconds/index.js
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var milliseconds2 = toInteger(dirtyMilliseconds);
  date.setMilliseconds(milliseconds2);
  return date;
}

// node_modules/date-fns/esm/setMinutes/index.js
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

// node_modules/date-fns/esm/setSeconds/index.js
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

// node_modules/date-fns/esm/setYear/index.js
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}

// node_modules/date-fns/esm/subMonths/index.js
function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

// node_modules/date-fns/esm/sub/index.js
function sub(date, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var dateWithoutMonths = subMonths(date, months + years * 12);
  var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7);
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1e3;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

// node_modules/date-fns/esm/subYears/index.js
function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

// node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function Ft() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Ft.compatConfig = {
  MODE: 3
};
function Aa() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createBaseVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Aa.compatConfig = {
  MODE: 3
};
function En() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
En.compatConfig = {
  MODE: 3
};
function Fn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Fn.compatConfig = {
  MODE: 3
};
function Hn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createBaseVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Hn.compatConfig = {
  MODE: 3
};
function Vn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Vn.compatConfig = {
  MODE: 3
};
function Un() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Un.compatConfig = {
  MODE: 3
};
function Ln(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var Sa = { exports: {} };
(function(e2) {
  function t2(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e2.exports = t2, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Sa);
var cr = Sa.exports;
var An = { exports: {} };
(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", {
    value: true
  }), t2.default = r;
  function r(a3) {
    if (a3 === null || a3 === true || a3 === false)
      return NaN;
    var n = Number(a3);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  e2.exports = t2.default;
})(An, An.exports);
var fr = An.exports;
var vr = Ln(fr);
var Sn = { exports: {} };
(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", {
    value: true
  }), t2.default = r;
  function r(a3) {
    var n = new Date(Date.UTC(a3.getFullYear(), a3.getMonth(), a3.getDate(), a3.getHours(), a3.getMinutes(), a3.getSeconds(), a3.getMilliseconds()));
    return n.setUTCFullYear(a3.getFullYear()), a3.getTime() - n.getTime();
  }
  e2.exports = t2.default;
})(Sn, Sn.exports);
var mr = Sn.exports;
var ta = Ln(mr);
function gr(e2, t2) {
  var r = br(t2);
  return r.formatToParts ? hr(r, e2) : pr(r, e2);
}
var yr = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hr(e2, t2) {
  try {
    for (var r = e2.formatToParts(t2), a3 = [], n = 0; n < r.length; n++) {
      var o = yr[r[n].type];
      o >= 0 && (a3[o] = parseInt(r[n].value, 10));
    }
    return a3;
  } catch (i2) {
    if (i2 instanceof RangeError)
      return [NaN];
    throw i2;
  }
}
function pr(e2, t2) {
  var r = e2.format(t2).replace(/\u200E/g, ""), a3 = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);
  return [a3[3], a3[1], a3[2], a3[4], a3[5], a3[6]];
}
var fn = {};
function br(e2) {
  if (!fn[e2]) {
    var t2 = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), r = t2 === "06/25/2014, 00:00:00" || t2 === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    fn[e2] = r ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return fn[e2];
}
function Wn(e2, t2, r, a3, n, o, i2) {
  var d3 = /* @__PURE__ */ new Date(0);
  return d3.setUTCFullYear(e2, t2, r), d3.setUTCHours(a3, n, o, i2), d3;
}
var na = 36e5;
var kr = 6e4;
var vn = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function zn(e2, t2, r) {
  var a3, n;
  if (e2 === "" || (a3 = vn.timezoneZ.exec(e2), a3))
    return 0;
  var o;
  if (a3 = vn.timezoneHH.exec(e2), a3)
    return o = parseInt(a3[1], 10), aa(o) ? -(o * na) : NaN;
  if (a3 = vn.timezoneHHMM.exec(e2), a3) {
    o = parseInt(a3[1], 10);
    var i2 = parseInt(a3[2], 10);
    return aa(o, i2) ? (n = Math.abs(o) * na + i2 * kr, o > 0 ? -n : n) : NaN;
  }
  if (Mr(e2)) {
    t2 = new Date(t2 || Date.now());
    var d3 = r ? t2 : wr(t2), b2 = Pn(d3, e2), P = r ? b2 : Dr(t2, b2, e2);
    return -P;
  }
  return NaN;
}
function wr(e2) {
  return Wn(
    e2.getFullYear(),
    e2.getMonth(),
    e2.getDate(),
    e2.getHours(),
    e2.getMinutes(),
    e2.getSeconds(),
    e2.getMilliseconds()
  );
}
function Pn(e2, t2) {
  var r = gr(e2, t2), a3 = Wn(
    r[0],
    r[1] - 1,
    r[2],
    r[3] % 24,
    r[4],
    r[5],
    0
  ).getTime(), n = e2.getTime(), o = n % 1e3;
  return n -= o >= 0 ? o : 1e3 + o, a3 - n;
}
function Dr(e2, t2, r) {
  var a3 = e2.getTime(), n = a3 - t2, o = Pn(new Date(n), r);
  if (t2 === o)
    return t2;
  n -= o - t2;
  var i2 = Pn(new Date(n), r);
  return o === i2 ? o : Math.max(o, i2);
}
function aa(e2, t2) {
  return -23 <= e2 && e2 <= 23 && (t2 == null || 0 <= t2 && t2 <= 59);
}
var ra = {};
function Mr(e2) {
  if (ra[e2])
    return true;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e2 }), ra[e2] = true, true;
  } catch {
    return false;
  }
}
var Pa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var mn = 36e5;
var la = 6e4;
var $r = 2;
var Be = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Pa
};
function Cn(e2, t2) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e2 === null)
    return /* @__PURE__ */ new Date(NaN);
  var r = t2 || {}, a3 = r.additionalDigits == null ? $r : vr(r.additionalDigits);
  if (a3 !== 2 && a3 !== 1 && a3 !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e2 instanceof Date || typeof e2 == "object" && Object.prototype.toString.call(e2) === "[object Date]")
    return new Date(e2.getTime());
  if (typeof e2 == "number" || Object.prototype.toString.call(e2) === "[object Number]")
    return new Date(e2);
  if (!(typeof e2 == "string" || Object.prototype.toString.call(e2) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var n = Tr(e2), o = Ar(n.date, a3), i2 = o.year, d3 = o.restDateString, b2 = Sr(d3, i2);
  if (isNaN(b2))
    return /* @__PURE__ */ new Date(NaN);
  if (b2) {
    var P = b2.getTime(), T2 = 0, p;
    if (n.time && (T2 = Pr(n.time), isNaN(T2)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || r.timeZone) {
      if (p = zn(n.timeZone || r.timeZone, new Date(P + T2)), isNaN(p))
        return /* @__PURE__ */ new Date(NaN);
    } else
      p = ta(new Date(P + T2)), p = ta(new Date(P + T2 + p));
    return new Date(P + T2 + p);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Tr(e2) {
  var t2 = {}, r = Be.dateTimePattern.exec(e2), a3;
  if (r ? (t2.date = r[1], a3 = r[3]) : (r = Be.datePattern.exec(e2), r ? (t2.date = r[1], a3 = r[2]) : (t2.date = null, a3 = e2)), a3) {
    var n = Be.timeZone.exec(a3);
    n ? (t2.time = a3.replace(n[1], ""), t2.timeZone = n[1].trim()) : t2.time = a3;
  }
  return t2;
}
function Ar(e2, t2) {
  var r = Be.YYY[t2], a3 = Be.YYYYY[t2], n;
  if (n = Be.YYYY.exec(e2) || a3.exec(e2), n) {
    var o = n[1];
    return {
      year: parseInt(o, 10),
      restDateString: e2.slice(o.length)
    };
  }
  if (n = Be.YY.exec(e2) || r.exec(e2), n) {
    var i2 = n[1];
    return {
      year: parseInt(i2, 10) * 100,
      restDateString: e2.slice(i2.length)
    };
  }
  return {
    year: null
  };
}
function Sr(e2, t2) {
  if (t2 === null)
    return null;
  var r, a3, n, o;
  if (e2.length === 0)
    return a3 = /* @__PURE__ */ new Date(0), a3.setUTCFullYear(t2), a3;
  if (r = Be.MM.exec(e2), r)
    return a3 = /* @__PURE__ */ new Date(0), n = parseInt(r[1], 10) - 1, sa(t2, n) ? (a3.setUTCFullYear(t2, n), a3) : /* @__PURE__ */ new Date(NaN);
  if (r = Be.DDD.exec(e2), r) {
    a3 = /* @__PURE__ */ new Date(0);
    var i2 = parseInt(r[1], 10);
    return Rr(t2, i2) ? (a3.setUTCFullYear(t2, 0, i2), a3) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = Be.MMDD.exec(e2), r) {
    a3 = /* @__PURE__ */ new Date(0), n = parseInt(r[1], 10) - 1;
    var d3 = parseInt(r[2], 10);
    return sa(t2, n, d3) ? (a3.setUTCFullYear(t2, n, d3), a3) : /* @__PURE__ */ new Date(NaN);
  }
  if (r = Be.Www.exec(e2), r)
    return o = parseInt(r[1], 10) - 1, ia(t2, o) ? oa(t2, o) : /* @__PURE__ */ new Date(NaN);
  if (r = Be.WwwD.exec(e2), r) {
    o = parseInt(r[1], 10) - 1;
    var b2 = parseInt(r[2], 10) - 1;
    return ia(t2, o, b2) ? oa(t2, o, b2) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Pr(e2) {
  var t2, r, a3;
  if (t2 = Be.HH.exec(e2), t2)
    return r = parseFloat(t2[1].replace(",", ".")), gn(r) ? r % 24 * mn : NaN;
  if (t2 = Be.HHMM.exec(e2), t2)
    return r = parseInt(t2[1], 10), a3 = parseFloat(t2[2].replace(",", ".")), gn(r, a3) ? r % 24 * mn + a3 * la : NaN;
  if (t2 = Be.HHMMSS.exec(e2), t2) {
    r = parseInt(t2[1], 10), a3 = parseInt(t2[2], 10);
    var n = parseFloat(t2[3].replace(",", "."));
    return gn(r, a3, n) ? r % 24 * mn + a3 * la + n * 1e3 : NaN;
  }
  return null;
}
function oa(e2, t2, r) {
  t2 = t2 || 0, r = r || 0;
  var a3 = /* @__PURE__ */ new Date(0);
  a3.setUTCFullYear(e2, 0, 4);
  var n = a3.getUTCDay() || 7, o = t2 * 7 + r + 1 - n;
  return a3.setUTCDate(a3.getUTCDate() + o), a3;
}
var Cr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var _r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ca(e2) {
  return e2 % 400 === 0 || e2 % 4 === 0 && e2 % 100 !== 0;
}
function sa(e2, t2, r) {
  if (t2 < 0 || t2 > 11)
    return false;
  if (r != null) {
    if (r < 1)
      return false;
    var a3 = Ca(e2);
    if (a3 && r > _r[t2] || !a3 && r > Cr[t2])
      return false;
  }
  return true;
}
function Rr(e2, t2) {
  if (t2 < 1)
    return false;
  var r = Ca(e2);
  return !(r && t2 > 366 || !r && t2 > 365);
}
function ia(e2, t2, r) {
  return !(t2 < 0 || t2 > 52 || r != null && (r < 0 || r > 6));
}
function gn(e2, t2, r) {
  return !(e2 != null && (e2 < 0 || e2 >= 25) || t2 != null && (t2 < 0 || t2 >= 60) || r != null && (r < 0 || r >= 60));
}
var _n = { exports: {} };
var Rn = { exports: {} };
(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", {
    value: true
  }), t2.default = r;
  function r(a3, n) {
    if (a3 == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (a3[o] = n[o]);
    return a3;
  }
  e2.exports = t2.default;
})(Rn, Rn.exports);
var Or = Rn.exports;
(function(e2, t2) {
  var r = cr.default;
  Object.defineProperty(t2, "__esModule", {
    value: true
  }), t2.default = n;
  var a3 = r(Or);
  function n(o) {
    return (0, a3.default)({}, o);
  }
  e2.exports = t2.default;
})(_n, _n.exports);
var Yr = _n.exports;
var Nr = Ln(Yr);
function Ir(e2, t2, r) {
  var a3 = Cn(e2, r), n = zn(t2, a3, true), o = new Date(a3.getTime() - n), i2 = /* @__PURE__ */ new Date(0);
  return i2.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i2.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i2;
}
function Br(e2, t2, r) {
  if (typeof e2 == "string" && !e2.match(Pa)) {
    var a3 = Nr(r);
    return a3.timeZone = t2, Cn(e2, a3);
  }
  var n = Cn(e2, r), o = Wn(
    n.getFullYear(),
    n.getMonth(),
    n.getDate(),
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ).getTime(), i2 = zn(t2, new Date(o));
  return new Date(o + i2);
}
function ua(e2) {
  return (t2) => new Intl.DateTimeFormat(e2, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t2}T00:00:00+00:00`)).slice(0, 2);
}
function Er(e2) {
  return (t2) => format(/* @__PURE__ */ new Date(`2017-01-0${t2}T00:00:00+00:00`), "EEEEEE", { locale: e2 });
}
var Fr = (e2, t2, r) => {
  const a3 = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e2 !== null)
    try {
      n = a3.map(Er(e2));
    } catch {
      n = a3.map(ua(t2));
    }
  else
    n = a3.map(ua(t2));
  const o = n.slice(0, r), i2 = n.slice(r + 1, n.length);
  return [n[r]].concat(...i2).concat(...o);
};
var jn = (e2, t2) => {
  const r = [];
  for (let a3 = +e2[0]; a3 <= +e2[1]; a3++)
    r.push({ value: +a3, text: `${a3}` });
  return t2 ? r.reverse() : r;
};
var _a = (e2, t2, r) => {
  const a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const i2 = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${i2}-01T00:00:00+00:00`);
  });
  if (e2 !== null)
    try {
      const o = r === "long" ? "MMMM" : "MMM";
      return a3.map((i2, d3) => {
        const b2 = format(i2, o, { locale: e2 });
        return {
          text: b2.charAt(0).toUpperCase() + b2.substring(1),
          value: d3
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t2, { month: r, timeZone: "UTC" });
  return a3.map((o, i2) => {
    const d3 = n.format(o);
    return {
      text: d3.charAt(0).toUpperCase() + d3.substring(1),
      value: i2
    };
  });
};
var Hr = (e2) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e2];
var Se = (e2) => {
  const t2 = unref(e2);
  return t2 != null && t2.$el ? t2 == null ? void 0 : t2.$el : t2;
};
var Vr = (e2) => Object.assign({ type: "dot" }, e2);
var Ra = (e2) => Array.isArray(e2) ? !!e2[0] && !!e2[1] : false;
var Qt = {
  prop: (e2) => `"${e2}" prop must be enabled!`,
  dateArr: (e2) => `You need to use array as "model-value" binding in order to support "${e2}"`
};
var Ae = (e2) => e2;
var da = (e2) => e2 === 0 ? e2 : !e2 || isNaN(+e2) ? null : +e2;
var ca = (e2) => e2 === null;
var Ur = (e2) => {
  if (e2)
    return [...e2.querySelectorAll("input, button, select, textarea, a[href]")][0];
};
var Lr = (e2) => {
  const t2 = [], r = (a3) => a3.filter((n) => n);
  for (let a3 = 0; a3 < e2.length; a3 += 3) {
    const n = [e2[a3], e2[a3 + 1], e2[a3 + 2]];
    t2.push(r(n));
  }
  return t2;
};
var Bt = (e2, t2, r) => {
  const a3 = r ?? r === 0, n = t2 ?? t2 === 0;
  if (!a3 && !n)
    return false;
  const o = +r, i2 = +t2;
  return a3 && n ? +e2 > o || +e2 < i2 : a3 ? +e2 > o : n ? +e2 < i2 : false;
};
var At = (e2, t2) => Lr(e2).map((r) => r.map((a3) => {
  const { active: n, disabled: o, isBetween: i2, highlighted: d3 } = t2(a3);
  return {
    ...a3,
    active: n,
    disabled: o,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: o,
      dp__overlay_cell_pad: true,
      dp__overlay_cell_active_disabled: o && n,
      dp__cell_in_between: i2,
      "dp--highlighted": d3
    }
  };
}));
var it = (e2, t2, r = false) => {
  e2 && t2.allowStopPropagation && (r && e2.stopImmediatePropagation(), e2.stopPropagation());
};
var Wr = (e2) => {
  if (e2.nextElementSibling)
    return e2.nextElementSibling;
  for (; e2.parentElement && !e2.parentElement.nextElementSibling; )
    e2 = e2.parentElement;
  return e2.parentElement ? e2.parentElement.nextElementSibling : null;
};
var zr = (e2) => {
  if (!e2)
    return false;
  const t2 = [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ], r = e2.matches(t2.join(", ")), a3 = e2.offsetWidth > 0 || e2.offsetHeight > 0 || e2.getClientRects().length > 0;
  return r && a3;
};
var jr = (e2) => {
  if (!e2)
    return null;
  let t2 = e2;
  for (; t2; )
    if (t2 = Wr(t2), zr(t2))
      return t2;
  return null;
};
var fa = (e2, t2, r, a3, n) => {
  const o = parse(e2, t2.slice(0, e2.length), /* @__PURE__ */ new Date());
  return isValid(o) && isDate(o) ? a3 || n ? o : set(o, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
};
var Kr = (e2, t2, r, a3, n) => {
  const o = Array.isArray(r) ? r[0] : r;
  if (typeof t2 == "string")
    return fa(e2, t2, o, a3, n);
  if (Array.isArray(t2)) {
    let i2 = null;
    for (const d3 of t2)
      if (i2 = fa(e2, d3, o, a3, n), i2)
        break;
    return i2;
  }
  return typeof t2 == "function" ? t2(e2) : null;
};
var V = (e2) => e2 ? new Date(e2) : /* @__PURE__ */ new Date();
var Gr = (e2, t2, r) => {
  if (t2) {
    const n = (e2.getMonth() + 1).toString().padStart(2, "0"), o = e2.getDate().toString().padStart(2, "0"), i2 = e2.getHours().toString().padStart(2, "0"), d3 = e2.getMinutes().toString().padStart(2, "0"), b2 = r ? e2.getSeconds().toString().padStart(2, "0") : "00";
    return `${e2.getFullYear()}-${n}-${o}T${i2}:${d3}:${b2}.000Z`;
  }
  const a3 = Date.UTC(
    e2.getUTCFullYear(),
    e2.getUTCMonth(),
    e2.getUTCDate(),
    e2.getUTCHours(),
    e2.getUTCMinutes(),
    e2.getUTCSeconds()
  );
  return new Date(a3).toISOString();
};
var He = (e2) => {
  let t2 = V(JSON.parse(JSON.stringify(e2)));
  return t2 = setHours(t2, 0), t2 = setMinutes(t2, 0), t2 = setSeconds(t2, 0), t2 = setMilliseconds(t2, 0), t2;
};
var ut = (e2, t2, r, a3) => {
  let n = e2 ? V(e2) : V();
  return (t2 || t2 === 0) && (n = setHours(n, +t2)), (r || r === 0) && (n = setMinutes(n, +r)), (a3 || a3 === 0) && (n = setSeconds(n, +a3)), setMilliseconds(n, 0);
};
var _e = (e2, t2) => !e2 || !t2 ? false : isBefore(He(e2), He(t2));
var pe = (e2, t2) => !e2 || !t2 ? false : isEqual(He(e2), He(t2));
var Ne = (e2, t2) => !e2 || !t2 ? false : isAfter(He(e2), He(t2));
var Xt = (e2, t2, r) => e2 != null && e2[0] && (e2 != null && e2[1]) ? Ne(r, e2[0]) && _e(r, e2[1]) : e2 != null && e2[0] && t2 ? Ne(r, e2[0]) && _e(r, t2) || _e(r, e2[0]) && Ne(r, t2) : false;
var Qe = (e2) => {
  const t2 = set(new Date(e2), { date: 1 });
  return He(t2);
};
var yn = (e2, t2, r) => t2 && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a3) => a3 === t2 ? [a3, r] : [a3, isNaN(+e2[a3]) ? void 0 : +e2[a3]])
) : {
  hours: isNaN(+e2.hours) ? void 0 : +e2.hours,
  minutes: isNaN(+e2.minutes) ? void 0 : +e2.minutes,
  seconds: isNaN(+e2.seconds) ? void 0 : +e2.seconds
};
var pt = (e2) => ({
  hours: getHours(e2),
  minutes: getMinutes(e2),
  seconds: getSeconds(e2)
});
var Oa = (e2, t2) => {
  if (t2) {
    const r = getYear(V(t2));
    if (r > e2)
      return 12;
    if (r === e2)
      return getMonth(V(t2));
  }
};
var Ya = (e2, t2) => {
  if (t2) {
    const r = getYear(V(t2));
    return r < e2 ? -1 : r === e2 ? getMonth(V(t2)) : void 0;
  }
};
var St = (e2) => {
  if (e2)
    return getYear(V(e2));
};
var Le = (e2, t2) => t2 ? Ir(e2, t2) : e2;
var Na = (e2, t2) => t2 ? Br(e2, t2) : e2;
var va = (e2) => e2 instanceof Date ? e2 : parseISO(e2);
var Ia = (e2, t2) => {
  const r = Ne(e2, t2) ? t2 : e2, a3 = Ne(t2, e2) ? t2 : e2;
  return eachDayOfInterval({ start: r, end: a3 });
};
var qr = (e2) => {
  const t2 = addMonths(e2, 1);
  return { month: getMonth(t2), year: getYear(t2) };
};
var qt = (e2, t2, r) => {
  const a3 = startOfWeek(Le(e2, t2), { weekStartsOn: +r }), n = endOfWeek(Le(e2, t2), { weekStartsOn: +r });
  return [a3, n];
};
var Ba = (e2, t2) => {
  const r = {
    hours: getHours(V()),
    minutes: getMinutes(V()),
    seconds: t2 ? getSeconds(V()) : 0
  };
  return Object.assign(r, e2);
};
var ot = (e2, t2, r) => [set(V(e2), { date: 1 }), set(V(), { month: t2, year: r, date: 1 })];
var at = (e2, t2, r) => {
  let a3 = e2 ? V(e2) : V();
  return (t2 || t2 === 0) && (a3 = setMonth(a3, t2)), r && (a3 = setYear(a3, r)), a3;
};
var Ea = (e2, t2, r, a3, n) => {
  if (!a3 || n && !t2 || !n && !r)
    return false;
  const o = n ? addMonths(e2, 1) : subMonths(e2, 1), i2 = [getMonth(o), getYear(o)];
  return n ? !Qr(...i2, t2) : !Zr(...i2, r);
};
var Zr = (e2, t2, r) => _e(...ot(r, e2, t2)) || pe(...ot(r, e2, t2));
var Qr = (e2, t2, r) => Ne(...ot(r, e2, t2)) || pe(...ot(r, e2, t2));
var Fa = (e2, t2, r, a3, n, o, i2) => {
  if (typeof t2 == "function" && !i2)
    return t2(e2);
  const d3 = r ? { locale: r } : void 0;
  return Array.isArray(e2) ? `${format(e2[0], o, d3)}${n && !e2[1] ? "" : a3}${e2[1] ? format(e2[1], o, d3) : ""}` : format(e2, o, d3);
};
var Dt = (e2) => {
  if (e2)
    return null;
  throw new Error(Qt.prop("partial-range"));
};
var Wt = (e2, t2) => {
  if (t2)
    return e2();
  throw new Error(Qt.prop("range"));
};
var On = (e2) => Array.isArray(e2) ? isValid(e2[0]) && (e2[1] ? isValid(e2[1]) : true) : e2 ? isValid(e2) : false;
var Xr = (e2, t2) => set(t2 ?? V(), {
  hours: +e2.hours || 0,
  minutes: +e2.minutes || 0,
  seconds: +e2.seconds || 0
});
var hn = (e2, t2, r, a3) => {
  if (!e2)
    return true;
  if (a3) {
    const n = r === "max" ? isBefore(e2, t2) : isAfter(e2, t2), o = { seconds: 0, milliseconds: 0 };
    return n || isEqual(set(e2, o), set(t2, o));
  }
  return r === "max" ? e2.getTime() <= t2.getTime() : e2.getTime() >= t2.getTime();
};
var pn = (e2, t2, r) => e2 ? Xr(e2, t2) : V(r ?? t2);
var ma = (e2, t2, r, a3, n) => {
  if (Array.isArray(a3)) {
    const i2 = pn(e2, a3[0], t2), d3 = pn(e2, a3[1], t2);
    return hn(a3[0], i2, r, !!t2) && hn(a3[1], d3, r, !!t2) && n;
  }
  const o = pn(e2, a3, t2);
  return hn(a3, o, r, !!t2) && n;
};
var bn = (e2) => set(V(), pt(e2));
var Jr = (e2, t2) => Array.isArray(e2) ? e2.map((r) => V(r)).filter((r) => getYear(V(r)) === t2).map((r) => getMonth(r)) : [];
var Ha = (e2, t2, r) => typeof e2 == "function" ? e2({ month: t2, year: r }) : !!e2.months.find((a3) => a3.month === t2 && a3.year === r);
var Kn = (e2, t2) => typeof e2 == "function" ? e2(t2) : e2.years.includes(t2);
var Rt = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
});
var Va = () => {
  const e2 = (a3) => {
    Rt.menuFocused = a3;
  }, t2 = (a3) => {
    Rt.shiftKeyInMenu !== a3 && (Rt.shiftKeyInMenu = a3);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: Rt.shiftKeyInMenu, menuFocused: Rt.menuFocused })),
    setMenuFocused: e2,
    setShiftKey: t2
  };
};
var we = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
});
var kn = ref(null);
var zt = ref(false);
var wn = ref(false);
var Dn = ref(false);
var Mn = ref(false);
var Ie = ref(0);
var Ce = ref(0);
var ft = () => {
  const e2 = computed(() => zt.value ? [...we.selectionGrid, we.actionRow].filter((h4) => h4.length) : wn.value ? [
    ...we.timePicker[0],
    ...we.timePicker[1],
    Mn.value ? [] : [kn.value],
    we.actionRow
  ].filter((h4) => h4.length) : Dn.value ? [...we.monthPicker, we.actionRow] : [we.monthYear, ...we.calendar, we.time, we.actionRow].filter((h4) => h4.length)), t2 = (h4) => {
    Ie.value = h4 ? Ie.value + 1 : Ie.value - 1;
    let _ = null;
    e2.value[Ce.value] && (_ = e2.value[Ce.value][Ie.value]), _ || (Ie.value = h4 ? Ie.value - 1 : Ie.value + 1);
  }, r = (h4) => {
    if (Ce.value === 0 && !h4 || Ce.value === e2.value.length && h4)
      return;
    Ce.value = h4 ? Ce.value + 1 : Ce.value - 1, e2.value[Ce.value] ? e2.value[Ce.value] && !e2.value[Ce.value][Ie.value] && Ie.value !== 0 && (Ie.value = e2.value[Ce.value].length - 1) : Ce.value = h4 ? Ce.value - 1 : Ce.value + 1;
  }, a3 = (h4) => {
    let _ = null;
    e2.value[Ce.value] && (_ = e2.value[Ce.value][Ie.value]), _ ? _.focus({ preventScroll: !zt.value }) : Ie.value = h4 ? Ie.value - 1 : Ie.value + 1;
  }, n = () => {
    t2(true), a3(true);
  }, o = () => {
    t2(false), a3(false);
  }, i2 = () => {
    r(false), a3(true);
  }, d3 = () => {
    r(true), a3(true);
  }, b2 = (h4, _) => {
    we[_] = h4;
  }, P = (h4, _) => {
    we[_] = h4;
  }, T2 = () => {
    Ie.value = 0, Ce.value = 0;
  };
  return {
    buildMatrix: b2,
    buildMultiLevelMatrix: P,
    setTimePickerBackRef: (h4) => {
      kn.value = h4;
    },
    setSelectionGrid: (h4) => {
      zt.value = h4, T2(), h4 || (we.selectionGrid = []);
    },
    setTimePicker: (h4, _ = false) => {
      wn.value = h4, Mn.value = _, T2(), h4 || (we.timePicker[0] = [], we.timePicker[1] = []);
    },
    setTimePickerElements: (h4, _ = 0) => {
      we.timePicker[_] = h4;
    },
    arrowRight: n,
    arrowLeft: o,
    arrowUp: i2,
    arrowDown: d3,
    clearArrowNav: () => {
      we.monthYear = [], we.calendar = [], we.time = [], we.actionRow = [], we.selectionGrid = [], we.timePicker[0] = [], we.timePicker[1] = [], zt.value = false, wn.value = false, Mn.value = false, Dn.value = false, T2(), kn.value = null;
    },
    setMonthPicker: (h4) => {
      Dn.value = h4, T2();
    },
    refSets: we
    // exposed for testing
  };
};
var ga = (e2) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e2 ?? {}
});
var xr = (e2) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t2) => `Increment ${t2}`,
  decrementValue: (t2) => `Decrement ${t2}`,
  openTpOverlay: (t2) => `Open ${t2} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => "",
  ...e2 ?? {}
});
var ya = (e2) => e2 ? typeof e2 == "boolean" ? e2 ? 2 : 0 : +e2 >= 2 ? +e2 : 2 : 0;
var el = (e2) => {
  const t2 = typeof e2 == "object" && e2, r = {
    static: true,
    solo: false
  };
  if (!e2)
    return { ...r, count: ya(false) };
  const a3 = t2 ? e2 : {}, n = t2 ? a3.count ?? true : e2, o = ya(n);
  return Object.assign(r, a3, { count: o });
};
var tl = (e2, t2, r) => e2 || (typeof r == "string" ? r : t2);
var nl = (e2) => typeof e2 == "boolean" ? e2 ? ga({}) : false : ga(e2);
var al = (e2) => {
  const t2 = {
    enterSubmit: true,
    tabSubmit: true,
    openMenu: true,
    selectOnFocus: false,
    rangeSeparator: " - "
  };
  return typeof e2 == "object" ? { ...t2, ...e2 ?? {}, enabled: true } : { ...t2, enabled: e2 };
};
var rl = (e2) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e2 ?? {}
});
var ll = (e2) => ({
  showSelect: true,
  showCancel: true,
  showNow: false,
  showPreview: true,
  ...e2 ?? {}
});
var ol = (e2) => {
  const t2 = { input: false };
  return typeof e2 == "object" ? { ...t2, ...e2 ?? {}, enabled: true } : {
    enabled: e2,
    ...t2
  };
};
var sl = (e2) => ({ ...{
  allowStopPropagation: true,
  closeOnScroll: false,
  modeHeight: 255,
  allowPreventDefault: false,
  closeOnClearValue: true,
  closeOnAutoApply: true,
  noSwipe: false,
  keepActionRow: false,
  onClickOutside: void 0
}, ...e2 ?? {} });
var il = (e2, t2, r) => {
  const a3 = {
    dates: Array.isArray(e2) ? e2.map((n) => V(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: t2,
    options: { highlightDisabled: r }
  };
  return typeof e2 == "function" ? e2 : { ...a3, ...e2 ?? {} };
};
var Te = (e2) => {
  const t2 = () => {
    const G2 = e2.enableSeconds ? ":ss" : "";
    return e2.is24 ? `HH:mm${G2}` : `hh:mm${G2} aa`;
  }, r = () => e2.format ? e2.format : e2.monthPicker ? "MM/yyyy" : e2.timePicker ? t2() : e2.weekPicker ? "MM/dd/yyyy" : e2.yearPicker ? "yyyy" : e2.quarterPicker ? "QQQ/yyyy" : e2.enableTimePicker ? `MM/dd/yyyy, ${t2()}` : "MM/dd/yyyy", a3 = (G2) => Ba(G2, e2.enableSeconds), n = () => e2.range ? e2.startTime && Array.isArray(e2.startTime) ? [a3(e2.startTime[0]), a3(e2.startTime[1])] : null : e2.startTime && !Array.isArray(e2.startTime) ? a3(e2.startTime) : null, o = computed(() => el(e2.multiCalendars)), i2 = computed(() => n()), d3 = computed(() => xr(e2.ariaLabels)), b2 = computed(() => rl(e2.filters)), P = computed(() => nl(e2.transitions)), T2 = computed(() => ll(e2.actionRow)), p = computed(
    () => tl(e2.previewFormat, e2.format, r())
  ), U = computed(() => al(e2.textInput)), L2 = computed(() => ol(e2.inline)), B2 = computed(() => sl(e2.config)), Y2 = computed(
    () => il(e2.highlight, e2.highlightWeekDays, e2.highlightDisabledDays)
  );
  return {
    defaultedTransitions: P,
    defaultedMultiCalendars: o,
    defaultedStartTime: i2,
    defaultedAriaLabels: d3,
    defaultedFilters: b2,
    defaultedActionRow: T2,
    defaultedPreviewFormat: p,
    defaultedTextInput: U,
    defaultedInline: L2,
    defaultedConfig: B2,
    defaultedHighlight: Y2,
    getDefaultPattern: r,
    getDefaultStartTime: n
  };
};
var ul = (e2, t2, r) => {
  const a3 = ref(), { defaultedTextInput: n, getDefaultPattern: o } = Te(t2), i2 = ref(""), d3 = toRef(t2, "format");
  watch(a3, () => {
    e2("internal-model-change", a3.value);
  }), watch(d3, () => {
    te();
  });
  const b2 = (s3) => Na(s3, t2.timezone), P = (s3) => Le(s3, t2.timezone), T2 = (s3, D2, ie = false) => Fa(
    s3,
    t2.format,
    t2.formatLocale,
    n.value.rangeSeparator,
    t2.modelAuto,
    D2 ?? o(),
    ie
  ), p = (s3) => s3 ? t2.modelType ? y3(s3) : {
    hours: getHours(s3),
    minutes: getMinutes(s3),
    seconds: t2.enableSeconds ? getSeconds(s3) : 0
  } : null, U = (s3) => t2.modelType ? y3(s3) : { month: getMonth(s3), year: getYear(s3) }, L2 = (s3) => Array.isArray(s3) ? t2.multiDates ? s3.map((D2) => B2(D2, setYear(V(), D2))) : Wt(
    () => [
      setYear(V(), s3[0]),
      s3[1] ? setYear(V(), s3[1]) : Dt(t2.partialRange)
    ],
    t2.range
  ) : setYear(V(), +s3), B2 = (s3, D2) => (typeof s3 == "string" || typeof s3 == "number") && t2.modelType ? f(s3) : D2, Y2 = (s3) => Array.isArray(s3) ? [
    B2(
      s3[0],
      ut(null, +s3[0].hours, +s3[0].minutes, s3[0].seconds)
    ),
    B2(
      s3[1],
      ut(null, +s3[1].hours, +s3[1].minutes, s3[1].seconds)
    )
  ] : B2(s3, ut(null, s3.hours, s3.minutes, s3.seconds)), G2 = (s3) => Array.isArray(s3) ? t2.multiDates ? s3.map((D2) => B2(D2, at(null, +D2.month, +D2.year))) : Wt(
    () => [
      B2(s3[0], at(null, +s3[0].month, +s3[0].year)),
      B2(
        s3[1],
        s3[1] ? at(null, +s3[1].month, +s3[1].year) : Dt(t2.partialRange)
      )
    ],
    t2.range
  ) : B2(s3, at(null, +s3.month, +s3.year)), h4 = (s3) => {
    if (Array.isArray(s3))
      return s3.map((D2) => f(D2));
    throw new Error(Qt.dateArr("multi-dates"));
  }, _ = (s3) => {
    if (Array.isArray(s3))
      return [V(s3[0]), V(s3[1])];
    throw new Error(Qt.dateArr("week-picker"));
  }, H3 = (s3) => t2.modelAuto ? Array.isArray(s3) ? [f(s3[0]), f(s3[1])] : t2.autoApply ? [f(s3)] : [f(s3), null] : Array.isArray(s3) ? Wt(
    () => [
      f(s3[0]),
      s3[1] ? f(s3[1]) : Dt(t2.partialRange)
    ],
    t2.range
  ) : f(s3), k2 = () => {
    Array.isArray(a3.value) && t2.range && a3.value.length === 1 && a3.value.push(Dt(t2.partialRange));
  }, R2 = () => {
    const s3 = a3.value;
    return [
      y3(s3[0]),
      s3[1] ? y3(s3[1]) : Dt(t2.partialRange)
    ];
  }, Q2 = () => a3.value[1] ? R2() : y3(Ae(a3.value[0])), q2 = () => (a3.value || []).map((s3) => y3(s3)), x2 = () => (k2(), t2.modelAuto ? Q2() : t2.multiDates ? q2() : Array.isArray(a3.value) ? Wt(() => R2(), t2.range) : y3(Ae(a3.value))), se = (s3) => !s3 || Array.isArray(s3) && !s3.length ? null : t2.timePicker ? Y2(Ae(s3)) : t2.monthPicker ? G2(Ae(s3)) : t2.yearPicker ? L2(Ae(s3)) : t2.multiDates ? h4(Ae(s3)) : t2.weekPicker ? _(Ae(s3)) : H3(Ae(s3)), E2 = (s3) => {
    const D2 = se(s3);
    On(Ae(D2)) ? (a3.value = Ae(D2), te()) : (a3.value = null, i2.value = "");
  }, m3 = () => {
    const s3 = (D2) => format(D2, n.value.format);
    return `${s3(a3.value[0])} ${n.value.rangeSeparator} ${a3.value[1] ? s3(a3.value[1]) : ""}`;
  }, $ = () => r.value && a3.value ? Array.isArray(a3.value) ? m3() : format(a3.value, n.value.format) : T2(a3.value), j = () => a3.value ? t2.multiDates ? a3.value.map((s3) => T2(s3)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? $() : T2(a3.value) : "", te = () => {
    !t2.format || typeof t2.format == "string" || n.value.enabled && typeof n.value.format == "string" ? i2.value = j() : i2.value = t2.format(a3.value);
  }, f = (s3) => {
    if (t2.utc) {
      const D2 = new Date(s3);
      return t2.utc === "preserve" ? new Date(D2.getTime() + D2.getTimezoneOffset() * 6e4) : D2;
    }
    return t2.modelType ? t2.modelType === "date" || t2.modelType === "timestamp" ? P(new Date(s3)) : t2.modelType === "format" && (typeof t2.format == "string" || !t2.format) ? parse(s3, o(), /* @__PURE__ */ new Date()) : P(parse(s3, t2.modelType, /* @__PURE__ */ new Date())) : P(new Date(s3));
  }, y3 = (s3) => s3 ? t2.utc ? Gr(s3, t2.utc === "preserve", t2.enableSeconds) : t2.modelType ? t2.modelType === "timestamp" ? +b2(s3) : t2.modelType === "format" && (typeof t2.format == "string" || !t2.format) ? T2(b2(s3)) : T2(b2(s3), t2.modelType, true) : b2(s3) : "", N = (s3, D2 = false) => {
    if (e2("update:model-value", s3), t2.emitTimezone && D2) {
      const ie = Array.isArray(s3) ? s3.map((oe) => Le(Ae(oe)), t2.emitTimezone) : Le(Ae(s3), t2.emitTimezone);
      e2("update:model-timezone-value", ie);
    }
  }, S3 = (s3) => Array.isArray(a3.value) ? t2.multiDates ? a3.value.map((D2) => s3(D2)) : [
    s3(a3.value[0]),
    a3.value[1] ? s3(a3.value[1]) : Dt(t2.partialRange)
  ] : s3(Ae(a3.value)), w2 = (s3) => N(Ae(S3(s3)));
  return {
    inputValue: i2,
    internalModelValue: a3,
    checkBeforeEmit: () => a3.value ? t2.range ? t2.partialRange ? a3.value.length >= 1 : a3.value.length === 2 : !!a3.value : false,
    parseExternalModelValue: E2,
    formatInputValue: te,
    emitModelValue: () => (te(), t2.monthPicker ? w2(U) : t2.timePicker ? w2(p) : t2.yearPicker ? w2(getYear) : t2.weekPicker ? N(
      a3.value.map((s3) => y3(s3)),
      true
    ) : N(x2(), true))
  };
};
var dl = (e2, t2) => {
  const { defaultedFilters: r } = Te(e2), { validateMonthYearInRange: a3 } = Ct(e2), n = (P, T2) => {
    let p = P;
    return r.value.months.includes(getMonth(p)) ? (p = T2 ? addMonths(P, 1) : subMonths(P, 1), n(p, T2)) : p;
  }, o = (P, T2) => {
    let p = P;
    return r.value.years.includes(getYear(p)) ? (p = T2 ? addYears(P, 1) : subYears(P, 1), o(p, T2)) : p;
  }, i2 = (P, T2 = false) => {
    const p = set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year });
    let U = P ? addMonths(p, 1) : subMonths(p, 1);
    e2.disableYearSelect && (U = setYear(U, e2.year));
    let L2 = getMonth(U), B2 = getYear(U);
    r.value.months.includes(L2) && (U = n(U, P), L2 = getMonth(U), B2 = getYear(U)), r.value.years.includes(B2) && (U = o(U, P), B2 = getYear(U)), a3(L2, B2, P, e2.preventMinMaxNavigation) && d3(L2, B2, T2);
  }, d3 = (P, T2, p) => {
    t2("update-month-year", { month: P, year: T2, fromNav: p });
  }, b2 = computed(() => (P) => Ea(
    set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year }),
    e2.maxDate,
    e2.minDate,
    e2.preventMinMaxNavigation,
    P
  ));
  return { handleMonthYearChange: i2, isDisabled: b2, updateMonthYear: d3 };
};
var Mt = ((e2) => (e2.center = "center", e2.left = "left", e2.right = "right", e2))(Mt || {});
var Ze = ((e2) => (e2.month = "month", e2.year = "year", e2))(Ze || {});
var gt = ((e2) => (e2.top = "top", e2.bottom = "bottom", e2))(gt || {});
var bt = ((e2) => (e2.header = "header", e2.calendar = "calendar", e2.timePicker = "timePicker", e2))(bt || {});
var et = ((e2) => (e2.month = "month", e2.year = "year", e2.calendar = "calendar", e2.time = "time", e2.minutes = "minutes", e2.hours = "hours", e2.seconds = "seconds", e2))(et || {});
var cl = ({
  menuRef: e2,
  menuRefInner: t2,
  inputRef: r,
  pickerWrapperRef: a3,
  inline: n,
  emit: o,
  props: i2,
  slots: d3
}) => {
  const b2 = ref({}), P = ref(false), T2 = ref({
    top: "0",
    left: "0"
  }), p = ref(false), U = toRef(i2, "teleportCenter");
  watch(U, () => {
    T2.value = JSON.parse(JSON.stringify({})), k2();
  });
  const L2 = (y3) => {
    if (i2.teleport) {
      const N = y3.getBoundingClientRect();
      return {
        left: N.left + window.scrollX,
        top: N.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, B2 = (y3, N) => {
    T2.value.left = `${y3 + N - b2.value.width}px`;
  }, Y2 = (y3) => {
    T2.value.left = `${y3}px`;
  }, G2 = (y3, N) => {
    i2.position === Mt.left && Y2(y3), i2.position === Mt.right && B2(y3, N), i2.position === Mt.center && (T2.value.left = `${y3 + N / 2 - b2.value.width / 2}px`);
  }, h4 = (y3) => {
    const { width: N, height: S3 } = y3.getBoundingClientRect(), { top: w2, left: l } = i2.altPosition ? i2.altPosition(y3) : L2(y3);
    return { top: +w2, left: +l, width: N, height: S3 };
  }, _ = () => {
    T2.value.left = "50%", T2.value.top = "50%", T2.value.transform = "translate(-50%, -50%)", T2.value.position = "fixed", delete T2.value.opacity;
  }, H3 = () => {
    const y3 = Se(r), { top: N, left: S3, transform: w2 } = i2.altPosition(y3);
    T2.value = { top: `${N}px`, left: `${S3}px`, transform: w2 ?? "" };
  }, k2 = (y3 = true) => {
    var N;
    if (!n.value.enabled) {
      if (U.value)
        return _();
      if (i2.altPosition !== null)
        return H3();
      if (y3) {
        const S3 = i2.teleport ? (N = t2.value) == null ? void 0 : N.$el : e2.value;
        S3 && (b2.value = S3.getBoundingClientRect()), o("recalculate-position");
      }
      return m3();
    }
  }, R2 = ({ inputEl: y3, left: N, width: S3 }) => {
    window.screen.width > 768 && !P.value && G2(N, S3), x2(y3);
  }, Q2 = (y3) => {
    const { top: N, left: S3, height: w2, width: l } = h4(y3);
    T2.value.top = `${w2 + N + +i2.offset}px`, p.value = false, P.value || (T2.value.left = `${S3 + l / 2 - b2.value.width / 2}px`), R2({ inputEl: y3, left: S3, width: l });
  }, q2 = (y3) => {
    const { top: N, left: S3, width: w2 } = h4(y3);
    T2.value.top = `${N - +i2.offset - b2.value.height}px`, p.value = true, R2({ inputEl: y3, left: S3, width: w2 });
  }, x2 = (y3) => {
    if (i2.autoPosition) {
      const { left: N, width: S3 } = h4(y3), { left: w2, right: l } = b2.value;
      if (!P.value) {
        if (Math.abs(w2) !== Math.abs(l)) {
          if (w2 <= 0)
            return P.value = true, Y2(N);
          if (l >= document.documentElement.clientWidth)
            return P.value = true, B2(N, S3);
        }
        return G2(N, S3);
      }
    }
  }, se = () => {
    const y3 = Se(r);
    if (y3) {
      const { height: N } = b2.value, { top: S3, height: w2 } = y3.getBoundingClientRect(), g = window.innerHeight - S3 - w2, s3 = S3;
      return N <= g ? gt.bottom : N > g && N <= s3 ? gt.top : g >= s3 ? gt.bottom : gt.top;
    }
    return gt.bottom;
  }, E2 = (y3) => se() === gt.bottom ? Q2(y3) : q2(y3), m3 = () => {
    const y3 = Se(r);
    if (y3)
      return i2.autoPosition ? E2(y3) : Q2(y3);
  }, $ = function(y3) {
    if (y3) {
      const N = y3.scrollHeight > y3.clientHeight, w2 = window.getComputedStyle(y3).overflowY.indexOf("hidden") !== -1;
      return N && !w2;
    }
    return true;
  }, j = function(y3) {
    return !y3 || y3 === document.body || y3.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : $(y3) ? y3 : j(y3.parentNode);
  }, te = (y3) => {
    if (y3)
      switch (i2.position) {
        case Mt.left:
          return { left: 0, transform: "translateX(0)" };
        case Mt.right:
          return { left: `${y3.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${y3.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: p,
    menuStyle: T2,
    xCorrect: P,
    setMenuPosition: k2,
    getScrollableParent: j,
    shadowRender: (y3, N) => {
      var ie, oe, u2;
      const S3 = document.createElement("div"), w2 = (ie = Se(r)) == null ? void 0 : ie.getBoundingClientRect();
      S3.setAttribute("id", "dp--temp-container");
      const l = (oe = a3.value) != null && oe.clientWidth ? a3.value : document.body;
      l.append(S3);
      const g = document.getElementById("dp--temp-container"), s3 = te(w2), D2 = h(
        y3,
        {
          ...N,
          shadow: true,
          style: { opacity: 0, position: "absolute", ...s3 }
        },
        Object.fromEntries(
          Object.keys(d3).filter((O2) => ["right-sidebar", "left-sidebar"].includes(O2)).map((O2) => [O2, d3[O2]])
        )
      );
      render(D2, g), b2.value = (u2 = D2.el) == null ? void 0 : u2.getBoundingClientRect(), render(null, g), l.removeChild(g);
    }
  };
};
var lt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
];
var fl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }];
var vl = {
  all: () => lt,
  monthYear: () => lt.filter((e2) => e2.use.includes("month-year")),
  input: () => fl,
  timePicker: () => lt.filter((e2) => e2.use.includes("time")),
  action: () => lt.filter((e2) => e2.use.includes("action")),
  calendar: () => lt.filter((e2) => e2.use.includes("calendar")),
  menu: () => lt.filter((e2) => e2.use.includes("menu")),
  shared: () => lt.filter((e2) => e2.use.includes("shared")),
  yearMode: () => lt.filter((e2) => e2.use.includes("year-mode"))
};
var Ve = (e2, t2, r) => {
  const a3 = [];
  return vl[t2]().forEach((n) => {
    e2[n.name] && a3.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a3.push(n.slot);
  }), a3;
};
var Ht = (e2) => {
  const t2 = computed(() => (a3) => e2.value ? a3 ? e2.value.open : e2.value.close : ""), r = computed(() => (a3) => e2.value ? a3 ? e2.value.menuAppearTop : e2.value.menuAppearBottom : "");
  return { transitionName: t2, showTransition: !!e2.value, menuTransition: r };
};
var Vt = (e2, t2) => {
  const r = V(Le(/* @__PURE__ */ new Date(), e2.timezone)), a3 = ref([{ month: getMonth(r), year: getYear(r) }]), n = reactive({
    hours: e2.range ? [getHours(r), getHours(r)] : getHours(r),
    minutes: e2.range ? [getMinutes(r), getMinutes(r)] : getMinutes(r),
    seconds: e2.range ? [0, 0] : 0
  }), o = computed({
    get: () => e2.internalModelValue,
    set: (b2) => {
      !e2.readonly && !e2.disabled && t2("update:internal-model-value", b2);
    }
  }), i2 = computed(
    () => (b2) => a3.value[b2] ? a3.value[b2].month : 0
  ), d3 = computed(
    () => (b2) => a3.value[b2] ? a3.value[b2].year : 0
  );
  return {
    calendars: a3,
    time: n,
    modelValue: o,
    month: i2,
    year: d3
  };
};
var ml = (e2, t2) => {
  const { defaultedMultiCalendars: r, defaultedHighlight: a3 } = Te(t2), { isDisabled: n, matchDate: o } = Ct(t2), i2 = ref(null), d3 = ref(V(Le(/* @__PURE__ */ new Date(), t2.timezone))), b2 = (l) => {
    !l.current && t2.hideOffsetDates || (i2.value = l.value);
  }, P = () => {
    i2.value = null;
  }, T2 = (l) => Array.isArray(e2.value) && t2.range && e2.value[0] && i2.value ? l ? Ne(i2.value, e2.value[0]) : _e(i2.value, e2.value[0]) : true, p = (l, g) => {
    const s3 = () => e2.value ? g ? e2.value[0] || null : e2.value[1] : null, D2 = e2.value && Array.isArray(e2.value) ? s3() : null;
    return pe(V(l.value), D2);
  }, U = (l) => {
    const g = Array.isArray(e2.value) ? e2.value[0] : null;
    return l ? !_e(i2.value ?? null, g) : true;
  }, L2 = (l, g = true) => (t2.range || t2.weekPicker) && Array.isArray(e2.value) && e2.value.length === 2 ? t2.hideOffsetDates && !l.current ? false : pe(V(l.value), e2.value[g ? 0 : 1]) : t2.range ? p(l, g) && U(g) || pe(l.value, Array.isArray(e2.value) ? e2.value[0] : null) && T2(g) : false, B2 = (l, g, s3) => Array.isArray(e2.value) && e2.value[0] && e2.value.length === 1 ? l ? false : s3 ? Ne(e2.value[0], g.value) : _e(e2.value[0], g.value) : false, Y2 = (l) => !e2.value || t2.hideOffsetDates && !l.current ? false : t2.range ? t2.modelAuto && Array.isArray(e2.value) ? pe(l.value, e2.value[0] ? e2.value[0] : d3.value) : false : t2.multiDates && Array.isArray(e2.value) ? e2.value.some((g) => pe(g, l.value)) : pe(l.value, e2.value ? e2.value : d3.value), G2 = (l) => {
    if (t2.autoRange || t2.weekPicker) {
      if (i2.value) {
        if (t2.hideOffsetDates && !l.current)
          return false;
        const g = addDays(i2.value, +t2.autoRange), s3 = qt(V(i2.value), t2.timezone, t2.weekStart);
        return t2.weekPicker ? pe(s3[1], V(l.value)) : pe(g, V(l.value));
      }
      return false;
    }
    return false;
  }, h4 = (l) => {
    if (t2.autoRange || t2.weekPicker) {
      if (i2.value) {
        const g = addDays(i2.value, +t2.autoRange);
        if (t2.hideOffsetDates && !l.current)
          return false;
        const s3 = qt(V(i2.value), t2.timezone, t2.weekStart);
        return t2.weekPicker ? Ne(l.value, s3[0]) && _e(l.value, s3[1]) : Ne(l.value, i2.value) && _e(l.value, g);
      }
      return false;
    }
    return false;
  }, _ = (l) => {
    if (t2.autoRange || t2.weekPicker) {
      if (i2.value) {
        if (t2.hideOffsetDates && !l.current)
          return false;
        const g = qt(V(i2.value), t2.timezone, t2.weekStart);
        return t2.weekPicker ? pe(g[0], l.value) : pe(i2.value, l.value);
      }
      return false;
    }
    return false;
  }, H3 = (l) => Xt(e2.value, i2.value, l.value), k2 = () => t2.modelAuto && Array.isArray(t2.internalModelValue) ? !!t2.internalModelValue[0] : false, R2 = () => t2.modelAuto ? Ra(t2.internalModelValue) : true, Q2 = (l) => {
    if (Array.isArray(e2.value) && e2.value.length || t2.weekPicker)
      return false;
    const g = t2.range ? !L2(l) && !L2(l, false) : true;
    return !n(l.value) && !Y2(l) && !(!l.current && t2.hideOffsetDates) && g;
  }, q2 = (l) => t2.range ? t2.modelAuto ? k2() && Y2(l) : false : Y2(l), x2 = (l) => {
    var g;
    return a3.value ? typeof a3.value == "function" ? a3.value(l.value) : o(
      l.value,
      (g = t2.arrMapValues) != null && g.highlightedDates ? t2.arrMapValues.highlightedDates : a3.value.dates
    ) : false;
  }, se = (l) => {
    const g = n(l.value);
    return g && (typeof a3.value == "function" ? !a3.value(l.value, g) : !a3.value.options.highlightDisabled);
  }, E2 = (l) => {
    var g;
    return typeof a3.value == "function" ? a3.value(l.value) : (g = a3.value.weekdays) == null ? void 0 : g.includes(l.value.getDay());
  }, m3 = (l) => (t2.range || t2.weekPicker) && (!(r.value.count > 0) || l.current) && R2() && !(!l.current && t2.hideOffsetDates) && !Y2(l) ? H3(l) : false, $ = (l) => {
    const { isRangeStart: g, isRangeEnd: s3 } = f(l), D2 = t2.range ? g || s3 : false;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !t2.disabled && !(!l.current && t2.hideOffsetDates) && !n(l.value),
      dp__cell_disabled: n(l.value),
      dp__cell_highlight: !se(l) && (x2(l) || E2(l)) && !q2(l) && !D2 && !_(l) && !(m3(l) && t2.weekPicker) && !s3,
      dp__cell_highlight_active: !se(l) && (x2(l) || E2(l)) && q2(l),
      dp__today: !t2.noToday && pe(l.value, d3.value) && l.current
    };
  }, j = (l) => ({
    dp__active_date: q2(l),
    dp__date_hover: Q2(l)
  }), te = (l) => ({
    ...y3(l),
    ...N(l),
    dp__range_between_week: m3(l) && t2.weekPicker
  }), f = (l) => {
    const g = r.value.count > 0 ? l.current && L2(l) && R2() : L2(l) && R2(), s3 = r.value.count > 0 ? l.current && L2(l, false) && R2() : L2(l, false) && R2();
    return { isRangeStart: g, isRangeEnd: s3 };
  }, y3 = (l) => {
    const { isRangeStart: g, isRangeEnd: s3 } = f(l);
    return {
      dp__range_start: g,
      dp__range_end: s3,
      dp__range_between: m3(l) && !t2.weekPicker,
      dp__date_hover_start: B2(Q2(l), l, true),
      dp__date_hover_end: B2(Q2(l), l, false)
    };
  }, N = (l) => ({
    ...y3(l),
    dp__cell_auto_range: h4(l),
    dp__cell_auto_range_start: _(l),
    dp__cell_auto_range_end: G2(l)
  }), S3 = (l) => t2.range ? t2.autoRange ? N(l) : t2.modelAuto ? { ...j(l), ...y3(l) } : y3(l) : t2.weekPicker ? te(l) : j(l);
  return {
    setHoverDate: b2,
    clearHoverDate: P,
    getDayClassData: (l) => t2.hideOffsetDates && !l.current ? {} : {
      ...$(l),
      ...S3(l),
      [t2.dayClass ? t2.dayClass(l.value) : ""]: true,
      [t2.calendarCellClassName]: !!t2.calendarCellClassName
    }
  };
};
var Ct = (e2) => {
  const { defaultedFilters: t2, defaultedHighlight: r } = Te(e2), a3 = () => {
    if (e2.timezone)
      return e2.timezone;
    if (e2.utc)
      return "UTC";
  }, n = (m3) => {
    const $ = He(o(V(m3))).toISOString(), [j] = $.split("T");
    return j;
  }, o = (m3) => e2.utc === "preserve" ? Na(m3, a3()) : Le(m3, a3()), i2 = (m3) => {
    var g;
    const $ = e2.maxDate ? Ne(o(m3), o(V(e2.maxDate))) : false, j = e2.minDate ? _e(o(m3), o(V(e2.minDate))) : false, te = T2(
      o(m3),
      (g = e2.arrMapValues) != null && g.disabledDates ? e2.arrMapValues.disabledDates : e2.disabledDates
    ), y3 = t2.value.months.map((s3) => +s3).includes(getMonth(m3)), N = e2.disabledWeekDays.length ? e2.disabledWeekDays.some((s3) => +s3 === getDay(m3)) : false, S3 = U(m3), w2 = getYear(m3), l = w2 < +e2.yearRange[0] || w2 > +e2.yearRange[1];
    return !($ || j || te || y3 || l || N || S3);
  }, d3 = (m3, $) => _e(...ot(e2.minDate, m3, $)) || pe(...ot(e2.minDate, m3, $)), b2 = (m3, $) => Ne(...ot(e2.maxDate, m3, $)) || pe(...ot(e2.maxDate, m3, $)), P = (m3, $, j) => {
    let te = false;
    return e2.maxDate && j && b2(m3, $) && (te = true), e2.minDate && !j && d3(m3, $) && (te = true), te;
  }, T2 = (m3, $) => m3 ? $ instanceof Map ? !!$.get(n(m3)) : Array.isArray($) ? $.some((j) => pe(o(V(j)), o(m3))) : $ ? $(V(JSON.parse(JSON.stringify(m3)))) : false : true, p = (m3, $, j, te) => {
    let f = false;
    return te ? e2.minDate && e2.maxDate ? f = P(m3, $, j) : (e2.minDate && d3(m3, $) || e2.maxDate && b2(m3, $)) && (f = true) : f = true, f;
  }, U = (m3) => {
    var $, j, te, f, y3;
    return Array.isArray(e2.allowedDates) && !(($ = e2.allowedDates) != null && $.length) ? true : (j = e2.arrMapValues) != null && j.allowedDates ? !T2(m3, (te = e2.arrMapValues) == null ? void 0 : te.allowedDates) : (f = e2.allowedDates) != null && f.length ? !((y3 = e2.allowedDates) != null && y3.some((N) => pe(o(V(N)), o(m3)))) : false;
  }, L2 = (m3) => !i2(m3), B2 = (m3) => e2.noDisabledRange ? !eachDayOfInterval({ start: m3[0], end: m3[1] }).some((j) => L2(j)) : true, Y2 = (m3, $, j = 0) => {
    if (Array.isArray($) && $[j]) {
      const te = differenceInCalendarDays(m3, $[j]), f = Ia($[j], m3), y3 = f.length === 1 ? 0 : f.filter((S3) => L2(S3)).length, N = Math.abs(te) - y3;
      if (e2.minRange && e2.maxRange)
        return N >= +e2.minRange && N <= +e2.maxRange;
      if (e2.minRange)
        return N >= +e2.minRange;
      if (e2.maxRange)
        return N <= +e2.maxRange;
    }
    return true;
  }, G2 = (m3) => new Map(m3.map(($) => [n($), true])), h4 = (m3) => Array.isArray(m3) && m3.length > 0, _ = () => {
    const m3 = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return h4(e2.allowedDates) && (m3.allowedDates = G2(e2.allowedDates)), typeof r.value != "function" && h4(r.value.dates) && (m3.highlightedDates = G2(r.value.dates)), h4(e2.disabledDates) && (m3.disabledDates = G2(e2.disabledDates)), m3;
  }, H3 = () => !e2.enableTimePicker || e2.monthPicker || e2.yearPicker || e2.ignoreTimeValidation, k2 = (m3) => Array.isArray(m3) ? [m3[0] ? bn(m3[0]) : null, m3[1] ? bn(m3[1]) : null] : bn(m3), R2 = (m3, $, j) => m3.find(
    (te) => +te.hours === getHours($) && te.minutes === "*" ? true : +te.minutes === getMinutes($) && +te.hours === getHours($)
  ) && j, Q2 = (m3, $, j) => {
    const [te, f] = m3, [y3, N] = $;
    return !R2(te, y3, j) && !R2(f, N, j) && j;
  }, q2 = (m3, $) => {
    const j = Array.isArray($) ? $ : [$];
    return Array.isArray(e2.disabledTimes) ? Array.isArray(e2.disabledTimes[0]) ? Q2(e2.disabledTimes, j, m3) : !j.some((te) => R2(e2.disabledTimes, te, m3)) : m3;
  }, x2 = (m3, $) => {
    const j = Array.isArray($) ? [pt($[0]), $[1] ? pt($[1]) : void 0] : pt($), te = !e2.disabledTimes(j);
    return m3 && te;
  }, se = (m3, $) => e2.disabledTimes ? Array.isArray(e2.disabledTimes) ? q2($, m3) : x2($, m3) : $;
  return {
    isDisabled: L2,
    validateDate: i2,
    validateMonthYearInRange: p,
    isDateRangeAllowed: B2,
    checkMinMaxRange: Y2,
    matchDate: T2,
    mapDatesArrToMap: _,
    isValidTime: (m3) => {
      let $ = true;
      if (!m3 || H3())
        return true;
      const j = !e2.minDate && !e2.maxDate ? k2(m3) : m3;
      return (e2.maxTime || e2.maxDate) && ($ = ma(
        e2.maxTime,
        e2.maxDate,
        "max",
        Ae(j),
        $
      )), (e2.minTime || e2.minDate) && ($ = ma(
        e2.minTime,
        e2.minDate,
        "min",
        Ae(j),
        $
      )), se(m3, $);
    }
  };
};
var Jt = () => {
  const e2 = computed(() => (a3, n) => a3 == null ? void 0 : a3.includes(n)), t2 = computed(() => (a3, n) => a3.count ? a3.solo ? true : n === 0 : true), r = computed(() => (a3, n) => a3.count ? a3.solo ? true : n === a3.count - 1 : true);
  return { hideNavigationButtons: e2, showLeftIcon: t2, showRightIcon: r };
};
var gl = (e2, t2, r) => {
  const a3 = ref(0), n = reactive({
    [bt.timePicker]: !e2.enableTimePicker || e2.timePicker || e2.monthPicker,
    [bt.calendar]: false,
    [bt.header]: false
  }), o = (...T2) => {
    var p;
    (p = e2.flow) != null && p.length && (n[T2] = true, Object.keys(n).filter((U) => !n[U]).length || P());
  }, i2 = () => {
    var T2;
    (T2 = e2.flow) != null && T2.length && a3.value !== -1 && (a3.value += 1, t2("flow-step", a3.value), P());
  }, d3 = () => {
    a3.value = -1;
  }, b2 = (T2, p, ...U) => {
    e2.flow[a3.value] === T2 && r.value && r.value[p](...U);
  }, P = () => {
    b2(et.month, "toggleMonthPicker", true), b2(et.year, "toggleYearPicker", true), b2(et.calendar, "toggleTimePicker", false, true), b2(et.time, "toggleTimePicker", true, true);
    const T2 = e2.flow[a3.value];
    (T2 === et.hours || T2 === et.minutes || T2 === et.seconds) && b2(T2, "toggleTimePicker", true, true, T2);
  };
  return { childMount: o, updateFlowStep: i2, resetFlow: d3, flowStep: a3 };
};
var xt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Array, Function, Object],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: false },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: [Boolean, Object], default: false },
  textInput: { type: [Boolean, Object], default: false },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: false },
  yearFirst: { type: Boolean, default: false }
};
var xe = {
  ...xt,
  shadow: { type: Boolean, default: false },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) },
  noOverlayFocus: { type: Boolean, default: false }
};
var yl = {
  key: 1,
  class: "dp__input_wrap"
};
var hl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"];
var pl = {
  key: 2,
  class: "dp__clear_icon"
};
var bl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...xt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, {
      defaultedTextInput: o,
      defaultedAriaLabels: i2,
      defaultedInline: d3,
      defaultedConfig: b2,
      getDefaultPattern: P,
      getDefaultStartTime: T2
    } = Te(n), p = ref(), U = ref(null), L2 = ref(false), B2 = ref(false), Y2 = computed(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !o.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: true,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: !!n.state,
        dp__input_invalid: n.state === false,
        dp__input_focus: L2.value || n.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [n.inputClassName]: !!n.inputClassName
      })
    ), G2 = () => {
      a3("set-input-date", null), n.autoApply && (a3("set-empty-date"), p.value = null);
    }, h4 = (f) => {
      const y3 = T2();
      return Kr(
        f,
        o.value.format ?? P(),
        y3 ?? Ba({}, n.enableSeconds),
        n.inputValue,
        B2.value
      );
    }, _ = (f) => {
      const { rangeSeparator: y3 } = o.value, [N, S3] = f.split(`${y3}`);
      if (N) {
        const w2 = h4(N.trim()), l = S3 ? h4(S3.trim()) : null, g = w2 && l ? [w2, l] : [w2];
        p.value = w2 ? g : null;
      }
    }, H3 = () => {
      B2.value = true;
    }, k2 = (f) => {
      if (n.range)
        _(f);
      else if (n.multiDates) {
        const y3 = f.split(";");
        p.value = y3.map((N) => h4(N.trim())).filter((N) => N);
      } else
        p.value = h4(f);
    }, R2 = (f) => {
      var N;
      const y3 = typeof f == "string" ? f : (N = f.target) == null ? void 0 : N.value;
      y3 !== "" ? (o.value.openMenu && !n.isMenuOpen && a3("open"), k2(y3), a3("set-input-date", p.value)) : G2(), B2.value = false, a3("update:input-value", y3);
    }, Q2 = (f) => {
      o.value.enabled ? (k2(f.target.value), o.value.enterSubmit && On(p.value) && n.inputValue !== "" ? (a3("set-input-date", p.value, true), p.value = null) : o.value.enterSubmit && n.inputValue === "" && (p.value = null, a3("clear"))) : se(f);
    }, q2 = (f) => {
      o.value.enabled && o.value.tabSubmit && k2(f.target.value), o.value.tabSubmit && On(p.value) && n.inputValue !== "" ? (a3("set-input-date", p.value, true, true), p.value = null) : o.value.tabSubmit && n.inputValue === "" && (p.value = null, a3("clear", true));
    }, x2 = () => {
      var f;
      L2.value = true, a3("focus"), o.value.enabled && o.value.selectOnFocus && ((f = U.value) == null || f.select());
    }, se = (f) => {
      f.preventDefault(), it(f, b2.value, true), o.value.enabled && o.value.openMenu && !d3.value.input && !n.isMenuOpen ? a3("open") : o.value.enabled || a3("toggle");
    }, E2 = () => {
      a3("real-blur"), L2.value = false, (!n.isMenuOpen || d3.value.enabled && d3.value.input) && a3("blur"), n.autoApply && o.value.enabled && p.value && !n.isMenuOpen && (a3("set-input-date", p.value), a3("select-date"), p.value = null);
    }, m3 = (f) => {
      it(f, b2.value, true), a3("clear");
    }, $ = (f) => {
      if (!o.value.enabled) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return t2({
      focusInput: () => {
        var f;
        (f = U.value) == null || f.focus({ preventScroll: true });
      },
      setParsedDate: (f) => {
        p.value = f;
      }
    }), (f, y3) => {
      var N;
      return openBlock(), createElementBlock("div", { onClick: se }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !unref(d3).enabled ? renderSlot(f.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !f.$slots.trigger && (!unref(d3).enabled || unref(d3).input) ? (openBlock(), createElementBlock("div", yl, [
          f.$slots["dp-input"] && !f.$slots.trigger && !unref(d3).enabled ? renderSlot(f.$slots, "dp-input", {
            key: 0,
            value: e2.inputValue,
            isMenuOpen: e2.isMenuOpen,
            onInput: R2,
            onEnter: Q2,
            onTab: q2,
            onClear: m3,
            onBlur: E2,
            onKeypress: $,
            onPaste: H3
          }) : createCommentVNode("", true),
          f.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            ref_key: "inputRef",
            ref: U,
            name: f.name,
            class: normalizeClass(Y2.value),
            inputmode: unref(o).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e2.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (N = unref(i2)) == null ? void 0 : N.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === false ? true : void 0,
            onInput: R2,
            onKeydown: [
              withKeys(Q2, ["enter"]),
              withKeys(q2, ["tab"]),
              $
            ],
            onBlur: E2,
            onFocus: x2,
            onKeypress: $,
            onPaste: H3
          }, null, 42, hl)),
          createBaseVNode("div", {
            onClick: y3[2] || (y3[2] = (S3) => a3("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: y3[0] || (y3[0] = (S3) => a3("toggle"))
            }, [
              renderSlot(f.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (openBlock(), createBlock(unref(Ft), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: y3[1] || (y3[1] = (S3) => a3("toggle"))
            })) : createCommentVNode("", true)
          ]),
          f.$slots["clear-icon"] && e2.inputValue && f.clearable && !f.disabled && !f.readonly ? (openBlock(), createElementBlock("span", pl, [
            renderSlot(f.$slots, "clear-icon", { clear: m3 })
          ])) : createCommentVNode("", true),
          f.clearable && !f.$slots["clear-icon"] && e2.inputValue && !f.disabled && !f.readonly ? (openBlock(), createBlock(unref(Aa), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: y3[3] || (y3[3] = withModifiers((S3) => m3(S3), ["prevent"]))
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var kl = ["title"];
var wl = { class: "dp__action_buttons" };
var Dl = ["disabled", "onKeydown"];
var Ml = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    calendarWidth: { type: Number, default: 0 },
    ...xe
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e2, { emit: t2 }) {
    const r = t2, a3 = e2, {
      defaultedActionRow: n,
      defaultedPreviewFormat: o,
      defaultedMultiCalendars: i2,
      defaultedTextInput: d3,
      defaultedInline: b2,
      getDefaultPattern: P
    } = Te(a3), { isValidTime: T2 } = Ct(a3), { buildMatrix: p } = ft(), U = ref(null), L2 = ref(null);
    onMounted(() => {
      a3.arrowNavigation && p([Se(U), Se(L2)], "actionRow");
    });
    const B2 = computed(() => a3.range && !a3.partialRange && a3.internalModelValue ? a3.internalModelValue.length === 2 : true), Y2 = computed(() => !G2.value || !h4.value || !B2.value), G2 = computed(() => !a3.enableTimePicker || a3.ignoreTimeValidation ? true : T2(a3.internalModelValue)), h4 = computed(() => a3.monthPicker ? a3.range && Array.isArray(a3.internalModelValue) ? !a3.internalModelValue.filter((m3) => !x2(m3)).length : x2(a3.internalModelValue) : true), _ = () => {
      const E2 = o.value;
      return a3.timePicker || a3.monthPicker, E2(Ae(a3.internalModelValue));
    }, H3 = () => {
      const E2 = a3.internalModelValue;
      return i2.value.count > 0 ? `${k2(E2[0])} - ${k2(E2[1])}` : [k2(E2[0]), k2(E2[1])];
    }, k2 = (E2) => Fa(
      E2,
      o.value,
      a3.formatLocale,
      d3.value.rangeSeparator,
      a3.modelAuto,
      P()
    ), R2 = computed(() => !a3.internalModelValue || !a3.menuMount ? "" : typeof o.value == "string" ? Array.isArray(a3.internalModelValue) ? a3.internalModelValue.length === 2 && a3.internalModelValue[1] ? H3() : a3.multiDates ? a3.internalModelValue.map((E2) => `${k2(E2)}`) : a3.modelAuto ? `${k2(a3.internalModelValue[0])}` : `${k2(a3.internalModelValue[0])} -` : k2(a3.internalModelValue) : _()), Q2 = () => a3.multiDates ? "; " : " - ", q2 = computed(
      () => Array.isArray(R2.value) ? R2.value.join(Q2()) : R2.value
    ), x2 = (E2) => {
      if (!a3.monthPicker)
        return true;
      let m3 = true;
      const $ = V(Qe(E2));
      if (a3.minDate && a3.maxDate) {
        const j = V(Qe(a3.minDate)), te = V(Qe(a3.maxDate));
        return Ne($, j) && _e($, te) || pe($, j) || pe($, te);
      }
      if (a3.minDate) {
        const j = V(Qe(a3.minDate));
        m3 = Ne($, j) || pe($, j);
      }
      if (a3.maxDate) {
        const j = V(Qe(a3.maxDate));
        m3 = _e($, j) || pe($, j);
      }
      return m3;
    }, se = () => {
      G2.value && h4.value && B2.value ? r("select-date") : r("invalid-select");
    };
    return (E2, m3) => (openBlock(), createElementBlock("div", {
      class: "dp__action_row",
      style: normalizeStyle(e2.calendarWidth ? { width: `${e2.calendarWidth}px` } : {})
    }, [
      E2.$slots["action-row"] ? renderSlot(E2.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: E2.internalModelValue,
        disabled: Y2.value,
        selectDate: () => E2.$emit("select-date"),
        closePicker: () => E2.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(n).showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: q2.value
        }, [
          E2.$slots["action-preview"] ? renderSlot(E2.$slots, "action-preview", {
            key: 0,
            value: E2.internalModelValue
          }) : createCommentVNode("", true),
          E2.$slots["action-preview"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(q2.value), 1)
          ], 64))
        ], 8, kl)) : createCommentVNode("", true),
        createBaseVNode("div", wl, [
          E2.$slots["action-buttons"] ? renderSlot(E2.$slots, "action-buttons", {
            key: 0,
            value: E2.internalModelValue
          }) : createCommentVNode("", true),
          E2.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !unref(b2).enabled && unref(n).showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: U,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: m3[0] || (m3[0] = ($) => E2.$emit("close-picker")),
              onKeydown: [
                m3[1] || (m3[1] = withKeys(($) => E2.$emit("close-picker"), ["enter"])),
                m3[2] || (m3[2] = withKeys(($) => E2.$emit("close-picker"), ["space"]))
              ]
            }, toDisplayString(E2.cancelText), 545)) : createCommentVNode("", true),
            unref(n).showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              ref_key: "cancelButtonRef",
              ref: U,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: m3[3] || (m3[3] = ($) => E2.$emit("select-now")),
              onKeydown: [
                m3[4] || (m3[4] = withKeys(($) => E2.$emit("select-now"), ["enter"])),
                m3[5] || (m3[5] = withKeys(($) => E2.$emit("select-now"), ["space"]))
              ]
            }, toDisplayString(E2.nowButtonLabel), 545)) : createCommentVNode("", true),
            unref(n).showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: L2,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: Y2.value,
              onKeydown: [
                withKeys(se, ["enter"]),
                withKeys(se, ["space"])
              ],
              onClick: se
            }, toDisplayString(E2.selectText), 41, Dl)) : createCommentVNode("", true)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
});
var $l = ["onKeydown"];
var Tl = { class: "dp__selection_grid_header" };
var Al = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"];
var Sl = ["aria-label", "onKeydown"];
var Ut = defineComponent({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e2, { expose: t2, emit: r }) {
    const { setSelectionGrid: a3, buildMultiLevelMatrix: n, setMonthPicker: o } = ft(), i2 = r, d3 = e2, { defaultedAriaLabels: b2, defaultedTextInput: P, defaultedConfig: T2 } = Te(
      d3
    ), { hideNavigationButtons: p } = Jt(), U = ref(false), L2 = ref(null), B2 = ref(null), Y2 = ref([]), G2 = ref(), h4 = ref(null), _ = ref(0), H3 = ref(null);
    onBeforeUpdate(() => {
      L2.value = null;
    }), onMounted(() => {
      nextTick().then(() => m3()), d3.noOverlayFocus || R2(), k2(true);
    }), onUnmounted(() => k2(false));
    const k2 = (w2) => {
      var l;
      d3.arrowNavigation && ((l = d3.headerRefs) != null && l.length ? o(w2) : a3(w2));
    }, R2 = () => {
      var l;
      const w2 = Se(B2);
      w2 && (P.value.enabled || (L2.value ? (l = L2.value) == null || l.focus({ preventScroll: true }) : w2.focus({ preventScroll: true })), U.value = w2.clientHeight < w2.scrollHeight);
    }, Q2 = computed(
      () => ({
        dp__overlay: true,
        "dp--overlay-absolute": !d3.useRelative,
        "dp--overlay-relative": d3.useRelative
      })
    ), q2 = computed(
      () => d3.useRelative ? { height: `${d3.height}px`, width: "260px" } : void 0
    ), x2 = computed(() => ({
      dp__overlay_col: true
    })), se = computed(
      () => ({
        dp__btn: true,
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: U.value,
        dp__button_bottom: d3.isLast
      })
    ), E2 = computed(() => {
      var w2, l;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((w2 = d3.items) == null ? void 0 : w2.length) <= 6,
        dp__container_block: ((l = d3.items) == null ? void 0 : l.length) > 6
      };
    });
    watch(
      () => d3.items,
      () => m3(),
      { deep: true }
    );
    const m3 = () => {
      nextTick().then(() => {
        const w2 = Se(L2), l = Se(B2), g = Se(h4), s3 = Se(H3), D2 = g ? g.getBoundingClientRect().height : 0;
        l && (l.getBoundingClientRect().height ? _.value = l.getBoundingClientRect().height - D2 : _.value = T2.value.modeHeight - D2), w2 && s3 && (s3.scrollTop = w2.offsetTop - s3.offsetTop - (_.value / 2 - w2.getBoundingClientRect().height) - D2);
      });
    }, $ = (w2) => {
      w2.disabled || i2("selected", w2.value);
    }, j = () => {
      i2("toggle"), i2("reset-flow");
    }, te = () => {
      d3.escClose && j();
    }, f = (w2, l, g, s3) => {
      w2 && (l.active && (L2.value = w2), d3.arrowNavigation && (Array.isArray(Y2.value[g]) ? Y2.value[g][s3] = w2 : Y2.value[g] = [w2], y3()));
    }, y3 = () => {
      var l, g;
      const w2 = (l = d3.headerRefs) != null && l.length ? [d3.headerRefs].concat(Y2.value) : Y2.value.concat([d3.skipButtonRef ? [] : [h4.value]]);
      n(Ae(w2), (g = d3.headerRefs) != null && g.length ? "monthPicker" : "selectionGrid");
    }, N = (w2) => {
      d3.arrowNavigation || it(w2, T2.value, true);
    }, S3 = (w2) => {
      G2.value = w2, i2("hover-value", w2);
    };
    return t2({ focusGrid: R2 }), (w2, l) => {
      var g;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: B2,
        class: normalizeClass(Q2.value),
        style: normalizeStyle(q2.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          withKeys(withModifiers(te, ["prevent"]), ["esc"]),
          l[0] || (l[0] = withKeys(withModifiers((s3) => N(s3), ["prevent"]), ["left"])),
          l[1] || (l[1] = withKeys(withModifiers((s3) => N(s3), ["prevent"]), ["up"])),
          l[2] || (l[2] = withKeys(withModifiers((s3) => N(s3), ["prevent"]), ["down"])),
          l[3] || (l[3] = withKeys(withModifiers((s3) => N(s3), ["prevent"]), ["right"]))
        ]
      }, [
        createBaseVNode("div", {
          ref_key: "containerRef",
          ref: H3,
          class: normalizeClass(E2.value),
          role: "grid",
          style: normalizeStyle({ height: `${_.value}px` })
        }, [
          createBaseVNode("div", Tl, [
            renderSlot(w2.$slots, "header")
          ]),
          w2.$slots.overlay ? renderSlot(w2.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(w2.items, (s3, D2) => (openBlock(), createElementBlock("div", {
            key: D2,
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: w2.items.length >= 3 }]),
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(s3, (ie, oe) => (openBlock(), createElementBlock("div", {
              key: ie.value,
              ref_for: true,
              ref: (u2) => f(u2, ie, D2, oe),
              role: "gridcell",
              class: normalizeClass(x2.value),
              "aria-selected": ie.active,
              "aria-disabled": ie.disabled || void 0,
              tabindex: "0",
              onClick: (u2) => $(ie),
              onKeydown: [
                withKeys(withModifiers((u2) => $(ie), ["prevent"]), ["enter"]),
                withKeys(withModifiers((u2) => $(ie), ["prevent"]), ["space"])
              ],
              onMouseover: (u2) => S3(ie.value)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(ie.className)
              }, [
                w2.$slots.item ? renderSlot(w2.$slots, "item", {
                  key: 0,
                  item: ie
                }) : createCommentVNode("", true),
                w2.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(ie.text), 1)
                ], 64))
              ], 2)
            ], 42, Al))), 128))
          ], 2))), 128))
        ], 6),
        w2.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: h4,
          type: "button",
          "aria-label": (g = unref(b2)) == null ? void 0 : g.toggleOverlay,
          class: normalizeClass(se.value),
          tabindex: "0",
          onClick: j,
          onKeydown: [
            withKeys(j, ["enter"]),
            withKeys(j, ["tab"])
          ]
        }, [
          renderSlot(w2.$slots, "button-icon")
        ], 42, Sl)), [
          [vShow, !unref(p)(w2.hideNavigation, w2.type)]
        ]) : createCommentVNode("", true)
      ], 46, $l);
    };
  }
});
var en = defineComponent({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean }
  },
  setup(e2) {
    const t2 = e2, r = computed(
      () => t2.multiCalendars > 0 ? [...Array(t2.multiCalendars).keys()] : [0]
    ), a3 = computed(() => ({
      dp__instance_calendar: t2.multiCalendars > 0
    }));
    return (n, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (i2, d3) => (openBlock(), createElementBlock("div", {
        key: i2,
        class: normalizeClass(a3.value)
      }, [
        renderSlot(n.$slots, "default", {
          instance: i2,
          index: d3
        })
      ], 2))), 128))
    ], 2));
  }
});
var Pl = ["aria-label", "aria-disabled"];
var Ot = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e2, { emit: t2 }) {
    const r = t2, a3 = ref(null);
    return onMounted(() => r("set-ref", a3)), (n, o) => (openBlock(), createElementBlock("button", {
      ref_key: "elRef",
      ref: a3,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: o[0] || (o[0] = (i2) => n.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = withKeys(withModifiers((i2) => n.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = withKeys(withModifiers((i2) => n.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      createBaseVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        renderSlot(n.$slots, "default")
      ], 2)
    ], 40, Pl));
  }
});
var Cl = { class: "dp--year-mode-picker" };
var _l = ["aria-label"];
var Ua = defineComponent({
  __name: "YearModePicker",
  props: {
    ...xe,
    showYearPicker: { type: Boolean, default: false },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => false }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e2, { emit: t2 }) {
    const r = t2, a3 = e2, { showRightIcon: n, showLeftIcon: o } = Jt(), { defaultedConfig: i2, defaultedMultiCalendars: d3, defaultedAriaLabels: b2, defaultedTransitions: P } = Te(a3), { showTransition: T2, transitionName: p } = Ht(P), U = (Y2 = false, G2) => {
      r("toggle-year-picker", { flow: Y2, show: G2 });
    }, L2 = (Y2) => {
      r("year-select", Y2);
    }, B2 = (Y2 = false) => {
      r("handle-year", Y2);
    };
    return (Y2, G2) => {
      var h4, _, H3;
      return openBlock(), createElementBlock("div", Cl, [
        unref(o)(unref(d3), e2.instance) ? (openBlock(), createBlock(Ot, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (h4 = unref(b2)) == null ? void 0 : h4.prevYear,
          disabled: e2.isDisabled(false),
          onActivate: G2[0] || (G2[0] = (k2) => B2(false))
        }, {
          default: withCtx(() => [
            Y2.$slots["arrow-left"] ? renderSlot(Y2.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
            Y2.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(En), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
        createBaseVNode("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (_ = unref(b2)) == null ? void 0 : _.openYearsOverlay,
          onClick: G2[1] || (G2[1] = () => U(false)),
          onKeydown: G2[2] || (G2[2] = withKeys(() => U(false), ["enter"]))
        }, [
          Y2.$slots.year ? renderSlot(Y2.$slots, "year", {
            key: 0,
            year: e2.year
          }) : createCommentVNode("", true),
          Y2.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(e2.year), 1)
          ], 64))
        ], 40, _l),
        unref(n)(unref(d3), e2.instance) ? (openBlock(), createBlock(Ot, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (H3 = unref(b2)) == null ? void 0 : H3.nextYear,
          disabled: e2.isDisabled(true),
          onActivate: G2[3] || (G2[3] = (k2) => B2(true))
        }, {
          default: withCtx(() => [
            Y2.$slots["arrow-right"] ? renderSlot(Y2.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
            Y2.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Fn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(p)(e2.showYearPicker),
          css: unref(T2)
        }, {
          default: withCtx(() => [
            e2.showYearPicker ? (openBlock(), createBlock(Ut, {
              key: 0,
              items: e2.items,
              "text-input": Y2.textInput,
              "esc-close": Y2.escClose,
              config: Y2.config,
              "is-last": Y2.autoApply && !unref(i2).keepActionRow,
              type: "year",
              onToggle: U,
              onSelected: G2[4] || (G2[4] = (k2) => L2(k2))
            }, createSlots({
              "button-icon": withCtx(() => [
                Y2.$slots["calendar-icon"] ? renderSlot(Y2.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                Y2.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
              ]),
              _: 2
            }, [
              Y2.$slots["year-overlay-value"] ? {
                name: "item",
                fn: withCtx(({ item: k2 }) => [
                  renderSlot(Y2.$slots, "year-overlay-value", {
                    text: k2.text,
                    value: k2.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
});
var Gn = (e2, t2, r) => {
  if (t2.value && Array.isArray(t2.value))
    if (t2.value.some((a3) => pe(e2, a3))) {
      const a3 = t2.value.filter((n) => !pe(n, e2));
      t2.value = a3.length ? a3 : null;
    } else
      (r && +r > t2.value.length || !r) && t2.value.push(e2);
  else
    t2.value = [e2];
};
var qn = (e2, t2, r) => {
  let a3 = e2.value ? e2.value.slice() : [];
  return a3.length === 2 && a3[1] !== null && (a3 = []), a3.length ? _e(t2, a3[0]) ? (a3.unshift(t2), r("range-start", a3[0]), r("range-start", a3[1])) : (a3[1] = t2, r("range-end", t2)) : (a3 = [t2], r("range-start", t2)), e2.value = a3, a3;
};
var tn = (e2, t2, r, a3) => {
  e2[0] && e2[1] && r && t2("auto-apply"), e2[0] && !e2[1] && a3 && r && t2("auto-apply");
};
var La = ({
  multiCalendars: e2,
  highlight: t2,
  calendars: r,
  modelValue: a3,
  props: n,
  year: o,
  month: i2,
  emit: d3
}) => {
  const b2 = computed(() => jn(n.yearRange, n.reverseYears)), P = ref([false]), T2 = computed(() => (k2, R2) => {
    const Q2 = set(Qe(/* @__PURE__ */ new Date()), {
      month: i2.value(k2),
      year: o.value(k2)
    });
    return Ea(Q2, n.maxDate, n.minDate, n.preventMinMaxNavigation, R2);
  }), p = () => {
    for (let k2 = 0; k2 < e2.value.count; k2++)
      if (k2 === 0)
        r.value[k2] = r.value[0];
      else {
        const R2 = set(V(), r.value[k2 - 1]);
        r.value[k2] = { month: getMonth(R2), year: getYear(addYears(R2, 1)) };
      }
  }, U = (k2) => {
    if (!k2)
      return p();
    const R2 = set(V(), r.value[k2]);
    return r.value[0].year = getYear(subYears(R2, e2.value.count - 1)), p();
  }, L2 = (k2) => n.focusStartDate ? k2[0] : k2[1] ? k2[1] : k2[0], B2 = () => {
    if (a3.value) {
      const k2 = Array.isArray(a3.value) ? L2(a3.value) : a3.value;
      r.value[0] = { month: getMonth(k2), year: getYear(k2) };
    }
  };
  onMounted(() => {
    B2(), e2.value.count && p();
  });
  const Y2 = (k2, R2) => {
    r.value[R2].year = k2, e2.value.count && !e2.value.solo && U(R2);
  }, G2 = computed(() => (k2) => At(b2.value, (R2) => {
    const Q2 = o.value(k2) === R2.value, q2 = Bt(R2.value, St(n.minDate), St(n.maxDate)), x2 = Kn(t2.value, R2.value);
    return { active: Q2, disabled: q2, highlighted: x2 };
  })), h4 = (k2, R2) => {
    Y2(k2, R2), H3(R2);
  }, _ = (k2, R2 = false) => {
    if (!T2.value(k2, R2)) {
      const Q2 = R2 ? o.value(k2) + 1 : o.value(k2) - 1;
      Y2(Q2, k2);
    }
  }, H3 = (k2, R2 = false, Q2) => {
    R2 || d3("reset-flow"), Q2 !== void 0 ? P.value[k2] = Q2 : P.value[k2] = !P.value[k2], P.value || d3("overlay-closed");
  };
  return {
    isDisabled: T2,
    groupedYears: G2,
    showYearPicker: P,
    selectYear: Y2,
    toggleYearPicker: H3,
    handleYearSelect: h4,
    handleYear: _
  };
};
var Rl = (e2, t2) => {
  const { defaultedMultiCalendars: r, defaultedAriaLabels: a3, defaultedTransitions: n, defaultedConfig: o, defaultedHighlight: i2 } = Te(e2), { modelValue: d3, year: b2, month: P, calendars: T2 } = Vt(e2, t2), p = computed(() => _a(e2.formatLocale, e2.locale, e2.monthNameFormat)), U = ref(null), {
    selectYear: L2,
    groupedYears: B2,
    showYearPicker: Y2,
    toggleYearPicker: G2,
    handleYearSelect: h4,
    handleYear: _,
    isDisabled: H3
  } = La({
    modelValue: d3,
    multiCalendars: r,
    highlight: i2,
    calendars: T2,
    year: b2,
    month: P,
    props: e2,
    emit: t2
  }), k2 = (S3) => S3 ? { month: getMonth(S3), year: getYear(S3) } : { month: null, year: null }, R2 = () => d3.value ? Array.isArray(d3.value) ? d3.value.map((S3) => k2(S3)) : k2(d3.value) : k2(), Q2 = (S3, w2) => {
    const l = T2.value[S3], g = R2();
    return Array.isArray(g) ? g.some((s3) => s3.year === (l == null ? void 0 : l.year) && s3.month === w2) : (l == null ? void 0 : l.year) === g.year && w2 === g.month;
  }, q2 = (S3, w2, l) => {
    var s3, D2;
    const g = R2();
    return Array.isArray(g) ? b2.value(w2) === ((s3 = g[l]) == null ? void 0 : s3.year) && S3 === ((D2 = g[l]) == null ? void 0 : D2.month) : false;
  }, x2 = (S3, w2) => {
    if (e2.range) {
      const l = R2();
      if (Array.isArray(d3.value) && Array.isArray(l)) {
        const g = q2(S3, w2, 0) || q2(S3, w2, 1), s3 = at(Qe(V()), S3, b2.value(w2));
        return Xt(d3.value, U.value, s3) && !g;
      }
      return false;
    }
    return false;
  }, se = computed(() => (S3) => At(p.value, (w2) => {
    const l = Q2(S3, w2.value), g = Bt(
      w2.value,
      Oa(b2.value(S3), e2.minDate),
      Ya(b2.value(S3), e2.maxDate)
    ) || Jr(e2.disabledDates, b2.value(S3)).includes(w2.value), s3 = x2(w2.value, S3), D2 = Ha(i2.value, w2.value, b2.value(S3));
    return { active: l, disabled: g, isBetween: s3, highlighted: D2 };
  })), E2 = (S3, w2) => at(Qe(V()), S3, b2.value(w2)), m3 = (S3, w2) => {
    const l = d3.value ? d3.value : Qe(/* @__PURE__ */ new Date());
    d3.value = at(l, S3, b2.value(w2)), t2("auto-apply");
  }, $ = (S3, w2) => {
    const l = qn(d3, E2(S3, w2), t2);
    tn(l, t2, e2.autoApply, e2.modelAuto);
  }, j = (S3, w2) => {
    Gn(E2(S3, w2), d3, e2.multiDatesLimit), t2("auto-apply", true);
  }, te = (S3, w2) => (T2.value[w2].month = S3, y3(w2, T2.value[w2].year, S3), e2.multiDates ? j(S3, w2) : e2.range ? $(S3, w2) : m3(S3, w2)), f = (S3, w2) => {
    L2(S3, w2), y3(w2, S3, null);
  }, y3 = (S3, w2, l) => {
    let g = l;
    if (!g) {
      const s3 = R2();
      g = Array.isArray(s3) ? s3[S3].month : s3.month;
    }
    t2("update-month-year", { instance: S3, year: w2, month: g });
  };
  return {
    groupedMonths: se,
    groupedYears: B2,
    year: b2,
    isDisabled: H3,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a3,
    defaultedTransitions: n,
    defaultedConfig: o,
    showYearPicker: Y2,
    modelValue: d3,
    setHoverDate: (S3, w2) => {
      U.value = E2(S3, w2);
    },
    selectMonth: te,
    selectYear: f,
    toggleYearPicker: G2,
    handleYearSelect: h4,
    handleYear: _,
    getModelMonthYear: R2
  };
};
var Ol = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...xe
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = useSlots(), o = Ve(n, "yearMode"), i2 = e2, {
      groupedMonths: d3,
      groupedYears: b2,
      year: P,
      isDisabled: T2,
      defaultedMultiCalendars: p,
      defaultedConfig: U,
      showYearPicker: L2,
      modelValue: B2,
      setHoverDate: Y2,
      selectMonth: G2,
      selectYear: h4,
      toggleYearPicker: _,
      handleYearSelect: H3,
      handleYear: k2,
      getModelMonthYear: R2
    } = Rl(i2, a3);
    return t2({ getSidebarProps: () => ({
      modelValue: B2,
      year: P,
      getModelMonthYear: R2,
      selectMonth: G2,
      selectYear: h4,
      handleYear: k2
    }) }), (q2, x2) => (openBlock(), createBlock(en, {
      "multi-calendars": unref(p).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: se }) => [
        q2.$slots["month-year"] ? renderSlot(q2.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
          year: unref(P),
          months: unref(d3)(se),
          years: unref(b2)(se),
          selectMonth: unref(G2),
          selectYear: unref(h4),
          instance: se
        }))) : (openBlock(), createBlock(Ut, {
          key: 1,
          items: unref(d3)(se),
          "arrow-navigation": q2.arrowNavigation,
          "is-last": q2.autoApply && !unref(U).keepActionRow,
          "esc-close": q2.escClose,
          height: unref(U).modeHeight,
          config: q2.config,
          "no-overlay-focus": q2.noOverlayFocus,
          "use-relative": "",
          type: "month",
          onSelected: (E2) => unref(G2)(E2, se),
          onHoverValue: (E2) => unref(Y2)(E2, se)
        }, {
          header: withCtx(() => [
            createVNode(Ua, mergeProps(q2.$props, {
              items: unref(b2)(se),
              instance: se,
              "show-year-picker": unref(L2)[se],
              year: unref(P)(se),
              "is-disabled": (E2) => unref(T2)(se, E2),
              onHandleYear: (E2) => unref(k2)(se, E2),
              onYearSelect: (E2) => unref(H3)(E2, se),
              onToggleYearPicker: (E2) => unref(_)(se, E2 == null ? void 0 : E2.flow, E2 == null ? void 0 : E2.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(o), (E2, m3) => ({
                name: E2,
                fn: withCtx(($) => [
                  renderSlot(q2.$slots, E2, normalizeProps(guardReactiveProps($)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
});
var Yl = (e2, t2) => {
  const { modelValue: r } = Vt(e2, t2), a3 = ref(null), { defaultedHighlight: n } = Te(e2), o = (p) => Array.isArray(r.value) ? r.value.some((U) => getYear(U) === p) : r.value ? getYear(r.value) === p : false, i2 = (p) => e2.range && Array.isArray(r.value) ? Xt(r.value, a3.value, b2(p)) : false, d3 = computed(() => At(jn(e2.yearRange, e2.reverseYears), (p) => {
    const U = o(p.value), L2 = Bt(p.value, St(e2.minDate), St(e2.maxDate)), B2 = i2(p.value), Y2 = Kn(n.value, p.value);
    return { active: U, disabled: L2, isBetween: B2, highlighted: Y2 };
  })), b2 = (p) => setYear(Qe(/* @__PURE__ */ new Date()), p);
  return {
    groupedYears: d3,
    modelValue: r,
    setHoverValue: (p) => {
      a3.value = setYear(Qe(/* @__PURE__ */ new Date()), p);
    },
    selectYear: (p) => {
      var U;
      if (e2.multiDates)
        return r.value ? Array.isArray(r.value) && (((U = r.value) == null ? void 0 : U.map((B2) => getYear(B2))).includes(p) ? r.value = r.value.filter((B2) => getYear(B2) !== p) : r.value.push(setYear(He(V()), p))) : r.value = [setYear(He(V()), p)], t2("auto-apply", true);
      if (e2.range) {
        const L2 = qn(r, b2(p), t2);
        return tn(L2, t2, e2.autoApply, e2.modelAuto);
      }
      r.value = b2(p), t2("auto-apply");
    }
  };
};
var Nl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, { groupedYears: o, modelValue: i2, selectYear: d3, setHoverValue: b2 } = Yl(n, a3), { defaultedConfig: P } = Te(n);
    return t2({ getSidebarProps: () => ({
      modelValue: i2,
      selectYear: d3
    }) }), (p, U) => (openBlock(), createElementBlock("div", null, [
      p.$slots["month-year"] ? renderSlot(p.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, {
        years: unref(o),
        selectYear: unref(d3)
      }))) : (openBlock(), createBlock(Ut, {
        key: 1,
        items: unref(o),
        "is-last": p.autoApply && !unref(P).keepActionRow,
        height: unref(P).modeHeight,
        config: p.config,
        "no-overlay-focus": p.noOverlayFocus,
        type: "year",
        "use-relative": "",
        onSelected: unref(d3),
        onHoverValue: unref(b2)
      }, createSlots({ _: 2 }, [
        p.$slots["year-overlay-value"] ? {
          name: "item",
          fn: withCtx(({ item: L2 }) => [
            renderSlot(p.$slots, "year-overlay-value", {
              text: L2.text,
              value: L2.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
    ]));
  }
});
var Il = {
  key: 0,
  class: "dp__time_input"
};
var Bl = ["aria-label", "onKeydown", "onClick"];
var El = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var Fl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var Hl = ["aria-label", "disabled", "onKeydown", "onClick"];
var Vl = ["aria-label", "onKeydown", "onClick"];
var Ul = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var Ll = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var Wl = { key: 0 };
var zl = ["aria-label", "onKeydown"];
var jl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => false },
    ...xe
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, { setTimePickerElements: o, setTimePickerBackRef: i2 } = ft(), { defaultedAriaLabels: d3, defaultedTransitions: b2, defaultedFilters: P, defaultedConfig: T2 } = Te(n), { transitionName: p, showTransition: U } = Ht(b2), L2 = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), B2 = ref("AM"), Y2 = ref(null), G2 = ref([]);
    onMounted(() => {
      a3("mounted");
    });
    const h4 = (u2) => set(/* @__PURE__ */ new Date(), {
      hours: u2.hours,
      minutes: u2.minutes,
      seconds: n.enableSeconds ? u2.seconds : 0,
      milliseconds: 0
    }), _ = computed(
      () => (u2) => te(u2, n[u2]) || k2(u2, n[u2])
    ), H3 = computed(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), k2 = (u2, O2) => n.range && !n.disableTimeRangeValidation ? !n.validateTime(u2, O2) : false, R2 = (u2, O2) => {
      if (n.range && !n.disableTimeRangeValidation) {
        const X2 = O2 ? +n[`${u2}Increment`] : -+n[`${u2}Increment`], C = n[u2] + X2;
        return !n.validateTime(u2, C);
      }
      return false;
    }, Q2 = computed(() => (u2) => !y3(+n[u2] + +n[`${u2}Increment`], u2) || R2(u2, true)), q2 = computed(() => (u2) => !y3(+n[u2] - +n[`${u2}Increment`], u2) || R2(u2, false)), x2 = (u2, O2) => add(set(V(), u2), O2), se = (u2, O2) => sub(set(V(), u2), O2), E2 = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), m3 = computed(() => {
      const u2 = [{ type: "hours" }, { type: "", separator: true }, { type: "minutes" }];
      return n.enableSeconds ? u2.concat([{ type: "", separator: true }, { type: "seconds" }]) : u2;
    }), $ = computed(() => m3.value.filter((u2) => !u2.separator)), j = computed(() => (u2) => {
      if (u2 === "hours") {
        const O2 = g(+n.hours);
        return { text: O2 < 10 ? `0${O2}` : `${O2}`, value: O2 };
      }
      return { text: n[u2] < 10 ? `0${n[u2]}` : `${n[u2]}`, value: n[u2] };
    }), te = (u2, O2) => {
      var C;
      if (!n.disabledTimesConfig)
        return false;
      const X2 = n.disabledTimesConfig(n.order, u2 === "hours" ? O2 : void 0);
      return X2[u2] ? !!((C = X2[u2]) != null && C.includes(O2)) : true;
    }, f = (u2) => {
      const O2 = n.is24 ? 24 : 12, X2 = u2 === "hours" ? O2 : 60, C = +n[`${u2}GridIncrement`], ne = u2 === "hours" && !n.is24 ? C : 0, me = [];
      for (let ye = ne; ye < X2; ye += C)
        me.push({ value: ye, text: ye < 10 ? `0${ye}` : `${ye}` });
      return u2 === "hours" && !n.is24 && me.push({ value: 0, text: "12" }), At(me, (ye) => ({ active: false, disabled: P.value.times[u2].includes(ye.value) || !y3(ye.value, u2) || te(u2, ye.value) || k2(u2, ye.value) }));
    }, y3 = (u2, O2) => {
      const X2 = n.minTime ? h4(yn(n.minTime)) : null, C = n.maxTime ? h4(yn(n.maxTime)) : null, ne = h4(yn(H3.value, O2, u2));
      return X2 && C ? (isBefore(ne, C) || isEqual(ne, C)) && (isAfter(ne, X2) || isEqual(ne, X2)) : X2 ? isAfter(ne, X2) || isEqual(ne, X2) : C ? isBefore(ne, C) || isEqual(ne, C) : true;
    }, N = (u2) => n[`no${u2[0].toUpperCase() + u2.slice(1)}Overlay`], S3 = (u2) => {
      N(u2) || (L2[u2] = !L2[u2], L2[u2] || a3("overlay-closed"));
    }, w2 = (u2) => u2 === "hours" ? getHours : u2 === "minutes" ? getMinutes : getSeconds, l = (u2, O2 = true) => {
      const X2 = O2 ? x2 : se, C = O2 ? +n[`${u2}Increment`] : -+n[`${u2}Increment`];
      y3(+n[u2] + C, u2) && a3(
        `update:${u2}`,
        w2(u2)(X2({ [u2]: +n[u2] }, { [u2]: +n[`${u2}Increment`] }))
      );
    }, g = (u2) => n.is24 ? u2 : (u2 >= 12 ? B2.value = "PM" : B2.value = "AM", Hr(u2)), s3 = () => {
      B2.value === "PM" ? (B2.value = "AM", a3("update:hours", n.hours - 12)) : (B2.value = "PM", a3("update:hours", n.hours + 12)), a3("am-pm-change", B2.value);
    }, D2 = (u2) => {
      L2[u2] = true;
    }, ie = (u2, O2, X2) => {
      if (u2 && n.arrowNavigation) {
        Array.isArray(G2.value[O2]) ? G2.value[O2][X2] = u2 : G2.value[O2] = [u2];
        const C = G2.value.reduce(
          (ne, me) => me.map((ye, I2) => [...ne[I2] || [], me[I2]]),
          []
        );
        i2(n.closeTimePickerBtn), Y2.value && (C[1] = C[1].concat(Y2.value)), o(C, n.order);
      }
    }, oe = (u2, O2) => (S3(u2), u2 === "hours" && !n.is24 ? a3(`update:${u2}`, B2.value === "PM" ? O2 + 12 : O2) : a3(`update:${u2}`, O2));
    return t2({ openChildCmp: D2 }), (u2, O2) => {
      var X2;
      return u2.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Il, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(m3.value, (C, ne) => {
          var me, ye, I2;
          return openBlock(), createElementBlock("div", {
            key: ne,
            class: normalizeClass(E2.value)
          }, [
            C.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 0),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !u2.timePickerInline,
                  dp__inc_dec_button_inline: u2.timePickerInline,
                  dp__tp_inline_btn_top: u2.timePickerInline,
                  dp__inc_dec_button_disabled: Q2.value(C.type)
                }),
                "aria-label": (me = unref(d3)) == null ? void 0 : me.incrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => l(C.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => l(C.type), ["prevent"]), ["space"])
                ],
                onClick: (F) => l(C.type)
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  El,
                  Fl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u2.$slots["arrow-up"] ? renderSlot(u2.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  u2.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Vn), { key: 1 }))
                ], 64))
              ], 42, Bl),
              createBaseVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 1),
                type: "button",
                "aria-label": (ye = unref(d3)) == null ? void 0 : ye.openTpOverlay(C.type),
                class: normalizeClass({
                  dp__time_display: true,
                  dp__time_display_block: !u2.timePickerInline,
                  dp__time_display_inline: u2.timePickerInline,
                  "dp--time-invalid": _.value(C.type),
                  "dp--time-overlay-btn": !_.value(C.type)
                }),
                disabled: N(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => S3(C.type), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => S3(C.type), ["prevent"]), ["space"])
                ],
                onClick: (F) => S3(C.type)
              }, [
                u2.$slots[C.type] ? renderSlot(u2.$slots, C.type, {
                  key: 0,
                  text: j.value(C.type).text,
                  value: j.value(C.type).value
                }) : createCommentVNode("", true),
                u2.$slots[C.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(j.value(C.type).text), 1)
                ], 64))
              ], 42, Hl),
              createBaseVNode("button", {
                ref_for: true,
                ref: (F) => ie(F, ne, 2),
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !u2.timePickerInline,
                  dp__inc_dec_button_inline: u2.timePickerInline,
                  dp__tp_inline_btn_bottom: u2.timePickerInline,
                  dp__inc_dec_button_disabled: q2.value(C.type)
                }),
                "aria-label": (I2 = unref(d3)) == null ? void 0 : I2.decrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  withKeys(withModifiers((F) => l(C.type, false), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((F) => l(C.type, false), ["prevent"]), ["space"])
                ],
                onClick: (F) => l(C.type, false)
              }, [
                n.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  Ul,
                  Ll
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  u2.$slots["arrow-down"] ? renderSlot(u2.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  u2.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Un), { key: 1 }))
                ], 64))
              ], 42, Vl)
            ], 64))
          ], 2);
        }), 128)),
        u2.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Wl, [
          u2.$slots["am-pm-button"] ? renderSlot(u2.$slots, "am-pm-button", {
            key: 0,
            toggle: s3,
            value: B2.value
          }) : createCommentVNode("", true),
          u2.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: Y2,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (X2 = unref(d3)) == null ? void 0 : X2.amPmButton,
            tabindex: "0",
            onClick: s3,
            onKeydown: [
              withKeys(withModifiers(s3, ["prevent"]), ["enter"]),
              withKeys(withModifiers(s3, ["prevent"]), ["space"])
            ]
          }, toDisplayString(B2.value), 41, zl))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList($.value, (C, ne) => (openBlock(), createBlock(Transition, {
          key: ne,
          name: unref(p)(L2[C.type]),
          css: unref(U)
        }, {
          default: withCtx(() => [
            L2[C.type] ? (openBlock(), createBlock(Ut, {
              key: 0,
              items: f(C.type),
              "is-last": u2.autoApply && !unref(T2).keepActionRow,
              "esc-close": u2.escClose,
              type: C.type,
              "text-input": u2.textInput,
              config: u2.config,
              "arrow-navigation": u2.arrowNavigation,
              onSelected: (me) => oe(C.type, me),
              onToggle: (me) => S3(C.type),
              onResetFlow: O2[0] || (O2[0] = (me) => u2.$emit("reset-flow"))
            }, createSlots({
              "button-icon": withCtx(() => [
                u2.$slots["clock-icon"] ? renderSlot(u2.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                u2.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Hn), { key: 1 }))
              ]),
              _: 2
            }, [
              u2.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: me }) => [
                  renderSlot(u2.$slots, `${C.type}-overlay-value`, {
                    text: me.text,
                    value: me.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
});
var Kl = { class: "dp--tp-wrap" };
var Gl = ["aria-label", "tabindex"];
var ql = ["tabindex"];
var Zl = ["aria-label"];
var Wa = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => false
    },
    ...xe
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, { buildMatrix: o, setTimePicker: i2 } = ft(), d3 = useSlots(), { defaultedTransitions: b2, defaultedAriaLabels: P, defaultedTextInput: T2, defaultedConfig: p } = Te(n), { transitionName: U, showTransition: L2 } = Ht(b2), { hideNavigationButtons: B2 } = Jt(), Y2 = ref(null), G2 = ref(null), h4 = ref([]), _ = ref(null);
    onMounted(() => {
      a3("mount"), !n.timePicker && n.arrowNavigation ? o([Se(Y2.value)], "time") : i2(true, n.timePicker);
    });
    const H3 = computed(() => n.range && n.modelAuto ? Ra(n.internalModelValue) : true), k2 = ref(false), R2 = (f) => ({
      hours: Array.isArray(n.hours) ? n.hours[f] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[f] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[f] : n.seconds
    }), Q2 = computed(() => {
      const f = [];
      if (n.range)
        for (let y3 = 0; y3 < 2; y3++)
          f.push(R2(y3));
      else
        f.push(R2(0));
      return f;
    }), q2 = (f, y3 = false, N = "") => {
      y3 || a3("reset-flow"), k2.value = f, a3(f ? "overlay-opened" : "overlay-closed"), n.arrowNavigation && i2(f), nextTick(() => {
        N !== "" && h4.value[0] && h4.value[0].openChildCmp(N);
      });
    }, x2 = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: n.autoApply && !p.value.keepActionRow
    })), se = Ve(d3, "timePicker"), E2 = (f, y3, N) => n.range ? y3 === 0 ? [f, Q2.value[1][N]] : [Q2.value[0][N], f] : f, m3 = (f) => {
      a3("update:hours", f);
    }, $ = (f) => {
      a3("update:minutes", f);
    }, j = (f) => {
      a3("update:seconds", f);
    }, te = () => {
      if (_.value && !T2.value.enabled && !n.noOverlayFocus) {
        const f = Ur(_.value);
        f && f.focus({ preventScroll: true });
      }
    };
    return t2({ toggleTimePicker: q2 }), (f, y3) => {
      var N;
      return openBlock(), createElementBlock("div", Kl, [
        !f.timePicker && !f.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: Y2,
          type: "button",
          class: normalizeClass(x2.value),
          "aria-label": (N = unref(P)) == null ? void 0 : N.openTimePicker,
          tabindex: f.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            y3[0] || (y3[0] = withKeys((S3) => q2(true), ["enter"])),
            y3[1] || (y3[1] = withKeys((S3) => q2(true), ["space"]))
          ],
          onClick: y3[2] || (y3[2] = (S3) => q2(true))
        }, [
          f.$slots["clock-icon"] ? renderSlot(f.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          f.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Hn), { key: 1 }))
        ], 42, Gl)), [
          [vShow, !unref(B2)(f.hideNavigation, "time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(U)(k2.value),
          css: unref(L2) && !f.timePickerInline
        }, {
          default: withCtx(() => {
            var S3;
            return [
              k2.value || f.timePicker || f.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: _,
                class: normalizeClass({
                  dp__overlay: !f.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !f.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: normalizeStyle(f.timePicker ? { height: `${unref(p).modeHeight}px` } : void 0),
                tabindex: f.timePickerInline ? void 0 : 0
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(
                    f.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  f.$slots["time-picker-overlay"] ? renderSlot(f.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e2.hours,
                    minutes: e2.minutes,
                    seconds: e2.seconds,
                    setHours: m3,
                    setMinutes: $,
                    setSeconds: j
                  }) : createCommentVNode("", true),
                  f.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(f.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Q2.value, (w2, l) => withDirectives((openBlock(), createBlock(jl, mergeProps({ key: l }, {
                      ...f.$props,
                      order: l,
                      hours: w2.hours,
                      minutes: w2.minutes,
                      seconds: w2.seconds,
                      closeTimePickerBtn: G2.value,
                      disabledTimesConfig: e2.disabledTimesConfig,
                      disabled: l === 0 ? f.fixedStart : f.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: h4,
                      "validate-time": (g, s3) => e2.validateTime(g, E2(s3, l, g)),
                      "onUpdate:hours": (g) => m3(E2(g, l, "hours")),
                      "onUpdate:minutes": (g) => $(E2(g, l, "minutes")),
                      "onUpdate:seconds": (g) => j(E2(g, l, "seconds")),
                      onMounted: te,
                      onOverlayClosed: te,
                      onAmPmChange: y3[3] || (y3[3] = (g) => f.$emit("am-pm-change", g))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(se), (g, s3) => ({
                        name: g,
                        fn: withCtx((D2) => [
                          renderSlot(f.$slots, g, normalizeProps(guardReactiveProps(D2)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, l === 0 ? true : H3.value]
                    ])), 128))
                  ], 2)),
                  !f.timePicker && !f.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: G2,
                    type: "button",
                    class: normalizeClass(x2.value),
                    "aria-label": (S3 = unref(P)) == null ? void 0 : S3.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      y3[4] || (y3[4] = withKeys((w2) => q2(false), ["enter"])),
                      y3[5] || (y3[5] = withKeys((w2) => q2(false), ["space"]))
                    ],
                    onClick: y3[6] || (y3[6] = (w2) => q2(false))
                  }, [
                    f.$slots["calendar-icon"] ? renderSlot(f.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    f.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
                  ], 42, Zl)), [
                    [vShow, !unref(B2)(f.hideNavigation, "time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 14, ql)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
});
var za = (e2, t2, r, a3) => {
  const n = (h4, _) => Array.isArray(t2[h4]) ? t2[h4][_] : t2[h4], o = (h4) => e2.enableSeconds ? Array.isArray(t2.seconds) ? t2.seconds[h4] : t2.seconds : 0, i2 = (h4, _) => h4 ? _ !== void 0 ? ut(h4, n("hours", _), n("minutes", _), o(_)) : ut(h4, t2.hours, t2.minutes, o()) : setSeconds(V(), o(_)), d3 = (h4, _) => {
    t2[h4] = _;
  }, b2 = (h4, _) => {
    const H3 = Object.fromEntries(
      Object.keys(t2).map((k2) => k2 === h4 ? [k2, _] : [k2, t2[k2]].slice())
    );
    if (e2.range && !e2.disableTimeRangeValidation) {
      const k2 = (Q2) => r.value ? ut(
        r.value[Q2],
        H3.hours[Q2],
        H3.minutes[Q2],
        H3.seconds[Q2]
      ) : null, R2 = (Q2) => setMilliseconds(r.value[Q2], 0);
      return !(pe(k2(0), k2(1)) && (isAfter(k2(0), R2(1)) || isBefore(k2(1), R2(0))));
    }
    return true;
  }, P = (h4, _) => {
    b2(h4, _) && (d3(h4, _), a3 && a3());
  }, T2 = (h4) => {
    P("hours", h4);
  }, p = (h4) => {
    P("minutes", h4);
  }, U = (h4) => {
    P("seconds", h4);
  }, L2 = (h4, _, H3, k2) => {
    _ && T2(h4), !_ && !H3 && p(h4), H3 && U(h4), r.value && k2(r.value);
  }, B2 = (h4) => {
    if (h4) {
      const _ = Array.isArray(h4), H3 = _ ? [+h4[0].hours, +h4[1].hours] : +h4.hours, k2 = _ ? [+h4[0].minutes, +h4[1].minutes] : +h4.minutes, R2 = _ ? [+h4[0].seconds, +h4[1].seconds] : +h4.seconds;
      d3("hours", H3), d3("minutes", k2), e2.enableSeconds && d3("seconds", R2);
    }
  }, Y2 = (h4, _) => {
    const H3 = {
      hours: Array.isArray(t2.hours) ? t2.hours[h4] : t2.hours,
      disabledArr: []
    };
    return (_ || _ === 0) && (H3.hours = _), Array.isArray(e2.disabledTimes) && (H3.disabledArr = e2.range && Array.isArray(e2.disabledTimes[h4]) ? e2.disabledTimes[h4] : e2.disabledTimes), H3;
  }, G2 = computed(() => (h4, _) => {
    var H3;
    if (Array.isArray(e2.disabledTimes)) {
      const { disabledArr: k2, hours: R2 } = Y2(h4, _), Q2 = k2.filter((q2) => +q2.hours === R2);
      return ((H3 = Q2[0]) == null ? void 0 : H3.minutes) === "*" ? { hours: [R2], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (Q2 == null ? void 0 : Q2.map((q2) => +q2.minutes)) ?? [],
        seconds: (Q2 == null ? void 0 : Q2.map((q2) => q2.seconds ? +q2.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: d3,
    updateHours: T2,
    updateMinutes: p,
    updateSeconds: U,
    getSetDateTime: i2,
    updateTimeValues: L2,
    getSecondsValue: o,
    assignStartTime: B2,
    validateTime: b2,
    disabledTimesConfig: G2
  };
};
var Ql = (e2, t2) => {
  const { modelValue: r, time: a3 } = Vt(e2, t2), { defaultedStartTime: n } = Te(e2), { updateTimeValues: o, getSetDateTime: i2, setTime: d3, assignStartTime: b2, disabledTimesConfig: P, validateTime: T2 } = za(e2, a3, r), p = (H3) => {
    const { hours: k2, minutes: R2, seconds: Q2 } = H3;
    return { hours: +k2, minutes: +R2, seconds: Q2 ? +Q2 : 0 };
  }, U = () => {
    if (e2.startTime) {
      if (Array.isArray(e2.startTime)) {
        const k2 = p(e2.startTime[0]), R2 = p(e2.startTime[1]);
        return [set(V(), k2), set(V(), R2)];
      }
      const H3 = p(e2.startTime);
      return set(V(), H3);
    }
    return e2.range ? [null, null] : null;
  }, L2 = () => {
    if (e2.range) {
      const [H3, k2] = U();
      r.value = [i2(H3, 0), i2(k2, 1)];
    } else
      r.value = i2(U());
  }, B2 = (H3) => Array.isArray(H3) ? [pt(V(H3[0])), pt(V(H3[1]))] : [pt(H3 ?? V())], Y2 = (H3, k2, R2) => {
    d3("hours", H3), d3("minutes", k2), d3("seconds", e2.enableSeconds ? R2 : 0);
  }, G2 = () => {
    const [H3, k2] = B2(r.value);
    return e2.range ? Y2(
      [H3.hours, k2.hours],
      [H3.minutes, k2.minutes],
      [H3.seconds, k2.minutes]
    ) : Y2(H3.hours, H3.minutes, H3.seconds);
  };
  onMounted(() => {
    if (!e2.shadow)
      return b2(n.value), r.value ? G2() : L2();
  });
  const h4 = () => {
    Array.isArray(r.value) ? r.value = r.value.map((H3, k2) => H3 && i2(H3, k2)) : r.value = i2(r.value), t2("time-update");
  };
  return {
    modelValue: r,
    time: a3,
    disabledTimesConfig: P,
    updateTime: (H3, k2 = true, R2 = false) => {
      o(H3, k2, R2, h4);
    },
    validateTime: T2
  };
};
var Xl = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...xe
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, o = useSlots(), i2 = Ve(o, "timePicker"), { time: d3, modelValue: b2, disabledTimesConfig: P, updateTime: T2, validateTime: p } = Ql(n, a3);
    return t2({ getSidebarProps: () => ({
      modelValue: b2,
      time: d3,
      updateTime: T2
    }) }), (L2, B2) => (openBlock(), createBlock(en, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: withCtx(() => [
        createVNode(Wa, mergeProps(L2.$props, {
          hours: unref(d3).hours,
          minutes: unref(d3).minutes,
          seconds: unref(d3).seconds,
          "internal-model-value": L2.internalModelValue,
          "disabled-times-config": unref(P),
          "validate-time": unref(p),
          "onUpdate:hours": B2[0] || (B2[0] = (Y2) => unref(T2)(Y2)),
          "onUpdate:minutes": B2[1] || (B2[1] = (Y2) => unref(T2)(Y2, false)),
          "onUpdate:seconds": B2[2] || (B2[2] = (Y2) => unref(T2)(Y2, false, true)),
          onAmPmChange: B2[3] || (B2[3] = (Y2) => L2.$emit("am-pm-change", Y2))
        }), createSlots({ _: 2 }, [
          renderList(unref(i2), (Y2, G2) => ({
            name: Y2,
            fn: withCtx((h4) => [
              renderSlot(L2.$slots, Y2, normalizeProps(guardReactiveProps(h4)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
});
var Jl = { class: "dp__month_year_row" };
var xl = ["aria-label", "onClick", "onKeydown"];
var eo = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...xe
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, {
      defaultedTransitions: o,
      defaultedAriaLabels: i2,
      defaultedMultiCalendars: d3,
      defaultedFilters: b2,
      defaultedConfig: P,
      defaultedHighlight: T2
    } = Te(n), { transitionName: p, showTransition: U } = Ht(o), { buildMatrix: L2 } = ft(), { handleMonthYearChange: B2, isDisabled: Y2, updateMonthYear: G2 } = dl(n, a3), { showLeftIcon: h4, showRightIcon: _ } = Jt(), H3 = ref(false), k2 = ref(false), R2 = ref([null, null, null, null]);
    onMounted(() => {
      a3("mount");
    });
    const Q2 = (l) => ({
      get: () => n[l],
      set: (g) => {
        const s3 = l === Ze.month ? Ze.year : Ze.month;
        a3("update-month-year", { [l]: g, [s3]: n[s3] }), l === Ze.month ? te(true) : f(true);
      }
    }), q2 = computed(Q2(Ze.month)), x2 = computed(Q2(Ze.year)), se = computed(() => (l) => ({
      month: n.month,
      year: n.year,
      items: l === Ze.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: G2,
      toggle: l === Ze.month ? te : f
    })), E2 = computed(() => {
      const l = n.months.find((g) => g.value === n.month);
      return l || { text: "", value: 0 };
    }), m3 = computed(() => At(n.months, (l) => {
      const g = n.month === l.value, s3 = Bt(
        l.value,
        Oa(n.year, n.minDate),
        Ya(n.year, n.maxDate)
      ) || b2.value.months.includes(l.value), D2 = Ha(T2.value, l.value, n.year);
      return { active: g, disabled: s3, highlighted: D2 };
    })), $ = computed(() => At(n.years, (l) => {
      const g = n.year === l.value, s3 = Bt(l.value, St(n.minDate), St(n.maxDate)) || b2.value.years.includes(l.value), D2 = Kn(T2.value, l.value);
      return { active: g, disabled: s3, highlighted: D2 };
    })), j = (l, g) => {
      g !== void 0 ? l.value = g : l.value = !l.value, l.value || a3("overlay-closed");
    }, te = (l = false, g) => {
      y3(l), j(H3, g);
    }, f = (l = false, g) => {
      y3(l), j(k2, g);
    }, y3 = (l) => {
      l || a3("reset-flow");
    }, N = (l, g) => {
      n.arrowNavigation && (R2.value[g] = Se(l), L2(R2.value, "monthYear"));
    }, S3 = computed(() => {
      var l, g;
      return [
        {
          type: Ze.month,
          index: 1,
          toggle: te,
          modelValue: q2.value,
          updateModelValue: (s3) => q2.value = s3,
          text: E2.value.text,
          showSelectionGrid: H3.value,
          items: m3.value,
          ariaLabel: (l = i2.value) == null ? void 0 : l.openMonthsOverlay
        },
        {
          type: Ze.year,
          index: 2,
          toggle: f,
          modelValue: x2.value,
          updateModelValue: (s3) => x2.value = s3,
          text: n.year,
          showSelectionGrid: k2.value,
          items: $.value,
          ariaLabel: (g = i2.value) == null ? void 0 : g.openYearsOverlay
        }
      ];
    }), w2 = computed(() => n.disableYearSelect ? [S3.value[0]] : n.yearFirst ? [...S3.value].reverse() : S3.value);
    return t2({
      toggleMonthPicker: te,
      toggleYearPicker: f,
      handleMonthYearChange: B2
    }), (l, g) => {
      var s3, D2, ie;
      return openBlock(), createElementBlock("div", Jl, [
        l.$slots["month-year"] ? renderSlot(l.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, { month: e2.month, year: e2.year, months: e2.months, years: e2.years, updateMonthYear: unref(G2), handleMonthYearChange: unref(B2), instance: e2.instance }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(h4)(unref(d3), e2.instance) && !l.vertical ? (openBlock(), createBlock(Ot, {
            key: 0,
            "aria-label": (s3 = unref(i2)) == null ? void 0 : s3.prevMonth,
            disabled: unref(Y2)(false),
            onActivate: g[0] || (g[0] = (oe) => unref(B2)(false, true)),
            onSetRef: g[1] || (g[1] = (oe) => N(oe, 0))
          }, {
            default: withCtx(() => [
              l.$slots["arrow-left"] ? renderSlot(l.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
              l.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(En), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["dp__month_year_wrap", {
              dp__year_disable_select: l.disableYearSelect
            }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(w2.value, (oe, u2) => (openBlock(), createElementBlock(Fragment, {
              key: oe.type
            }, [
              createBaseVNode("button", {
                ref_for: true,
                ref: (O2) => N(O2, u2 + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": oe.ariaLabel,
                onClick: oe.toggle,
                onKeydown: [
                  withKeys(withModifiers(oe.toggle, ["prevent"]), ["enter"]),
                  withKeys(withModifiers(oe.toggle, ["prevent"]), ["space"])
                ]
              }, [
                l.$slots[oe.type] ? renderSlot(l.$slots, oe.type, {
                  key: 0,
                  text: oe.text,
                  value: n[oe.type]
                }) : createCommentVNode("", true),
                l.$slots[oe.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(oe.text), 1)
                ], 64))
              ], 40, xl),
              createVNode(Transition, {
                name: unref(p)(oe.showSelectionGrid),
                css: unref(U)
              }, {
                default: withCtx(() => [
                  oe.showSelectionGrid ? (openBlock(), createBlock(Ut, {
                    key: 0,
                    items: oe.items,
                    "arrow-navigation": l.arrowNavigation,
                    "hide-navigation": l.hideNavigation,
                    "is-last": l.autoApply && !unref(P).keepActionRow,
                    "skip-button-ref": false,
                    config: l.config,
                    type: oe.type,
                    "header-refs": [],
                    "esc-close": l.escClose,
                    "text-input": l.textInput,
                    onSelected: oe.updateModelValue,
                    onToggle: oe.toggle
                  }, createSlots({
                    "button-icon": withCtx(() => [
                      l.$slots["calendar-icon"] ? renderSlot(l.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                      l.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ft), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    l.$slots[`${oe.type}-overlay-value`] ? {
                      name: "item",
                      fn: withCtx(({ item: O2 }) => [
                        renderSlot(l.$slots, `${oe.type}-overlay-value`, {
                          text: O2.text,
                          value: O2.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    l.$slots[`${oe.type}-overlay`] ? {
                      name: "overlay",
                      fn: withCtx(() => [
                        renderSlot(l.$slots, `${oe.type}-overlay`, normalizeProps(guardReactiveProps(se.value(oe.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    l.$slots[`${oe.type}-overlay-header`] ? {
                      name: "header",
                      fn: withCtx(() => [
                        renderSlot(l.$slots, `${oe.type}-overlay-header`, {
                          toggle: oe.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          unref(h4)(unref(d3), e2.instance) && l.vertical ? (openBlock(), createBlock(Ot, {
            key: 1,
            "aria-label": (D2 = unref(i2)) == null ? void 0 : D2.prevMonth,
            disabled: unref(Y2)(false),
            onActivate: g[2] || (g[2] = (oe) => unref(B2)(false, true))
          }, {
            default: withCtx(() => [
              l.$slots["arrow-up"] ? renderSlot(l.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
              l.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Vn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
          unref(_)(unref(d3), e2.instance) ? (openBlock(), createBlock(Ot, {
            key: 2,
            ref: "rightIcon",
            disabled: unref(Y2)(true),
            "aria-label": (ie = unref(i2)) == null ? void 0 : ie.nextMonth,
            onActivate: g[3] || (g[3] = (oe) => unref(B2)(true, true)),
            onSetRef: g[4] || (g[4] = (oe) => N(oe, l.disableYearSelect ? 2 : 3))
          }, {
            default: withCtx(() => [
              l.$slots[l.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(l.$slots, l.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
              l.$slots[l.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(l.vertical ? unref(Un) : unref(Fn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
var to = ["aria-label"];
var no = {
  class: "dp__calendar_header",
  role: "row"
};
var ao = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
};
var ro = createBaseVNode("div", { class: "dp__calendar_header_separator" }, null, -1);
var lo = ["aria-label"];
var oo = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
};
var so = { class: "dp__cell_inner" };
var io = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"];
var uo = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...xe
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, { buildMultiLevelMatrix: o } = ft(), { defaultedTransitions: i2, defaultedConfig: d3, defaultedAriaLabels: b2, defaultedMultiCalendars: P } = Te(n), T2 = ref(null), p = ref({
      bottom: "",
      left: "",
      transform: ""
    }), U = ref([]), L2 = ref(null), B2 = ref(true), Y2 = ref(""), G2 = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), h4 = ref([]), _ = ref({ left: "50%" }), H3 = computed(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), k2 = computed(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : Fr(n.formatLocale, n.locale, +n.weekStart));
    onMounted(() => {
      a3("mount", { cmp: "calendar", refs: U }), d3.value.noSwipe || L2.value && (L2.value.addEventListener("touchstart", te, { passive: false }), L2.value.addEventListener("touchend", f, { passive: false }), L2.value.addEventListener("touchmove", y3, { passive: false })), n.monthChangeOnScroll && L2.value && L2.value.addEventListener("wheel", w2, { passive: false });
    });
    const R2 = (D2) => D2 ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", Q2 = (D2, ie) => {
      if (n.transitions) {
        const oe = He(at(V(), n.month, n.year));
        Y2.value = Ne(He(at(V(), D2, ie)), oe) ? i2.value[R2(true)] : i2.value[R2(false)], B2.value = false, nextTick(() => {
          B2.value = true;
        });
      }
    }, q2 = computed(
      () => ({
        [n.calendarClassName]: !!n.calendarClassName
      })
    ), x2 = computed(() => (D2) => {
      const ie = Vr(D2);
      return {
        dp__marker_dot: ie.type === "dot",
        dp__marker_line: ie.type === "line"
      };
    }), se = computed(() => (D2) => pe(D2, T2.value)), E2 = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: P.value.count > 0 && n.instance !== 0
    })), m3 = computed(() => (D2) => n.hideOffsetDates ? D2.current : true), $ = async (D2, ie, oe) => {
      var u2, O2;
      if (a3("set-hover-date", D2), (O2 = (u2 = D2.marker) == null ? void 0 : u2.tooltip) != null && O2.length) {
        const X2 = Se(U.value[ie][oe]);
        if (X2) {
          const { width: C, height: ne } = X2.getBoundingClientRect();
          T2.value = D2.value;
          let me = { left: `${C / 2}px` }, ye = -50;
          if (await nextTick(), h4.value[0]) {
            const { left: I2, width: F } = h4.value[0].getBoundingClientRect();
            I2 < 0 && (me = { left: "0" }, ye = 0, _.value.left = `${C / 2}px`), window.innerWidth < I2 + F && (me = { right: "0" }, ye = 0, _.value.left = `${F - C / 2}px`);
          }
          p.value = {
            bottom: `${ne}px`,
            ...me,
            transform: `translateX(${ye}%)`
          }, a3("tooltip-open", D2.marker);
        }
      }
    }, j = (D2) => {
      T2.value && (T2.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a3("tooltip-close", D2.marker));
    }, te = (D2) => {
      G2.value.startX = D2.changedTouches[0].screenX, G2.value.startY = D2.changedTouches[0].screenY;
    }, f = (D2) => {
      G2.value.endX = D2.changedTouches[0].screenX, G2.value.endY = D2.changedTouches[0].screenY, N();
    }, y3 = (D2) => {
      n.vertical && !n.inline && D2.preventDefault();
    }, N = () => {
      const D2 = n.vertical ? "Y" : "X";
      Math.abs(G2.value[`start${D2}`] - G2.value[`end${D2}`]) > 10 && a3("handle-swipe", G2.value[`start${D2}`] > G2.value[`end${D2}`] ? "right" : "left");
    }, S3 = (D2, ie, oe) => {
      D2 && (Array.isArray(U.value[ie]) ? U.value[ie][oe] = D2 : U.value[ie] = [D2]), n.arrowNavigation && o(U.value, "calendar");
    }, w2 = (D2) => {
      n.monthChangeOnScroll && (D2.preventDefault(), a3("handle-scroll", D2));
    }, l = (D2) => {
      const ie = D2[0];
      return n.weekNumbers === "local" ? getWeek(ie.value, { weekStartsOn: +n.weekStart }) : n.weekNumbers === "iso" ? getISOWeek(ie.value) : typeof n.weekNumbers == "function" ? n.weekNumbers(ie.value) : "";
    }, g = (D2, ie) => {
      it(D2, d3.value), a3("select-date", ie);
    }, s3 = (D2) => {
      it(D2, d3.value);
    };
    return t2({ triggerTransition: Q2 }), (D2, ie) => {
      var oe;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(E2.value)
      }, [
        createBaseVNode("div", {
          ref_key: "calendarWrapRef",
          ref: L2,
          role: "grid",
          class: normalizeClass(q2.value),
          "aria-label": (oe = unref(b2)) == null ? void 0 : oe.calendarWrap
        }, [
          (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", no, [
              D2.weekNumbers ? (openBlock(), createElementBlock("div", ao, toDisplayString(D2.weekNumName), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(k2.value, (u2, O2) => (openBlock(), createElementBlock("div", {
                key: O2,
                class: "dp__calendar_header_item",
                role: "gridcell"
              }, [
                D2.$slots["calendar-header"] ? renderSlot(D2.$slots, "calendar-header", {
                  key: 0,
                  day: u2,
                  index: O2
                }) : createCommentVNode("", true),
                D2.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(u2), 1)
                ], 64))
              ]))), 128))
            ]),
            ro,
            createVNode(Transition, {
              name: Y2.value,
              css: !!D2.transitions
            }, {
              default: withCtx(() => {
                var u2;
                return [
                  B2.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "rowgroup",
                    "aria-label": ((u2 = unref(b2)) == null ? void 0 : u2.calendarDays) || void 0
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(H3.value, (O2, X2) => (openBlock(), createElementBlock("div", {
                      key: X2,
                      class: "dp__calendar_row",
                      role: "row"
                    }, [
                      D2.weekNumbers ? (openBlock(), createElementBlock("div", oo, [
                        createBaseVNode("div", so, toDisplayString(l(O2.days)), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(O2.days, (C, ne) => {
                        var me, ye, I2;
                        return openBlock(), createElementBlock("div", {
                          id: C.value.toISOString().split("T")[0],
                          ref_for: true,
                          ref: (F) => S3(F, X2, ne),
                          key: ne + X2,
                          role: "gridcell",
                          class: "dp__calendar_item",
                          "aria-selected": C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start,
                          "aria-disabled": C.classData.dp__cell_disabled || void 0,
                          "aria-label": (ye = (me = unref(b2)) == null ? void 0 : me.day) == null ? void 0 : ye.call(me, C),
                          tabindex: "0",
                          onClick: withModifiers((F) => g(F, C), ["prevent"]),
                          onKeydown: [
                            withKeys((F) => D2.$emit("select-date", C), ["enter"]),
                            withKeys((F) => D2.$emit("handle-space", C), ["space"])
                          ],
                          onMouseenter: (F) => $(C, X2, ne),
                          onMouseleave: (F) => j(C)
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(["dp__cell_inner", C.classData])
                          }, [
                            D2.$slots.day && m3.value(C) ? renderSlot(D2.$slots, "day", {
                              key: 0,
                              day: +C.text,
                              date: C.value
                            }) : createCommentVNode("", true),
                            D2.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(C.text), 1)
                            ], 64)),
                            C.marker && m3.value(C) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              D2.$slots.marker ? renderSlot(D2.$slots, "marker", {
                                key: 0,
                                marker: C.marker,
                                day: +C.text,
                                date: C.value
                              }) : (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: normalizeClass(x2.value(C.marker)),
                                style: normalizeStyle(C.marker.color ? { backgroundColor: C.marker.color } : {})
                              }, null, 6))
                            ], 64)) : createCommentVNode("", true),
                            se.value(C.value) ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              ref_for: true,
                              ref_key: "activeTooltip",
                              ref: h4,
                              class: "dp__marker_tooltip",
                              style: normalizeStyle(p.value)
                            }, [
                              (I2 = C.marker) != null && I2.tooltip ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: s3
                              }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(C.marker.tooltip, (F, $e) => (openBlock(), createElementBlock("div", {
                                  key: $e,
                                  class: "dp__tooltip_text"
                                }, [
                                  D2.$slots["marker-tooltip"] ? renderSlot(D2.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: F,
                                    day: C.value
                                  }) : createCommentVNode("", true),
                                  D2.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createBaseVNode("div", {
                                      class: "dp__tooltip_mark",
                                      style: normalizeStyle(F.color ? { backgroundColor: F.color } : {})
                                    }, null, 4),
                                    createBaseVNode("div", null, toDisplayString(F.text), 1)
                                  ], 64))
                                ]))), 128)),
                                createBaseVNode("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: normalizeStyle(_.value)
                                }, null, 4)
                              ])) : createCommentVNode("", true)
                            ], 4)) : createCommentVNode("", true)
                          ], 2)
                        ], 40, io);
                      }), 128))
                    ]))), 128))
                  ], 8, lo)) : createCommentVNode("", true)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, to)
      ], 2);
    };
  }
});
var ha = (e2) => Array.isArray(e2);
var co = (e2, t2, r, a3) => {
  const n = ref([]), { modelValue: o, calendars: i2, time: d3 } = Vt(e2, t2), { defaultedMultiCalendars: b2, defaultedStartTime: P } = Te(e2), { validateMonthYearInRange: T2, isDisabled: p, isDateRangeAllowed: U, checkMinMaxRange: L2 } = Ct(e2), { updateTimeValues: B2, getSetDateTime: Y2, setTime: G2, assignStartTime: h4, validateTime: _, disabledTimesConfig: H3 } = za(e2, d3, o, a3), k2 = computed(
    () => (v) => i2.value[v] ? i2.value[v].month : 0
  ), R2 = computed(
    () => (v) => i2.value[v] ? i2.value[v].year : 0
  ), Q2 = (v, z2, A) => {
    var J, re;
    i2.value[v] || (i2.value[v] = { month: 0, year: 0 }), i2.value[v].month = ca(z2) ? (J = i2.value[v]) == null ? void 0 : J.month : z2, i2.value[v].year = ca(A) ? (re = i2.value[v]) == null ? void 0 : re.year : A;
  }, q2 = () => {
    e2.autoApply && t2("select-date");
  };
  watch(o, (v, z2) => {
    JSON.stringify(v) !== JSON.stringify(z2) && E2();
  }), onMounted(() => {
    e2.shadow || (o.value || (l(), P.value && h4(P.value)), E2(true), e2.focusStartDate && e2.startDate && l());
  });
  const x2 = computed(() => {
    var v;
    return (v = e2.flow) != null && v.length && !e2.partialFlow ? e2.flowStep === e2.flow.length : true;
  }), se = () => {
    e2.autoApply && x2.value && t2("auto-apply", e2.partialFlow);
  }, E2 = (v = false) => {
    if (o.value)
      return Array.isArray(o.value) ? (n.value = o.value, y3(v)) : $(o.value, v);
    if (b2.value.count && v && !e2.startDate)
      return m3(V(), v);
  }, m3 = (v, z2 = false) => {
    if ((!b2.value.count || !b2.value.static || z2) && Q2(0, getMonth(v), getYear(v)), b2.value.count)
      for (let A = 1; A < b2.value.count; A++) {
        const J = set(V(), { month: k2.value(A - 1), year: R2.value(A - 1) }), re = add(J, { months: 1 });
        i2.value[A] = { month: getMonth(re), year: getYear(re) };
      }
  }, $ = (v, z2) => {
    m3(v), G2("hours", getHours(v)), G2("minutes", getMinutes(v)), G2("seconds", getSeconds(v)), b2.value.count && z2 && w2();
  }, j = (v) => {
    if (b2.value.count) {
      if (b2.value.solo)
        return 0;
      const z2 = getMonth(v[0]), A = getMonth(v[1]);
      return Math.abs(A - z2) < b2.value.count ? 0 : 1;
    }
    return 1;
  }, te = (v, z2) => {
    v[1] && e2.showLastInRange ? m3(v[j(v)], z2) : m3(v[0], z2);
    const A = (J, re) => [
      J(v[0]),
      v[1] ? J(v[1]) : d3[re][1]
    ];
    G2("hours", A(getHours, "hours")), G2("minutes", A(getMinutes, "minutes")), G2("seconds", A(getSeconds, "seconds"));
  }, f = (v, z2) => {
    if ((e2.range || e2.weekPicker) && !e2.multiDates)
      return te(v, z2);
    if (e2.multiDates && z2) {
      const A = v[v.length - 1];
      return $(A, z2);
    }
  }, y3 = (v) => {
    const z2 = o.value;
    f(z2, v), b2.value.count && b2.value.solo && w2();
  }, N = (v, z2) => {
    const A = set(V(), { month: k2.value(z2), year: R2.value(z2) }), J = v < 0 ? addMonths(A, 1) : subMonths(A, 1);
    T2(getMonth(J), getYear(J), v < 0, e2.preventMinMaxNavigation) && (Q2(z2, getMonth(J), getYear(J)), t2("update-month-year", { instance: z2, month: getMonth(J), year: getYear(J) }), b2.value.count && !b2.value.solo && S3(z2), r());
  }, S3 = (v) => {
    for (let z2 = v - 1; z2 >= 0; z2--) {
      const A = subMonths(set(V(), { month: k2.value(z2 + 1), year: R2.value(z2 + 1) }), 1);
      Q2(z2, getMonth(A), getYear(A));
    }
    for (let z2 = v + 1; z2 <= b2.value.count - 1; z2++) {
      const A = addMonths(set(V(), { month: k2.value(z2 - 1), year: R2.value(z2 - 1) }), 1);
      Q2(z2, getMonth(A), getYear(A));
    }
  }, w2 = () => {
    if (Array.isArray(o.value) && o.value.length === 2) {
      const v = V(
        V(o.value[1] ? o.value[1] : addMonths(o.value[0], 1))
      ), [z2, A] = [getMonth(o.value[0]), getYear(o.value[0])], [J, re] = [getMonth(o.value[1]), getYear(o.value[1])];
      (z2 !== J || z2 === J && A !== re) && b2.value.solo && Q2(1, getMonth(v), getYear(v));
    } else
      o.value && !Array.isArray(o.value) && (Q2(0, getMonth(o.value), getYear(o.value)), m3(V()));
  }, l = () => {
    e2.startDate && (Q2(0, getMonth(V(e2.startDate)), getYear(V(e2.startDate))), b2.value.count && S3(0));
  }, g = (v, z2) => {
    e2.monthChangeOnScroll && N(e2.monthChangeOnScroll !== "inverse" ? -v.deltaY : v.deltaY, z2);
  }, s3 = (v, z2, A = false) => {
    e2.monthChangeOnArrows && e2.vertical === A && D2(v, z2);
  }, D2 = (v, z2) => {
    N(v === "right" ? -1 : 1, z2);
  }, ie = (v) => e2.markers.find((z2) => pe(va(v.value), va(z2.date))), oe = (v, z2) => {
    switch (e2.sixWeeks === true ? "append" : e2.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [v == 0, true];
      case "fair":
        return [v == 0 || z2 > v, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, u2 = (v, z2, A, J) => {
    if (e2.sixWeeks && v.length < 6) {
      const re = 6 - v.length, Ue = (z2.getDay() + 7 - J) % 7, wt = 6 - (A.getDay() + 7 - J) % 7, [_t, dn] = oe(Ue, wt);
      for (let mt = 1; mt <= re; mt++)
        if (dn ? !!(mt % 2) == _t : _t) {
          const Lt = v[0].days[0], cn = O2(addDays(Lt.value, -7), getMonth(z2));
          v.unshift({ days: cn });
        } else {
          const Lt = v[v.length - 1], cn = Lt.days[Lt.days.length - 1], Ka = O2(addDays(cn.value, 1), getMonth(z2));
          v.push({ days: Ka });
        }
    }
    return v;
  }, O2 = (v, z2) => {
    const A = V(v), J = [];
    for (let re = 0; re < 7; re++) {
      const Ue = addDays(A, re), qe = getMonth(Ue) !== z2;
      J.push({
        text: e2.hideOffsetDates && qe ? "" : Ue.getDate(),
        value: Ue,
        current: !qe,
        classData: {}
      });
    }
    return J;
  }, X2 = (v, z2) => {
    const A = [], J = V(Le(new Date(z2, v), e2.timezone)), re = V(Le(new Date(z2, v + 1, 0), e2.timezone)), Ue = e2.weekStart, qe = startOfWeek(J, { weekStartsOn: Ue }), wt = (_t) => {
      const dn = O2(_t, v);
      if (A.push({ days: dn }), !A[A.length - 1].days.some(
        (mt) => pe(He(mt.value), He(re))
      )) {
        const mt = addDays(_t, 7);
        wt(mt);
      }
    };
    return wt(qe), u2(A, J, re, Ue);
  }, C = (v) => (o.value = qt(V(v.value), e2.timezone, e2.weekStart), t2("date-update", v.value), se()), ne = (v) => {
    const z2 = ut(V(v.value), d3.hours, d3.minutes, Ke());
    t2("date-update", z2), e2.multiDates ? Gn(z2, o, e2.multiDatesLimit) : o.value = z2, a3(), nextTick().then(() => {
      se();
    });
  }, me = (v) => e2.noDisabledRange ? Ia(n.value[0], v).some((A) => p(A)) : false, ye = () => {
    n.value = o.value ? o.value.slice() : [], n.value.length === 2 && !(e2.fixedStart || e2.fixedEnd) && (n.value = []);
  }, I2 = (v, z2) => {
    const A = [V(v.value), addDays(V(v.value), +e2.autoRange)];
    U(A) ? (z2 && F(v.value), n.value = A) : t2("invalid-date", v.value);
  }, F = (v) => {
    const z2 = getMonth(V(v)), A = getYear(V(v));
    if (Q2(0, z2, A), b2.value.count > 0)
      for (let J = 1; J < b2.value.count; J++) {
        const re = qr(
          set(V(v), { year: k2.value(J - 1), month: R2.value(J - 1) })
        );
        Q2(J, re.month, re.year);
      }
  }, $e = (v) => Array.isArray(o.value) && o.value.length === 2 ? e2.fixedStart && (Ne(v, o.value[0]) || pe(v, o.value[0])) ? [o.value[0], v] : e2.fixedEnd && (_e(v, o.value[1]) || pe(v, o.value[1])) ? [v, o.value[1]] : (t2("invalid-fixed-range", v), o.value) : [], ae = (v) => {
    if (me(v.value) || !L2(v.value, o.value, e2.fixedStart ? 0 : 1))
      return t2("invalid-date", v.value);
    n.value = $e(V(v.value));
  }, je = (v, z2) => {
    if (ye(), e2.autoRange)
      return I2(v, z2);
    if (e2.fixedStart || e2.fixedEnd)
      return ae(v);
    n.value[0] ? L2(V(v.value), o.value) && !me(v.value) ? _e(V(v.value), V(n.value[0])) ? (n.value.unshift(V(v.value)), t2("range-end", n.value[0])) : (n.value[1] = V(v.value), t2("range-end", n.value[1])) : (e2.autoApply && t2("auto-apply-invalid", v.value), t2("invalid-date", v.value)) : (n.value[0] = V(v.value), t2("range-start", n.value[0]));
  }, Ke = (v = true) => e2.enableSeconds ? Array.isArray(d3.seconds) ? v ? d3.seconds[0] : d3.seconds[1] : d3.seconds : 0, vt = (v) => {
    n.value[v] = ut(
      n.value[v],
      d3.hours[v],
      d3.minutes[v],
      Ke(v !== 1)
    );
  }, Ge = () => {
    var v, z2;
    n.value[0] && n.value[1] && +((v = n.value) == null ? void 0 : v[0]) > +((z2 = n.value) == null ? void 0 : z2[1]) && (n.value.reverse(), t2("range-start", n.value[0]), t2("range-end", n.value[1]));
  }, nn = () => {
    n.value.length && (n.value[0] && !n.value[1] ? vt(0) : (vt(0), vt(1), a3()), Ge(), o.value = n.value.slice(), tn(n.value, t2, e2.autoApply, e2.modelAuto));
  }, an = (v, z2 = false) => {
    if (p(v.value) || !v.current && e2.hideOffsetDates)
      return t2("invalid-date", v.value);
    if (e2.weekPicker)
      return C(v);
    if (!e2.range)
      return ne(v);
    ha(d3.hours) && ha(d3.minutes) && !e2.multiDates && (je(v, z2), nn());
  }, rn = (v, z2) => {
    var J;
    Q2(v, z2.month, z2.year), b2.value.count && !b2.value.solo && S3(v), t2("update-month-year", { instance: v, month: z2.month, year: z2.year }), r(b2.value.solo ? v : void 0);
    const A = (J = e2.flow) != null && J.length ? e2.flow[e2.flowStep] : void 0;
    !z2.fromNav && (A === et.month || A === et.year) && a3();
  }, ln = (v, z2) => {
    Array.isArray(v) && v.length <= 2 && e2.range ? o.value = v.map((A) => Le(V(A), z2 ? void 0 : e2.timezone)) : Array.isArray(v) || (o.value = Le(V(v), z2 ? void 0 : e2.timezone)), q2(), e2.multiCalendars && nextTick().then(() => E2(true));
  }, on = () => {
    e2.range ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = _e(V(), o.value[0]) ? [V(), o.value[0]] : [o.value[0], V()] : o.value = [V()] : o.value = V(), q2();
  }, sn = () => {
    if (Array.isArray(o.value))
      if (e2.multiDates) {
        const v = un();
        o.value[o.value.length - 1] = Y2(v);
      } else
        o.value = o.value.map((v, z2) => v && Y2(v, z2));
    else
      o.value = Y2(o.value);
    t2("time-update");
  }, un = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
  return {
    calendars: i2,
    modelValue: o,
    month: k2,
    year: R2,
    time: d3,
    disabledTimesConfig: H3,
    validateTime: _,
    getCalendarDays: X2,
    getMarker: ie,
    handleScroll: g,
    handleSwipe: D2,
    handleArrow: s3,
    selectDate: an,
    updateMonthYear: rn,
    presetDate: ln,
    selectCurrentDate: on,
    updateTime: (v, z2 = true, A = false) => {
      B2(v, z2, A, sn);
    }
  };
};
var fo = { key: 0 };
var vo = defineComponent({
  __name: "DatePicker",
  props: {
    ...xe
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, {
      calendars: o,
      month: i2,
      year: d3,
      modelValue: b2,
      time: P,
      disabledTimesConfig: T2,
      validateTime: p,
      getCalendarDays: U,
      getMarker: L2,
      handleArrow: B2,
      handleScroll: Y2,
      handleSwipe: G2,
      selectDate: h4,
      updateMonthYear: _,
      presetDate: H3,
      selectCurrentDate: k2,
      updateTime: R2
    } = co(n, a3, w2, l), Q2 = useSlots(), { setHoverDate: q2, getDayClassData: x2, clearHoverDate: se } = ml(b2, n), { defaultedMultiCalendars: E2 } = Te(n), m3 = ref([]), $ = ref([]), j = ref(null), te = Ve(Q2, "calendar"), f = Ve(Q2, "monthYear"), y3 = Ve(Q2, "timePicker"), N = (u2) => {
      n.shadow || a3("mount", u2);
    };
    watch(
      o,
      () => {
        n.shadow || setTimeout(() => {
          a3("recalculate-position");
        }, 0);
      },
      { deep: true }
    );
    const S3 = computed(() => (u2) => U(i2.value(u2), d3.value(u2)).map((O2) => ({
      ...O2,
      days: O2.days.map((X2) => (X2.marker = L2(X2), X2.classData = x2(X2), X2))
    })));
    function w2(u2) {
      var O2;
      u2 || u2 === 0 ? (O2 = $.value[u2]) == null || O2.triggerTransition(i2.value(u2), d3.value(u2)) : $.value.forEach((X2, C) => X2.triggerTransition(i2.value(C), d3.value(C)));
    }
    function l() {
      a3("update-flow-step");
    }
    const g = (u2, O2 = false) => {
      h4(u2, O2), n.spaceConfirm && a3("select-date");
    };
    return t2({
      clearHoverDate: se,
      presetDate: H3,
      selectCurrentDate: k2,
      toggleMonthPicker: (u2, O2, X2 = 0) => {
        var C;
        (C = m3.value[X2]) == null || C.toggleMonthPicker(u2, O2);
      },
      toggleYearPicker: (u2, O2, X2 = 0) => {
        var C;
        (C = m3.value[X2]) == null || C.toggleYearPicker(u2, O2);
      },
      toggleTimePicker: (u2, O2, X2) => {
        var C;
        (C = j.value) == null || C.toggleTimePicker(u2, O2, X2);
      },
      handleArrow: B2,
      updateMonthYear: _,
      getSidebarProps: () => ({
        modelValue: b2,
        month: i2,
        year: d3,
        time: P,
        updateTime: R2,
        updateMonthYear: _,
        selectDate: h4,
        presetDate: H3
      })
    }), (u2, O2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(en, {
        "multi-calendars": unref(E2).count
      }, {
        default: withCtx(({ instance: X2, index: C }) => [
          u2.disableMonthYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(eo, mergeProps({
            key: 0,
            ref: (ne) => {
              ne && (m3.value[C] = ne);
            },
            months: unref(_a)(u2.formatLocale, u2.locale, u2.monthNameFormat),
            years: unref(jn)(u2.yearRange, u2.reverseYears),
            month: unref(i2)(X2),
            year: unref(d3)(X2),
            instance: X2
          }, u2.$props, {
            onMount: O2[0] || (O2[0] = (ne) => N(unref(bt).header)),
            onResetFlow: O2[1] || (O2[1] = (ne) => u2.$emit("reset-flow")),
            onUpdateMonthYear: (ne) => unref(_)(X2, ne),
            onOverlayClosed: O2[2] || (O2[2] = (ne) => u2.$emit("focus-menu"))
          }), createSlots({ _: 2 }, [
            renderList(unref(f), (ne, me) => ({
              name: ne,
              fn: withCtx((ye) => [
                renderSlot(u2.$slots, ne, normalizeProps(guardReactiveProps(ye)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          createVNode(uo, mergeProps({
            ref: (ne) => {
              ne && ($.value[C] = ne);
            },
            "mapped-dates": S3.value(X2),
            month: unref(i2)(X2),
            year: unref(d3)(X2),
            instance: X2
          }, u2.$props, {
            onSelectDate: (ne) => unref(h4)(ne, X2 !== 1),
            onHandleSpace: (ne) => g(ne, X2 !== 1),
            onSetHoverDate: O2[3] || (O2[3] = (ne) => unref(q2)(ne)),
            onHandleScroll: (ne) => unref(Y2)(ne, X2),
            onHandleSwipe: (ne) => unref(G2)(ne, X2),
            onMount: O2[4] || (O2[4] = (ne) => N(unref(bt).calendar)),
            onResetFlow: O2[5] || (O2[5] = (ne) => u2.$emit("reset-flow")),
            onTooltipOpen: O2[6] || (O2[6] = (ne) => u2.$emit("tooltip-open", ne)),
            onTooltipClose: O2[7] || (O2[7] = (ne) => u2.$emit("tooltip-close", ne))
          }), createSlots({ _: 2 }, [
            renderList(unref(te), (ne, me) => ({
              name: ne,
              fn: withCtx((ye) => [
                renderSlot(u2.$slots, ne, normalizeProps(guardReactiveProps({ ...ye })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      u2.enableTimePicker ? (openBlock(), createElementBlock("div", fo, [
        u2.$slots["time-picker"] ? renderSlot(u2.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(P), updateTime: unref(R2) }))) : (openBlock(), createBlock(Wa, mergeProps({
          key: 1,
          ref_key: "timePickerRef",
          ref: j
        }, u2.$props, {
          hours: unref(P).hours,
          minutes: unref(P).minutes,
          seconds: unref(P).seconds,
          "internal-model-value": u2.internalModelValue,
          "disabled-times-config": unref(T2),
          "validate-time": unref(p),
          onMount: O2[8] || (O2[8] = (X2) => N(unref(bt).timePicker)),
          "onUpdate:hours": O2[9] || (O2[9] = (X2) => unref(R2)(X2)),
          "onUpdate:minutes": O2[10] || (O2[10] = (X2) => unref(R2)(X2, false)),
          "onUpdate:seconds": O2[11] || (O2[11] = (X2) => unref(R2)(X2, false, true)),
          onResetFlow: O2[12] || (O2[12] = (X2) => u2.$emit("reset-flow")),
          onOverlayClosed: O2[13] || (O2[13] = (X2) => u2.$emit("time-picker-close")),
          onOverlayOpened: O2[14] || (O2[14] = (X2) => u2.$emit("time-picker-open", X2)),
          onAmPmChange: O2[15] || (O2[15] = (X2) => u2.$emit("am-pm-change", X2))
        }), createSlots({ _: 2 }, [
          renderList(unref(y3), (X2, C) => ({
            name: X2,
            fn: withCtx((ne) => [
              renderSlot(u2.$slots, X2, normalizeProps(guardReactiveProps(ne)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : createCommentVNode("", true)
    ], 64));
  }
});
var mo = (e2, t2) => {
  const r = ref(), { defaultedMultiCalendars: a3, defaultedConfig: n, defaultedHighlight: o } = Te(e2), { modelValue: i2, year: d3, month: b2, calendars: P } = Vt(e2, t2), { isDisabled: T2 } = Ct(e2), { selectYear: p, groupedYears: U, showYearPicker: L2, isDisabled: B2, toggleYearPicker: Y2, handleYearSelect: G2, handleYear: h4 } = La({
    modelValue: i2,
    multiCalendars: a3,
    highlight: o,
    calendars: P,
    month: b2,
    year: d3,
    props: e2,
    emit: t2
  }), _ = (m3, $) => [m3, $].map((j) => format(j, "MMMM", { locale: e2.formatLocale })).join("-"), H3 = computed(() => (m3) => i2.value ? Array.isArray(i2.value) ? i2.value.some(($) => isSameQuarter(m3, $)) : isSameQuarter(i2.value, m3) : false), k2 = (m3) => {
    if (e2.range) {
      if (Array.isArray(i2.value)) {
        const $ = pe(m3, i2.value[0]) || pe(m3, i2.value[1]);
        return Xt(i2.value, r.value, m3) && !$;
      }
      return false;
    }
    return false;
  }, R2 = computed(() => (m3) => {
    const $ = set(/* @__PURE__ */ new Date(), { year: d3.value(m3) });
    return eachQuarterOfInterval({
      start: startOfYear($),
      end: endOfYear($)
    }).map((j) => {
      const te = startOfQuarter(j), f = endOfQuarter(j), y3 = T2(j), N = k2(te), S3 = typeof o.value == "function" ? o.value({ quarter: getQuarter(te), year: getYear(te) }) : !!o.value.quarters.find(
        (w2) => w2.quarter === getQuarter(te) && w2.year === getYear(te)
      );
      return {
        text: _(te, f),
        value: te,
        active: H3.value(te),
        highlighted: S3,
        disabled: y3,
        isBetween: N
      };
    });
  }), Q2 = (m3) => {
    Gn(m3, i2, e2.multiDatesLimit), t2("auto-apply", true);
  }, q2 = (m3) => {
    const $ = qn(i2, m3, t2);
    tn($, t2, e2.autoApply, e2.modelAuto);
  }, x2 = (m3) => {
    i2.value = m3, t2("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a3,
    groupedYears: U,
    year: d3,
    isDisabled: B2,
    quarters: R2,
    showYearPicker: L2,
    modelValue: i2,
    setHoverDate: (m3) => {
      r.value = m3;
    },
    selectYear: p,
    selectQuarter: (m3, $, j) => {
      if (!j)
        return P.value[$].month = getMonth(endOfQuarter(m3)), e2.multiDates ? Q2(m3) : e2.range ? q2(m3) : x2(m3);
    },
    toggleYearPicker: Y2,
    handleYearSelect: G2,
    handleYear: h4
  };
};
var go = { class: "dp--quarter-items" };
var yo = ["disabled", "onClick", "onMouseover"];
var ho = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...xe
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, o = useSlots(), i2 = Ve(o, "yearMode"), {
      defaultedMultiCalendars: d3,
      defaultedConfig: b2,
      groupedYears: P,
      year: T2,
      isDisabled: p,
      quarters: U,
      modelValue: L2,
      showYearPicker: B2,
      setHoverDate: Y2,
      selectQuarter: G2,
      toggleYearPicker: h4,
      handleYearSelect: _,
      handleYear: H3
    } = mo(n, a3);
    return t2({ getSidebarProps: () => ({
      modelValue: L2,
      year: T2,
      selectQuarter: G2,
      handleYearSelect: _,
      handleYear: H3
    }) }), (R2, Q2) => (openBlock(), createBlock(en, {
      "multi-calendars": unref(d3).count,
      stretch: ""
    }, {
      default: withCtx(({ instance: q2 }) => [
        createBaseVNode("div", {
          class: "dp-quarter-picker-wrap",
          style: normalizeStyle({ minHeight: `${unref(b2).modeHeight}px` })
        }, [
          createBaseVNode("div", null, [
            createVNode(Ua, mergeProps(R2.$props, {
              items: unref(P)(q2),
              instance: q2,
              "show-year-picker": unref(B2)[q2],
              year: unref(T2)(q2),
              "is-disabled": (x2) => unref(p)(q2, x2),
              onHandleYear: (x2) => unref(H3)(q2, x2),
              onYearSelect: (x2) => unref(_)(x2, q2),
              onToggleYearPicker: (x2) => unref(h4)(q2, x2 == null ? void 0 : x2.flow, x2 == null ? void 0 : x2.show)
            }), createSlots({ _: 2 }, [
              renderList(unref(i2), (x2, se) => ({
                name: x2,
                fn: withCtx((E2) => [
                  renderSlot(R2.$slots, x2, normalizeProps(guardReactiveProps(E2)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          createBaseVNode("div", go, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(U)(q2), (x2, se) => (openBlock(), createElementBlock("div", { key: se }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["dp--qr-btn", {
                  "dp--qr-btn-active": x2.active,
                  "dp--qr-btn-between": x2.isBetween,
                  "dp--qr-btn-disabled": x2.disabled,
                  "dp--highlighted": x2.highlighted
                }]),
                disabled: x2.disabled,
                onClick: (E2) => unref(G2)(x2.value, q2, x2.disabled),
                onMouseover: (E2) => unref(Y2)(x2.value)
              }, [
                R2.$slots.quarter ? renderSlot(R2.$slots, "quarter", {
                  key: 0,
                  value: x2.value,
                  text: x2.text
                }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(x2.text), 1)
                ], 64))
              ], 42, yo)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
});
var po = ["id", "onKeydown"];
var bo = {
  key: 0,
  class: "dp__sidebar_left"
};
var ko = {
  key: 1,
  class: "dp--preset-dates"
};
var wo = ["onClick", "onKeydown"];
var Do = {
  key: 2,
  class: "dp__sidebar_right"
};
var Mo = {
  key: 3,
  class: "dp__action_extra"
};
var pa = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...xt,
    shadow: { type: Boolean, default: false },
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: false }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, o = computed(() => {
      const { openOnTop: I2, ...F } = n;
      return {
        ...F,
        flowStep: x2.value,
        noOverlayFocus: n.noOverlayFocus
      };
    }), { setMenuFocused: i2, setShiftKey: d3, control: b2 } = Va(), P = useSlots(), { defaultedTextInput: T2, defaultedInline: p, defaultedConfig: U } = Te(n), L2 = ref(null), B2 = ref(0), Y2 = ref(null), G2 = ref(null), h4 = ref(false), _ = ref(null);
    onMounted(() => {
      if (!n.shadow) {
        h4.value = true, H3(), window.addEventListener("resize", H3);
        const I2 = Se(Y2);
        if (I2 && !T2.value.enabled && !p.value.enabled && (i2(true), j()), I2) {
          const F = ($e) => {
            U.value.allowPreventDefault && $e.preventDefault(), it($e, U.value, true);
          };
          I2.addEventListener("pointerdown", F), I2.addEventListener("mousedown", F);
        }
      }
    }), onUnmounted(() => {
      window.removeEventListener("resize", H3);
    });
    const H3 = () => {
      const I2 = Se(G2);
      I2 && (B2.value = I2.getBoundingClientRect().width);
    }, { arrowRight: k2, arrowLeft: R2, arrowDown: Q2, arrowUp: q2 } = ft(), { flowStep: x2, updateFlowStep: se, childMount: E2, resetFlow: m3 } = gl(n, a3, _), $ = computed(() => n.monthPicker ? Ol : n.yearPicker ? Nl : n.timePicker ? Xl : n.quarterPicker ? ho : vo), j = () => {
      const I2 = Se(Y2);
      I2 && I2.focus({ preventScroll: true });
    }, te = computed(() => {
      var I2;
      return ((I2 = _.value) == null ? void 0 : I2.getSidebarProps()) || {};
    }), f = () => {
      n.openOnTop && a3("recalculate-position");
    }, y3 = Ve(P, "action"), N = computed(() => n.monthPicker || n.yearPicker ? Ve(P, "monthYear") : n.timePicker ? Ve(P, "timePicker") : Ve(P, "shared")), S3 = computed(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), w2 = computed(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), l = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [n.menuClassName]: !!n.menuClassName
      })
    ), g = (I2) => {
      it(I2, U.value, true);
    }, s3 = () => {
      n.escClose && a3("close-picker");
    }, D2 = (I2) => {
      if (n.arrowNavigation) {
        if (I2 === "up")
          return q2();
        if (I2 === "down")
          return Q2();
        if (I2 === "left")
          return R2();
        if (I2 === "right")
          return k2();
      } else
        I2 === "left" || I2 === "up" ? X2("handleArrow", "left", 0, I2 === "up") : X2("handleArrow", "right", 0, I2 === "down");
    }, ie = (I2) => {
      d3(I2.shiftKey), !n.disableMonthYearSelect && I2.code === "Tab" && I2.target.classList.contains("dp__menu") && b2.value.shiftKeyInMenu && (I2.preventDefault(), it(I2, U.value, true), a3("close-picker"));
    }, oe = () => {
      j(), a3("time-picker-close");
    }, u2 = (I2) => {
      var F, $e, ae;
      (F = _.value) == null || F.toggleTimePicker(false, false), ($e = _.value) == null || $e.toggleMonthPicker(false, false, I2), (ae = _.value) == null || ae.toggleYearPicker(false, false, I2);
    }, O2 = (I2, F = 0) => {
      var $e, ae, je;
      return I2 === "month" ? ($e = _.value) == null ? void 0 : $e.toggleMonthPicker(false, true, F) : I2 === "year" ? (ae = _.value) == null ? void 0 : ae.toggleYearPicker(false, true, F) : I2 === "time" ? (je = _.value) == null ? void 0 : je.toggleTimePicker(true, false) : u2(F);
    }, X2 = (I2, ...F) => {
      var $e, ae;
      ($e = _.value) != null && $e[I2] && ((ae = _.value) == null || ae[I2](...F));
    }, C = () => {
      X2("selectCurrentDate");
    }, ne = (I2, F) => {
      X2("presetDate", I2, F);
    }, me = () => {
      X2("clearHoverDate");
    };
    return t2({
      updateMonthYear: (I2, F) => {
        X2("updateMonthYear", I2, F);
      },
      switchView: O2
    }), (I2, F) => {
      var $e;
      return openBlock(), createElementBlock("div", {
        id: I2.uid ? `dp-menu-${I2.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: Y2,
        tabindex: "0",
        role: "dialog",
        class: normalizeClass(l.value),
        onMouseleave: me,
        onClick: g,
        onKeydown: [
          withKeys(s3, ["esc"]),
          F[18] || (F[18] = withKeys(withModifiers((ae) => D2("left"), ["prevent"]), ["left"])),
          F[19] || (F[19] = withKeys(withModifiers((ae) => D2("up"), ["prevent"]), ["up"])),
          F[20] || (F[20] = withKeys(withModifiers((ae) => D2("down"), ["prevent"]), ["down"])),
          F[21] || (F[21] = withKeys(withModifiers((ae) => D2("right"), ["prevent"]), ["right"])),
          ie
        ]
      }, [
        (I2.disabled || I2.readonly) && unref(p).enabled ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(w2.value)
        }, null, 2)) : createCommentVNode("", true),
        !unref(p).enabled && !I2.teleportCenter ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(S3.value)
        }, null, 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "innerMenuRef",
          ref: G2,
          class: normalizeClass({
            dp__menu_content_wrapper: (($e = I2.presetDates) == null ? void 0 : $e.length) || !!I2.$slots["left-sidebar"] || !!I2.$slots["right-sidebar"]
          }),
          style: normalizeStyle({ "--dp-menu-width": `${B2.value}px` })
        }, [
          I2.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", bo, [
            renderSlot(I2.$slots, "left-sidebar", normalizeProps(guardReactiveProps(te.value)))
          ])) : createCommentVNode("", true),
          I2.presetDates.length ? (openBlock(), createElementBlock("div", ko, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(I2.presetDates, (ae, je) => (openBlock(), createElementBlock(Fragment, { key: je }, [
              ae.slot ? renderSlot(I2.$slots, ae.slot, {
                key: 0,
                presetDate: ne,
                label: ae.label,
                value: ae.value
              }) : (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                style: normalizeStyle(ae.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]),
                onKeydown: [
                  withKeys(withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]), ["enter"]),
                  withKeys(withModifiers((Ke) => ne(ae.value, ae.noTz), ["prevent"]), ["space"])
                ]
              }, toDisplayString(ae.label), 45, wo))
            ], 64))), 128))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            ref_key: "calendarWrapperRef",
            ref: L2,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent($.value), mergeProps({
              ref_key: "dynCmpRef",
              ref: _
            }, o.value, {
              "flow-step": unref(x2),
              onMount: unref(E2),
              onUpdateFlowStep: unref(se),
              onResetFlow: unref(m3),
              onFocusMenu: j,
              onSelectDate: F[0] || (F[0] = (ae) => I2.$emit("select-date")),
              onDateUpdate: F[1] || (F[1] = (ae) => I2.$emit("date-update", ae)),
              onTooltipOpen: F[2] || (F[2] = (ae) => I2.$emit("tooltip-open", ae)),
              onTooltipClose: F[3] || (F[3] = (ae) => I2.$emit("tooltip-close", ae)),
              onAutoApply: F[4] || (F[4] = (ae) => I2.$emit("auto-apply", ae)),
              onRangeStart: F[5] || (F[5] = (ae) => I2.$emit("range-start", ae)),
              onRangeEnd: F[6] || (F[6] = (ae) => I2.$emit("range-end", ae)),
              onInvalidFixedRange: F[7] || (F[7] = (ae) => I2.$emit("invalid-fixed-range", ae)),
              onTimeUpdate: F[8] || (F[8] = (ae) => I2.$emit("time-update")),
              onAmPmChange: F[9] || (F[9] = (ae) => I2.$emit("am-pm-change", ae)),
              onTimePickerOpen: F[10] || (F[10] = (ae) => I2.$emit("time-picker-open", ae)),
              onTimePickerClose: oe,
              onRecalculatePosition: f,
              onUpdateMonthYear: F[11] || (F[11] = (ae) => I2.$emit("update-month-year", ae)),
              onAutoApplyInvalid: F[12] || (F[12] = (ae) => I2.$emit("auto-apply-invalid", ae)),
              onInvalidDate: F[13] || (F[13] = (ae) => I2.$emit("invalid-date", ae)),
              "onUpdate:internalModelValue": F[14] || (F[14] = (ae) => I2.$emit("update:internal-model-value", ae))
            }), createSlots({ _: 2 }, [
              renderList(N.value, (ae, je) => ({
                name: ae,
                fn: withCtx((Ke) => [
                  renderSlot(I2.$slots, ae, normalizeProps(guardReactiveProps({ ...Ke })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          I2.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", Do, [
            renderSlot(I2.$slots, "right-sidebar", normalizeProps(guardReactiveProps(te.value)))
          ])) : createCommentVNode("", true),
          I2.$slots["action-extra"] ? (openBlock(), createElementBlock("div", Mo, [
            I2.$slots["action-extra"] ? renderSlot(I2.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: C
            }) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 6),
        !I2.autoApply || unref(U).keepActionRow ? (openBlock(), createBlock(Ml, mergeProps({
          key: 2,
          "menu-mount": h4.value
        }, o.value, {
          "calendar-width": B2.value,
          onClosePicker: F[15] || (F[15] = (ae) => I2.$emit("close-picker")),
          onSelectDate: F[16] || (F[16] = (ae) => I2.$emit("select-date")),
          onInvalidSelect: F[17] || (F[17] = (ae) => I2.$emit("invalid-select")),
          onSelectNow: C
        }), createSlots({ _: 2 }, [
          renderList(unref(y3), (ae, je) => ({
            name: ae,
            fn: withCtx((Ke) => [
              renderSlot(I2.$slots, ae, normalizeProps(guardReactiveProps({ ...Ke })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : createCommentVNode("", true)
      ], 42, po);
    };
  }
});
var $o = typeof window < "u" ? window : void 0;
var $n = () => {
};
var To = (e2) => getCurrentScope() ? (onScopeDispose(e2), true) : false;
var Ao = (e2, t2, r, a3) => {
  if (!e2)
    return $n;
  let n = $n;
  const o = watch(
    () => unref(e2),
    (d3) => {
      n(), d3 && (d3.addEventListener(t2, r, a3), n = () => {
        d3.removeEventListener(t2, r, a3), n = $n;
      });
    },
    { immediate: true, flush: "post" }
  ), i2 = () => {
    o(), n();
  };
  return To(i2), i2;
};
var So = (e2, t2, r, a3 = {}) => {
  const { window: n = $o, event: o = "pointerdown" } = a3;
  return n ? Ao(n, o, (d3) => {
    const b2 = Se(e2), P = Se(t2);
    !b2 || !P || b2 === d3.target || d3.composedPath().includes(b2) || d3.composedPath().includes(P) || r(d3);
  }, { passive: true }) : void 0;
};
var Po = defineComponent({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...xt
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e2, { expose: t2, emit: r }) {
    const a3 = r, n = e2, o = useSlots(), i2 = ref(false), d3 = toRef(n, "modelValue"), b2 = toRef(n, "timezone"), P = ref(null), T2 = ref(null), p = ref(null), U = ref(false), L2 = ref(null), B2 = ref(false), { setMenuFocused: Y2, setShiftKey: G2 } = Va(), { clearArrowNav: h4 } = ft(), { mapDatesArrToMap: _, validateDate: H3, isValidTime: k2 } = Ct(n), { defaultedTransitions: R2, defaultedTextInput: Q2, defaultedInline: q2, defaultedConfig: x2 } = Te(n), { menuTransition: se, showTransition: E2 } = Ht(R2);
    onMounted(() => {
      s3(n.modelValue), nextTick().then(() => {
        q2.value.enabled || (S3(L2.value).addEventListener("scroll", ne), window.addEventListener("resize", me));
      }), q2.value.enabled && (i2.value = true);
    });
    const m3 = computed(() => _());
    onUnmounted(() => {
      if (!q2.value.enabled) {
        const A = S3(L2.value);
        A && A.removeEventListener("scroll", ne), window.removeEventListener("resize", me);
      }
    });
    const $ = Ve(o, "all", n.presetDates), j = Ve(o, "input");
    watch(
      [d3, b2],
      () => {
        s3(d3.value);
      },
      { deep: true }
    );
    const { openOnTop: te, menuStyle: f, xCorrect: y3, setMenuPosition: N, getScrollableParent: S3, shadowRender: w2 } = cl({
      menuRef: P,
      menuRefInner: T2,
      inputRef: p,
      pickerWrapperRef: L2,
      inline: q2,
      emit: a3,
      props: n,
      slots: o
    }), {
      inputValue: l,
      internalModelValue: g,
      parseExternalModelValue: s3,
      emitModelValue: D2,
      formatInputValue: ie,
      checkBeforeEmit: oe
    } = ul(a3, n, U), u2 = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: q2.value.enabled,
        dp__flex_display_with_input: q2.value.input
      })
    ), O2 = computed(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), X2 = computed(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: q2.value.enabled
    } : { class: "dp__outer_menu_wrap" }), C = computed(() => q2.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), ne = () => {
      i2.value && (x2.value.closeOnScroll ? Ge() : N());
    }, me = () => {
      i2.value && N();
    }, ye = () => {
      !n.disabled && !n.readonly && (w2(pa, n), N(false), i2.value = true, i2.value && a3("open"), i2.value || vt(), s3(n.modelValue));
    }, I2 = () => {
      var A;
      l.value = "", vt(), (A = p.value) == null || A.setParsedDate(null), a3("update:model-value", null), a3("update:model-timezone-value", null), a3("cleared"), x2.value.closeOnClearValue && Ge();
    }, F = () => {
      const A = g.value;
      return !A || !Array.isArray(A) && H3(A) ? true : Array.isArray(A) ? A.length === 2 && H3(A[0]) && H3(A[1]) ? true : n.partialRange && !n.timePicker ? H3(A[0]) : false : false;
    }, $e = () => {
      oe() && F() ? (D2(), Ge()) : a3("invalid-select", g.value);
    }, ae = (A) => {
      je(), D2(), x2.value.closeOnAutoApply && !A && Ge();
    }, je = () => {
      p.value && Q2.value.enabled && p.value.setParsedDate(g.value);
    }, Ke = (A = false) => {
      n.autoApply && k2(g.value) && F() && (n.range && Array.isArray(g.value) ? (n.partialRange || g.value.length === 2) && ae(A) : ae(A));
    }, vt = () => {
      Q2.value.enabled || (g.value = null);
    }, Ge = () => {
      q2.value.enabled || (i2.value && (i2.value = false, y3.value = false, Y2(false), G2(false), h4(), a3("closed"), l.value && s3(d3.value)), vt(), a3("blur"));
    }, nn = (A, J, re = false) => {
      if (!A) {
        g.value = null;
        return;
      }
      const Ue = Array.isArray(A) ? !A.some((wt) => !H3(wt)) : H3(A), qe = k2(A);
      Ue && qe && (g.value = A, J && (B2.value = re, $e(), a3("text-submit")));
    }, an = () => {
      n.autoApply && k2(g.value) && D2(), je();
    }, rn = () => i2.value ? Ge() : ye(), ln = (A) => {
      g.value = A;
    }, on = () => {
      Q2.value.enabled && (U.value = true, ie()), a3("focus");
    }, sn = () => {
      if (Q2.value.enabled && (U.value = false, s3(n.modelValue), B2.value)) {
        const A = jr(L2.value);
        A == null || A.focus();
      }
      a3("blur");
    }, un = (A) => {
      T2.value && T2.value.updateMonthYear(0, {
        month: da(A.month),
        year: da(A.year)
      });
    }, Zn = (A) => {
      s3(A ?? n.modelValue);
    }, v = (A, J) => {
      var re;
      (re = T2.value) == null || re.switchView(A, J);
    }, z2 = (A) => x2.value.onClickOutside ? x2.value.onClickOutside(A) : Ge();
    return So(P, p, () => z2(F)), t2({
      closeMenu: Ge,
      selectDate: $e,
      clearValue: I2,
      openMenu: ye,
      onScroll: ne,
      formatInputValue: ie,
      // exposed for testing purposes
      updateInternalModelValue: ln,
      // modify internal modelValue
      setMonthYear: un,
      parseModel: Zn,
      switchView: v
    }), (A, J) => (openBlock(), createElementBlock("div", {
      ref_key: "pickerWrapperRef",
      ref: L2,
      class: normalizeClass(u2.value)
    }, [
      createVNode(bl, mergeProps({
        ref_key: "inputRef",
        ref: p,
        "input-value": unref(l),
        "onUpdate:inputValue": J[0] || (J[0] = (re) => isRef(l) ? l.value = re : null),
        "is-menu-open": i2.value
      }, A.$props, {
        onClear: I2,
        onOpen: ye,
        onSetInputDate: nn,
        onSetEmptyDate: unref(D2),
        onSelectDate: $e,
        onToggle: rn,
        onClose: Ge,
        onFocus: on,
        onBlur: sn,
        onRealBlur: J[1] || (J[1] = (re) => U.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(j), (re, Ue) => ({
          name: re,
          fn: withCtx((qe) => [
            renderSlot(A.$slots, re, normalizeProps(guardReactiveProps(qe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      createVNode(Transition, {
        name: unref(se)(unref(te)),
        css: unref(E2) && !unref(q2).enabled
      }, {
        default: withCtx(() => [
          i2.value ? (openBlock(), createBlock(resolveDynamicComponent(A.teleport ? Teleport : "div"), mergeProps({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: P
          }, X2.value, {
            class: { "dp--menu-wrapper": !unref(q2).enabled },
            style: unref(q2).enabled ? void 0 : unref(f)
          }), {
            default: withCtx(() => [
              createVNode(pa, mergeProps({
                ref_key: "dpMenuRef",
                ref: T2
              }, A.$props, {
                "internal-model-value": unref(g),
                "onUpdate:internalModelValue": J[2] || (J[2] = (re) => isRef(g) ? g.value = re : null),
                class: { [O2.value]: true, "dp--menu-wrapper": A.teleport },
                style: A.teleport ? unref(f) : void 0,
                "open-on-top": unref(te),
                "arr-map-values": m3.value,
                "no-overlay-focus": C.value,
                onClosePicker: Ge,
                onSelectDate: $e,
                onAutoApply: Ke,
                onTimeUpdate: an,
                onFlowStep: J[3] || (J[3] = (re) => A.$emit("flow-step", re)),
                onUpdateMonthYear: J[4] || (J[4] = (re) => A.$emit("update-month-year", re)),
                onInvalidSelect: J[5] || (J[5] = (re) => A.$emit("invalid-select", unref(g))),
                onAutoApplyInvalid: J[6] || (J[6] = (re) => A.$emit("invalid-select", re)),
                onInvalidFixedRange: J[7] || (J[7] = (re) => A.$emit("invalid-fixed-range", re)),
                onRecalculatePosition: unref(N),
                onTooltipOpen: J[8] || (J[8] = (re) => A.$emit("tooltip-open", re)),
                onTooltipClose: J[9] || (J[9] = (re) => A.$emit("tooltip-close", re)),
                onTimePickerOpen: J[10] || (J[10] = (re) => A.$emit("time-picker-open", re)),
                onTimePickerClose: J[11] || (J[11] = (re) => A.$emit("time-picker-close", re)),
                onAmPmChange: J[12] || (J[12] = (re) => A.$emit("am-pm-change", re)),
                onRangeStart: J[13] || (J[13] = (re) => A.$emit("range-start", re)),
                onRangeEnd: J[14] || (J[14] = (re) => A.$emit("range-end", re)),
                onDateUpdate: J[15] || (J[15] = (re) => A.$emit("date-update", re)),
                onInvalidDate: J[16] || (J[16] = (re) => A.$emit("invalid-date", re))
              }), createSlots({ _: 2 }, [
                renderList(unref($), (re, Ue) => ({
                  name: re,
                  fn: withCtx((qe) => [
                    renderSlot(A.$slots, re, normalizeProps(guardReactiveProps({ ...qe })))
                  ])
                }))
              ]), 1040, ["internal-model-value", "class", "style", "open-on-top", "arr-map-values", "no-overlay-focus", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
});
var ja = (() => {
  const e2 = Po;
  return e2.install = (t2) => {
    t2.component("Vue3DatePicker", e2);
  }, e2;
})();
var Co = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: ja
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Co).forEach(([e2, t2]) => {
  e2 !== "default" && (ja[e2] = t2);
});
export {
  ja as default
};
//# sourceMappingURL=@vuepic_vue-datepicker.js.map
