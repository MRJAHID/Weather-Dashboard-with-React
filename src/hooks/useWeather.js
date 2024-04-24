import {useEffect, useState} from "react";

const useWeather = () => {
    const [weather, setWeather] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: ''
    });

    const [error, setError] = useState(null);

    const fethWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching Weather Data"
            });
            // Fetching the weather data
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

            // If Fetching Failed
            if (!response.ok) {
                const errorMessage = `Fetching weather data failed ${response.message}`;
                throw new Error(errorMessage);
            }

            // If Fetching Success
            const data = await response.json();

            // set new weather data  from data object
            const updateWeatherData = {
                ...weather,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            }

            setWeather(updateWeatherData);

        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            })
        }
    }

    // * useEffect for load data on mount
    useEffect(() => {

        // ? Loading state True
        setLoading({
            loading: true,
            message: "Finding Location..."
        })

        // * JS geolocation API For Lat & Longitude
        // ! NEED TO ALLOW LOCATION PERMISSIONS BY USER
        navigator.geolocation.getCurrentPosition((position) => {
            fethWeatherData(position.coords.latitude, position.coords.longitude);
        })
    }, []);

    // * Return the Data
    return {
        weather,
        error,
        loading
    }
}

