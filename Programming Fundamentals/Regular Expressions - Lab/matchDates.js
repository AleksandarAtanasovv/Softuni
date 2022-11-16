function matchDates(dates) {
  const pattern = /(?<day>\d{2})([\/\.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
  let result = dates[0].matchAll(pattern);
  for (const el of result) {
    console.log(`Day: ${el.groups.day}, Month: ${el.groups.month}, Year: ${el.groups.year}`);
  }
}
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
