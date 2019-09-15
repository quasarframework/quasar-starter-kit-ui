function isObject (val) {
  return Object(val) === val;
}

function isOptions (val) {
  return isObject(val) && isObject(val.hash);
}

function isBlock(options) {
  return isOptions(options)
    && typeof options.fn === 'function'
    && typeof options.inverse === 'function';
}

function value (val, context, options) {
  if (isOptions(val)) {
    return value(null, val, options);
  }
  if (isOptions(context)) {
    return value(val, {}, context);
  }
  if (isBlock(options)) {
    return !!val ? options.fn(context) : options.inverse(context);
  }
  return val;
}

module.exports = {
  or (/* any, any, ..., options */) {
    var len = arguments.length - 1;
    var options = arguments[len];
    var val = false;

    for (var i = 0; i < len; i++) {
      if (arguments[i]) {
        val = true;
        break;
      }
    }
    return value(val, this, options);
  }
}
