function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error = void 0;

      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        let args = [a, b, c, d, e, f];
        let argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame

      throw error;
    }

    function validateFormat(format) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
  } 

  module.exports = {
      invariant
  }