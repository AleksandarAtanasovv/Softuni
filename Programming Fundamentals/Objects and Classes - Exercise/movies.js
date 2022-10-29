function movies(listOfMovies) {
  let moviesArr = [];
  listOfMovies.forEach((line) => {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      moviesArr.push({ name: name });
    } else if (line.includes("directedBy ")) {
      let [movieName, directorName] = line.split(" directedBy ");
      let movie = moviesArr.find((x) => x.name === movieName);
      if (movie) {
        movie.director = directorName;
      }
    } else if (line.includes(" onDate ")) {
      let [movieName, date] = line.split(" onDate ");
      let movie = moviesArr.find((x) => x.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  });
  moviesArr.forEach((el) => {
    if (el.name && el.date && el.director) {
      console.log(JSON.stringify(el));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
