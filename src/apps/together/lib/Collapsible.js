'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_React$Component) {
  _inherits(Collapsible, _React$Component);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapsible).call(this, props));

    _this.renderItem = _this.renderItem.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.state = {
      activeKey: _this.props.defaultActiveKey
    };
    return _this;
  }

  _createClass(Collapsible, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var accordion = _props.accordion;
      var popout = _props.popout;
      var className = _props.className;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['accordion', 'popout', 'className', 'children']);

      var classes = {
        collapsible: true,
        popout: popout
      };
      var collapsible = accordion ? 'accordion' : 'expandable';
      return _react2.default.createElement(
        'ul',
        _extends({ className: (0, _classnames2.default)(className, classes) }, props, { 'data-collapsible': collapsible }),
        _react2.default.Children.map(children, this.renderItem)
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(child, index) {
      var props = {
        key: child.key ? child.key : index,
        ref: child.ref
      };
      if (this.props.accordion) {
        props.expanded = child.props.eventKey === this.state.activeKey;
        props.onSelect = this.handleSelect;
      }

      return _react2.default.cloneElement(child, props);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(key) {
      if (this.props.onSelect) {
        this.props.onSelect(key);
      }

      if (this.state.activeKey === key) {
        key = null;
      }
      this.setState({
        activeKey: key
      });
    }
  }]);

  return Collapsible;
}(_react2.default.Component);

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default false
   */
  accordion: _react2.default.PropTypes.bool,
  /**
   * Enable popout style
   */
  popout: _react2.default.PropTypes.bool,
  defaultActiveKey: _react2.default.PropTypes.number,
  onSelect: _react2.default.PropTypes.func
};

Collapsible.defaultProps = {
  accordion: false
};

exports.default = Collapsible;