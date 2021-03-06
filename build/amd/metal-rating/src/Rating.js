define(['exports', 'metal/src/metal', 'metal-component/src/all/component', 'metal-soy/src/Soy', './Rating.soy.js'], function (exports, _metal, _component, _Soy, _RatingSoy) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _metal2 = _interopRequireDefault(_metal);

    var _component2 = _interopRequireDefault(_component);

    var _Soy2 = _interopRequireDefault(_Soy);

    var _RatingSoy2 = _interopRequireDefault(_RatingSoy);

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

    var Rating = function (_Component) {
        _inherits(Rating, _Component);

        function Rating() {
            _classCallCheck(this, Rating);

            return _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).apply(this, arguments));
        }

        _createClass(Rating, [{
            key: 'created',
            value: function created() {
                this.ratingClicked_ = this.value;
            }
        }, {
            key: 'handleClickEvent',
            value: function handleClickEvent(event) {
                if (!this.disabled) {
                    var index = parseInt(event.delegateTarget.getAttribute('data-index'), 10);

                    if (index === this.ratingClicked_ && this.canReset) {
                        this.reset();
                    } else {
                        this.value = index;
                    }

                    this.ratingClicked_ = this.value;
                }
            }
        }, {
            key: 'handleMouseLeaveEvent',
            value: function handleMouseLeaveEvent() {
                this.setPreviousRate_();
            }
        }, {
            key: 'handleMouseOverEvent',
            value: function handleMouseOverEvent(event) {
                if (!this.disabled) {
                    var index = Number.parseInt(event.delegateTarget.getAttribute('data-index'), 10);

                    this.value = index;
                }
            }
        }, {
            key: 'reset',
            value: function reset() {
                this.value = -1;
                this.ratingClicked_ = -1;
            }
        }, {
            key: 'setPreviousRate_',
            value: function setPreviousRate_() {
                this.value = this.ratingClicked_;
            }
        }]);

        return Rating;
    }(_component2.default);

    Rating.STATE = {

        /**
         * Flag indicating if this component can be reset or not
         * @type {boolean}
         * @default true
         */
        canReset: {
            value: true,
            validator: _metal2.default.isBoolean
        },

        /**
         * Optional CSS classes to be added to the inner rating element.
         * @type {string}
         */
        cssClasses: {
            value: {
                off: 'glyphicon glyphicon-star-empty',
                on: 'glyphicon glyphicon-star'
            }
        },

        /**
         * Block or unblock rating functionality.
         * @type {?boolean}
         * @default false
         */
        disabled: {
            value: false,
            validator: _metal2.default.isBoolean
        },

        /**
         * Name of the hidden input. It can be used to send
         * current option value as a form data.
         *
         * @attribute inputHiddenName
         * @type {string}
         * @default 'rate'
         */
        inputHiddenName: {
            value: 'rate',
            validator: _metal2.default.isString
        },

        /**
         * Label to be displayed with the Rating elements. Can be either a string
         * or an incremental dom function.
         * @attribute label
         * @type {string}
         * @default ''
         */
        label: {
            value: '',
            validator: function validator(val) {
                return _metal2.default.isString(val) || _metal2.default.isFunction(val);
            }
        },

        /**
         * List of rate options.
         * @type {array}
         */
        options: {
            validator: Array.isArray,
            value: [{
                value: 1,
                title: ''
            }, {
                value: 2,
                title: ''
            }, {
                value: 3,
                title: ''
            }, {
                value: 4,
                title: ''
            }, {
                value: 5,
                title: ''
            }]
        },

        /**
         * Rating current index value.
         * @type {?number}
         * @default null
         */
        value: {
            validator: _metal2.default.isNumber,
            value: -1
        }
    };
    _Soy2.default.register(Rating, _RatingSoy2.default);

    exports.default = Rating;
});
//# sourceMappingURL=Rating.js.map