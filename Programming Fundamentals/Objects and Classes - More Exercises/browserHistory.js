function browserHistory(obj, arr) {
  for (const el of arr) {
    let [command, site] = el.split(" ");
    switch (command) {
      case "Open":
        obj["Open Tabs"].push(site);
        obj["Browser Logs"].push(el);

        break;
      case "Close":
        let index = obj["Open Tabs"].indexOf(site);
        if (obj["Open Tabs"][index]) {
          obj["Open Tabs"].splice(index, 1);
          obj["Recently Closed"].push(site);
          obj["Browser Logs"].push(el);
        }
        break;
      case "Clear":
        obj["Open Tabs"] = [];
        obj["Recently Closed"] = [];
        obj["Browser Logs"] = [];
        break;
    }
  }
  console.log(obj["Browser Name"]);
  for (const key in obj) {
    switch (key) {
      case "Open Tabs":
        console.log(`${key}: ${obj[key].join(", ")}`);
        break;
      case "Recently Closed":
        console.log(`${key}: ${obj[key].join(", ")}`);
        break;
      case "Browser Logs":
        console.log(`${key}: ${obj[key].join(", ")}`);
        break;
    }
  }
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
