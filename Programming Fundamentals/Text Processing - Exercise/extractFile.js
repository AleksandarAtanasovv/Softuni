function extractFile(pathAsString) {
  const splittedPath = pathAsString.split("\\");
  const file = splittedPath[splittedPath.length - 1];
  const fileName = file.substring(0, file.lastIndexOf("."));
  const extension = file.substring(file.lastIndexOf("."));
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension.replace(".", "")}`);
}
extractFile("C:\\Projects\\Data-Structures\\template.bak.pptx");
