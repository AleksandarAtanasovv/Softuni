function extensibleObject() {
  function ExtensibleObject() {}
  ExtensibleObject.prototype.extend = function (template) {
    Object.entries(template).forEach(([key, val]) => {
      if (val instanceof Function) {
        Object.getPrototypeOf(this)[key] = val;
      } else {
        this[key] = val;
      }
    });
  };
  return new ExtensibleObject();
}
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "something",
};
myObj.extend(template);
