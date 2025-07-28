import { fetchWeather } from "./api";

const form = document.getElementById('weather-form');
const cityEl = document.getElementById('city');
const result = document.getElementById('result');
const lowhigh = document.getElementById('lowhigh');
const errorEl = document.getElementById('error');

let data;

function init() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        render(form.city.value, form.unit.value);
    });
    render('new york', 'us');

    document.getElementById('temps').addEventListener('input', () => {
        if (!data) return;
        render(data.city, form.unit.value);
    });
}

async function render(city, unit) {
    if (!city || !unit) return;
    result.textContent = 'loading';
    cityEl.textContent = '';
    lowhigh.textContent = '';
    errorEl.textContent = '';

    try {
        data = await fetchWeather(city, unit);
        if (data) {
            cityEl.textContent = data.city;
            result.textContent = data.temperature + '°';
            lowhigh.textContent = 'L: ' + data.low + '° ~ H: ' + data.high + '°';
        } else {
            result.textContent = 'try again';
            errorEl.textContent = "Something went wrong.";
        }
    } catch (err) {
        console.error(`Couldn't fetch data\n\n[${err}]`);
        result.textContent = 'no data found';
    }
}

const DOM = {
    init
}

export default DOM