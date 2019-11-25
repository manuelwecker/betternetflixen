export async function searchMovies(query = "batman") {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
}

// export async function getDiscoverMovies() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await response.json();
//   return data.results;
// }

// asynchron etwas geholt, in Promise auf das wir warten müssen, erhalten wir zurück, in der Regel erhalten wir ein JSON zurück. Mit diesem JSON String kann man es in ein JavaScript Object umwandeln.
