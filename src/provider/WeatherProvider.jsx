import {WeatherContext} from "../context/index.js";
import {useWeather} from "../hooks/index.js";

// * Weather Context Provider
const weatherProvider = ({children}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {weather, error, loading} = useWeather();
    return (
        <WeatherContext.Provider value={{weather, error, loading}}>
            {children}
        </WeatherContext.Provider>
    );
}

export default  weatherProvider;
