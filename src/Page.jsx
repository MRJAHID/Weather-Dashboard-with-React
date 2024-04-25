import Header from "./components/Header/Header.jsx";
import WeatherBoard from "./components/Weather/WeatherBoard.jsx";
import {useContext} from "react";
import {WeatherContext} from "./context/index.js";

const Page = () => {
    const {weather, loading} = useContext(WeatherContext);
    return (
        <>
            {
                loading.state ? (<div>
                        <p>{loading.message}</p>
                    </div>) :
                    <div className='grid place-items-center h-screen'>
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
