function cars(input) {
  const data = {};
  const modifier = () => {
    return {
      create: function (name, inheritance, parent) {
        return (data[name] = inheritance ? Object.create(data[parent]) : {});
      },
      set: function (name, key, value) {
        data[name][key] = value;
      },
      print: function (name) {
        const entries = [];
        for (const key in data[name]) {
          entries.push(`${key}:${data[name][key]}`);
        }
        console.log(entries.join(","));
      },
    };
  };
  input.forEach((el) => {
    const [command, name, inheritColorOrModel, parentColorOrNew] = el.split(" ");
    modifier()[command](name, inheritColorOrModel, parentColorOrNew);
  });
}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
