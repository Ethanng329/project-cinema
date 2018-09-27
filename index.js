const searchSubmit = document.querySelector('form');
const searchContent = document.querySelector('input');
const resultarea = document.querySelector('#displayresult');

searchSubmit.addEventListener('submit', function(event) {
  event.preventDefault();
  APIsContent = searchContent.value;
  fetch(`https://www.omdbapi.com/?s=${APIsContent}&apikey=db96ccd2`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayMovie(data);
    })
    .catch(function(error) {
      console.log(error);
      alert('Search Error, please try another search term');
      // something went wrong. let's sort it out
    });
});

function displayMovie(data) {
  console.log(data);

  // if (!data.Search) return;

  const html = data.Search.map(function(movie) {
    return `
    <div>
        <a class="item" href="https://www.imdb.com/title/${movie.imdbID}">
          <img class="item" src="${movie.Poster}" alt="Movie Poster">
          <p>${movie.Title} (${movie.Year})</p></a>
          <button>more Info</button>
          <button>add to favourite</button>
          </div>
          
    `;
  }).join('');
  console.log(html);
  resultarea.innerHTML = html;
}
