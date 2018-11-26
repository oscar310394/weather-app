const location = "Buenos Aires,ar";
const api_key = "893839dda4fb3761c1aa65bc991aaa89";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;