define(['exports', 'metal/src/metal', 'metal-component/src/all/component', 'metal-soy/src/Soy', './ProgressBar.soy.js', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _metal, _component, _Soy, _ProgressBarSoy, _JQueryAdapter) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _metal2 = _interopRequireDefault(_metal);

	var _component2 = _interopRequireDefault(_component);

	var _Soy2 = _interopRequireDefault(_Soy);

	var _ProgressBarSoy2 = _interopRequireDefault(_ProgressBarSoy);

	var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ProgressBar = function (_Component) {
		_inherits(ProgressBar, _Component);

		function ProgressBar() {
			_classCallCheck(this, ProgressBar);

			return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
		}

		_createClass(ProgressBar, [{
			key: 'setterValueFn_',
			value: function setterValueFn_(value) {
				if (value < this.min) {
					value = this.min;
				}
				if (value > this.max) {
					value = this.max;
				}
				return value;
			}
		}, {
			key: 'syncMax',
			value: function syncMax(max) {
				if (max < this.value) {
					this.value = max;
				}
			}
		}, {
			key: 'syncMin',
			value: function syncMin(min) {
				if (min > this.value) {
					this.value = min;
				}
			}
		}]);

		return ProgressBar;
	}(_component2.default);

	/**
  * State definition.
  * @type {!Object}
  * @static
  */
	ProgressBar.STATE = {
		/**
   * Optional CSS classes to be added to the inner progress bar element,
   * like 'progress-bar-danger'.
   * @type {string}
   */
		barClass: {
			validator: _metal2.default.isString
		},

		/**
   * An optional label to be rendered inside the progress bar. Can be either
   * a string (with raw text or html) or an incremental dom function.
   * @type {function()|string?}
   */
		label: {
			validator: function validator(label) {
				return !_metal2.default.isDefAndNotNull(label) || _metal2.default.isString(label) || _metal2.default.isFunction(label);
			}
		},

		/**
   * The maximum value of the progress bar. When the value is at its
   * max, the bar will be fully extended.
   * @type {number}
   */
		max: {
			validator: _metal2.default.isNumber,
			value: 100
		},

		/**
   * The minimum value of the progress bar. When the value is at its
   * max, the bar will be fully collapsed.
   * @type {number}
   */
		min: {
			validator: _metal2.default.isNumber,
			value: 0
		},

		/**
   * The current value of the progress bar.
   * @type {number}
   */
		value: {
			setter: 'setterValueFn_',
			validator: _metal2.default.isNumber,
			value: 0
		}
	};
	_Soy2.default.register(ProgressBar, _ProgressBarSoy2.default);

	exports.default = ProgressBar;
	_JQueryAdapter2.default.register('progressBar', ProgressBar);
});
//# sourceMappingURL=ProgressBar.js.map