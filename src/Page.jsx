import Header from "./components/Header/Header.jsx";
import WeatherBoard from "./components/Weather/WeatherBoard.jsx";
import {useContext, useState, useEffect} from "react";
import {WeatherContext} from "./context/index.js";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
    const {weather, loading} = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weather.climate);
        setClimateImage(bgImage);
    }, [weather.climate]);

    return (
        <>
            {
                loading.state ? (
                        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
                            <p className="text-center text-3xl text-black">
                                {loading.message}
                            </p>
                        </div>
                    ) :
                    <div
                        style={{backgroundImage: `url('${climateImage}')`}}
                        className="grid place-items-center h-screen bg-no-repeat bg-cover"
                    >
                        <Header/>
                        <main>
                            <section>
                                <WeatherBoard/>
                            </section>
                        </main>
                    </div>
            }
        </>

    );
};

export default Page;
