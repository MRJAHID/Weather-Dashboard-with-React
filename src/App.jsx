import Header from "./components/Header/Header.jsx";
import WeatherBoard from "./components/Weather/WeatherBoard.jsx";
import {FavouriteProvider, LocationProvider, WeatherProvider} from "./provider/index.js";

export default function App() {
    return (

        // * Wrap With Context WeatherProvider with Weather Data
        <WeatherProvider>
            <FavouriteProvider>
                <LocationProvider>
                    <div className='grid place-items-center h-screen'>
                        <Header/>
                        <main>
                            <section>
                                <WeatherBoard/>
                            </section>
                        </main>
                    </div>
                </LocationProvider>
            </FavouriteProvider>
        </WeatherProvider>
    )
}
