export async function fetchWeather(city, unit) {
    const API_KEY = 'N84NN4DRLSKJTVBWYKHMGFQTR';
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=current&key=${API_KEY}&contentType=json`;
    
    try {
        const fetched = await fetch(URL, { mode: 'cors' });
        const fullData = await fetched.json();
        return {
            city: fullData.resolvedAddress.split(',')[0].toLowerCase(),
            temperature: fullData.days[0].temp,
            low: fullData.days[0].tempmin,
            high: fullData.days[0].tempmax,
        }
    } catch (err) {
        console.error(`Couldn't fetch data:\n\n${err}`);
        return null;
    }
    
}