const API_KEY = 'zYFoNqN7GjP8AVazU73vLCDZX3WNXjieFbDiTBNP';
const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-17&end_date=2020-06-17&api_key=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error('Failed retrieving information', err);
    }); 