function argumentInfo(...params) {
  const paramsObj = {};
  params.forEach((param) => {
    const type = typeof param;
    console.log(`${type}: ${param}`);

    if (!paramsObj.hasOwnProperty(type)) {
      paramsObj[type] = 0;
    }
    paramsObj[type] += 1;
  });
  console.log(
    Object.entries(paramsObj)
      .sort((a, b) => b[1] - a[1])
      .map((x) => `${x[0]} = ${x[1]}`)
      .join("\n")
  );
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
