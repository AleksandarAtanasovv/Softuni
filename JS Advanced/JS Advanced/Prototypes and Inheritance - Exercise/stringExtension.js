(function () {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.valueOf() : str + this.valueOf();
  };
  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.valueOf() : this.valueOf() + str;
  };
  String.prototype.isEmpty = function () {
    this.length > 0 ? true : false;
  };
  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (this.includes(" ")) {
      let lastSpaceIndex = this.length;
      do {
        lastSpaceIndex = this.lastIndexOf(" ", lastSpaceIndex - 1);
      } while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 > n);
      return `${this.slice(0, lastSpaceIndex)}...`;
    }

    if (n > 3) {
      let string = `${this.slice(0, n - 3)}...`;
      return string;
    }
    return ".".repeat(n);
  };
  String.format = function (string, ...params) {
    const indices = [];
    string.match(/{\d}/g).forEach((element) => {
      indices.push(element);
    });
    indices.forEach((element) => {
      if (params[element[1]]) {
        string = string.replace(element, params[element[1]]);
      }
    });
    return string;
  };
})();

let str = "my string";

console.log(String.format("jumps {0} {1}", "dog"));
