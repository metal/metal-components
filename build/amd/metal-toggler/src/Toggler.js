define(['exports', 'metal/src/metal', 'metal-dom/src/all/dom', 'metal-events/src/events', 'metal-state/src/all/state'], function (exports, _metal, _dom, _events, _state) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _metal2 = _interopRequireDefault(_metal);

	var _dom2 = _interopRequireDefault(_dom);

	var _state2 = _interopRequireDefault(_state);

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

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

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

	var Toggler = function (_State) {
		_inherits(Toggler, _State);

		/**
   * @inheritDoc
   */
		function Toggler(opt_config) {
			_classCallCheck(this, Toggler);

			var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, opt_config));

			_this.headerEventHandler_ = new _events.EventHandler();

			_this.on('headerChanged', _this.syncHeader);
			_this.syncHeader();
			return _this;
		}

		/**
   * @inheritDoc
   */


		_createClass(Toggler, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				_get(Toggler.prototype.__proto__ || Object.getPrototypeOf(Toggler.prototype), 'disposeInternal', this).call(this);
				this.headerEventHandler_.removeAllListeners();
			}
		}, {
			key: 'getContentElement_',
			value: function getContentElement_(header) {
				if (_metal2.default.isElement(this.content)) {
					return this.content;
				}

				var content = _dom2.default.next(header, this.content);
				if (content) {
					return content;
				}

				content = header.querySelector(this.content);
				if (content) {
					return content;
				}

				return this.container.querySelector(this.content);
			}
		}, {
			key: 'handleClick_',
			value: function handleClick_(event) {
				this.toggle(event.delegateTarget || event.currentTarget);
			}
		}, {
			key: 'handleKeydown_',
			value: function handleKeydown_(event) {
				if (event.keyCode === 13 || event.keyCode === 32) {
					this.toggle(event.delegateTarget || event.currentTarget);
					event.preventDefault();
				}
			}
		}, {
			key: 'syncHeader',
			value: function syncHeader() {
				this.headerEventHandler_.removeAllListeners();
				if (this.header) {
					if (_metal2.default.isString(this.header)) {
						this.headerEventHandler_.add(_dom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _dom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
					} else {
						this.headerEventHandler_.add(_dom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _dom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
					}
				}
			}
		}, {
			key: 'toggle',
			value: function toggle(header) {
				var content = this.getContentElement_(header);
				_dom2.default.toggleClasses(content, Toggler.CSS_EXPANDED);
				_dom2.default.toggleClasses(content, Toggler.CSS_COLLAPSED);

				if (_dom2.default.hasClass(content, Toggler.CSS_EXPANDED)) {
					_dom2.default.addClasses(header, Toggler.CSS_HEADER_EXPANDED);
					_dom2.default.removeClasses(header, Toggler.CSS_HEADER_COLLAPSED);
				} else {
					_dom2.default.removeClasses(header, Toggler.CSS_HEADER_EXPANDED);
					_dom2.default.addClasses(header, Toggler.CSS_HEADER_COLLAPSED);
				}
			}
		}]);

		return Toggler;
	}(_state2.default);

	/**
  * State configuration.
  */
	Toggler.STATE = {
		/**
   * The element where the header/content selectors will be looked for.
   * @type {string|!Element}
   */
		container: {
			setter: _dom2.default.toElement,
			validator: function validator(value) {
				return _metal2.default.isString(value) || _metal2.default.isElement(value);
			},
			value: document
		},

		/**
   * The element that should be expanded/collapsed by this toggler.
   * @type {string|!Element}
   */
		content: {
			validator: function validator(value) {
				return _metal2.default.isString(value) || _metal2.default.isElement(value);
			}
		},

		/**
   * The element that should be trigger toggling.
   * @type {string|!Element}
   */
		header: {
			validator: function validator(value) {
				return _metal2.default.isString(value) || _metal2.default.isElement(value);
			}
		}
	};

	/**
  * The CSS class added to the content when it's collapsed.
  */
	Toggler.CSS_COLLAPSED = 'toggler-collapsed';

	/**
  * The CSS class added to the content when it's expanded.
  */
	Toggler.CSS_EXPANDED = 'toggler-expanded';

	/**
  * The CSS class added to the header when the content is collapsed.
  */
	Toggler.CSS_HEADER_COLLAPSED = 'toggler-header-collapsed';

	/**
  * The CSS class added to the header when the content is expanded.
  */
	Toggler.CSS_HEADER_EXPANDED = 'toggler-header-expanded';

	exports.default = Toggler;
});
//# sourceMappingURL=Toggler.js.map