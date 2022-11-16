function matchFullName(names) {
  const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matchedNames = names.match(pattern);
  console.log(matchedNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
