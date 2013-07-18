module.exports = function (elements) {

  elements.prototype.each = function (callback, context) {
    var list = this.list;
    var length = list.length;
    var element;
    var i;
    
    for (i = 0; i < length; i += 1) {
      element = list[i];
      callback.call(context, element, i);
    }
    
    return this;
  };

  return elements;
};
