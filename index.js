(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-flatten'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-flatten'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.FLATTEN);
    global.XOR = mod.exports;
  }
})(this, function (exports, module, _formulaFlatten) {
  'use strict';

  module.exports = XOR;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _FLATTEN = _interopRequireDefault(_formulaFlatten);

  function XOR() {
    var args = (0, _FLATTEN['default'])(arguments);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i]) {
        result++;
      }
    }
    return result & 1 ? true : false;
  }
});
