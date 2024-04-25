import {FavouriteProvider, LocationProvider, WeatherProvider} from "./provider/index.js";
import Page from "./Page.jsx";

export default function App() {
    return (
        <WeatherProvider>
            <FavouriteProvider>
                <LocationProvider>
                    <Page/>
                </LocationProvider>
            </FavouriteProvider>
        </WeatherProvider>
    )
}
