const API_URL = `https://api.coincap.io/v2/assets`

const fetchCripto = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();