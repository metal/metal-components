define(['exports', 'metal/metal/src/component/Component', 'metal/metal/src/soy/SoyAop', 'metal/metal/src/soy/SoyRenderer', 'metal/metal/src/soy/SoyTemplates'], function (exports, _Component2, _SoyAop, _SoyRenderer, _SoyTemplates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Component3 = _interopRequireDefault(_Component2);

  var _SoyAop2 = _interopRequireDefault(_SoyAop);

  var _SoyRenderer2 = _interopRequireDefault(_SoyRenderer);

  var _SoyTemplates2 = _interopRequireDefault(_SoyTemplates);

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

  var Templates = _SoyTemplates2.default.get();
  // This file was automatically generated from Autocomplete.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Autocomplete.
   */

  if (typeof Templates.Autocomplete == 'undefined') {
    Templates.Autocomplete = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Autocomplete.render = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="autocomplete autocomplete-list component ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(Templates.List.render({ events: { itemSelected: opt_data.id + ':onListItemSelected_' }, id: opt_data.id + '-list' }, null, opt_ijData)) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Autocomplete.render.soyTemplateName = 'Templates.Autocomplete.render';
  }

  Templates.Autocomplete.render.params = ["id"];

  var Autocomplete = function (_Component) {
    _inherits(Autocomplete, _Component);

    function Autocomplete() {
      _classCallCheck(this, Autocomplete);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    return Autocomplete;
  }(_Component3.default);

  Autocomplete.prototype.registerMetalComponent && Autocomplete.prototype.registerMetalComponent(Autocomplete, 'Autocomplete')

  Autocomplete.RENDERER = _SoyRenderer2.default;
  _SoyAop2.default.registerTemplates('Autocomplete');
  exports.default = Autocomplete;
});
//# sourceMappingURL=Autocomplete.soy.js.map