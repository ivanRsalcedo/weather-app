import { fetchWeather } from "./api";

const form = document.getElementById('weather-form');
const cityEl = document.getElementById('city');
const result = document.getElementById('result');
const lowhigh = document.getElementById('lowhigh');


function init() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        render(form.city.value, form.unit.value);
    });
    render('new york', 'us');
}

async function render(city, unit) {
    result.textContent = 'loading';

    try {
        const data = await fetchWeather(city, unit);
        if (data) {
            cityEl.textContent = data.city;
            result.textContent = data.temperature + '°';
            lowhigh.textContent = 'L: ' + data.low + '° ~ H: ' + data.high + '°';
        } else
            result.textContent = 'something went wrong.';
    } catch (err) {
        console.error(`Couldn't fetch data\n\n[${err}]`);
        result.textContent = 'no data found';
    }
}

const DOM = {
    init
}

export default DOM