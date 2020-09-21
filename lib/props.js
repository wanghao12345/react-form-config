"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormItems = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getFormItems = function getFormItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, items.map(function (child, index) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, _extends({
      key: "form-item-".concat(index)
    }, child), child.type.toLocaleLowerCase() === 'input' ? /*#__PURE__*/_react["default"].createElement(_antd.Input, null) : child.type.toLocaleLowerCase() === 'password' ? /*#__PURE__*/_react["default"].createElement(_antd.Input.Password, null) : child.type.toLocaleLowerCase() === 'select' ? /*#__PURE__*/_react["default"].createElement(_antd.Select, null, child.options.map(function (opt) {
      return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
        key: opt.value,
        value: opt.value
      }, opt.label);
    })) : '');
  }));
};

exports.getFormItems = getFormItems;