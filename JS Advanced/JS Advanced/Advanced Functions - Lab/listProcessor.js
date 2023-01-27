function listProcessor(input) {
  let words = [];
  const processor = () => {
    return {
      add: function (word) {
        words.push(word);
      },
      remove: function (word) {
        words = words.filter((w) => w !== word);
      },
      print: function () {
        console.log(words.join(","));
      },
    };
  };
  input.forEach((el) => {
    const [command, value] = el.split(" ");
    processor()[command](value);
  });
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
