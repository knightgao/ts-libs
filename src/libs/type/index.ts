/**
 * 判断是否是 String
 * @param data
 */
function isString(data: any) {
  return Object.prototype.toString.call(data) === "[object String]";
}
/**
 * 判断是否是 Number
 * @param data
 */
function isNumber(data: any) {
  return Object.prototype.toString.call(data) === "[object Number]";
}

/**
 * 判断是否是 BigInt
 * @param data
 */
function isBigInt(data: any) {
  return Object.prototype.toString.call(data) === "[object BigInt]";
}

/**
 * 判断是否是 Boolean
 * @param data
 */
function isBoolean(data: any) {
  return Object.prototype.toString.call(data) === "[object Boolean]";
}
/**
 * 判断是否是 Map
 * @param data
 */
function isMap(data: any) {
  return Object.prototype.toString.call(data) === "[object Map]";
}
/**
 * 判断是否是 Set
 * @param data
 */
function isSet(data: any) {
  return Object.prototype.toString.call(data) === "[object Set]";
}

/**
 * 判断是否是 Null
 * @param data
 */
function isNull(data: any) {
  return Object.prototype.toString.call(data) === "[object Null]";
}

/**
 * 判断是否是 Undefined
 * @param data
 */
function isUndefined(data: any) {
  return Object.prototype.toString.call(data) === "[object Undefined]";
}
/**
 * 判断是否是 Object
 * @param data
 */
function isObject(data: any) {
  return Object.prototype.toString.call(data) === "[object Object]";
}
/**
 * 判断是否是 Array
 * @param data
 */
function isArray(data: any) {
  return Object.prototype.toString.call(data) === "[object Array]";
}
/**
 * 判断是否是 Function
 * @param data
 */
function isFunction(data: any) {
  return Object.prototype.toString.call(data) === "[object Function]";
}
/**
 * 判断是否是 Math
 * @param data
 */
function isMath(data: any) {
  return Object.prototype.toString.call(data) === "[object Math]";
}
/**
 * 判断是否是 Date
 * @param data
 */
function isDate(data: any) {
  return Object.prototype.toString.call(data) === "[object Date]";
}
/**
 * 判断是否是 HTMLDocument
 * @param data
 */
function isHTMLDocument(data: any) {
  return Object.prototype.toString.call(data) === "[object HTMLDocument]";
}
/**
 * 判断是否是 Error
 * @param data
 */
function isError(data: any) {
  return Object.prototype.toString.call(data) === "[object Error]";
}
/**
 * 判断是否是 Symbol
 * @param data
 */
function isSymbol(data: any) {
  return Object.prototype.toString.call(data) === "[object Symbol]";
}
/**
 * 判断是否是 RegExp
 * @param data
 */
function isRegExp(data: any) {
  return Object.prototype.toString.call(data) === "[object RegExp]";
}
/**
 * 判断是否是 FormData
 * @param data
 */
function isFormData(data: any) {
  return Object.prototype.toString.call(data) === "[object FormData]";
}
/**
 * 判断是否是 Window
 * @param data
 */
function isWindow(data: any) {
  return Object.prototype.toString.call(data) === "[object Window]";
}

/**
 * 返回类型的小写
 * @param data 需要判断的对象
 */
function getDataType(data: any): string {
  return Object.prototype.toString
    .call(data)
    .match(/\[object (.*)\]/)[1]
    .toLowerCase();
}

export {
  isString,
  isNumber,
  isBigInt,
  isBoolean,
  isMap,
  isSet,
  isNull,
  isUndefined,
  isObject,
  isArray,
  isFunction,
  isMath,
  isDate,
  isHTMLDocument,
  isError,
  isSymbol,
  isRegExp,
  isWindow,
  isFormData,
  getDataType,
};
