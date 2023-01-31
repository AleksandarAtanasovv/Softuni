function getArticleGenerator(articles) {
  return function showNext() {
    const content = document.getElementById("content");
    const article = document.createElement("article");
    if (articles.length) {
      article.textContent = articles.shift();
      content.appendChild(article);
    }
  };
}
