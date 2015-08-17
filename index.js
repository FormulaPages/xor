(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.xor = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = XOR;

  function XOR() {
    var args = fn.flatten(arguments);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i]) {
        result++;
      }
    }
    return result & 1 ? true : false;
  }
});
