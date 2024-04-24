import Header from "./components/Header/Header.jsx";
import WeatherBoard from "./components/Weather/WeatherBoard.jsx";

export default function App() {
    return (
        <div className='grid place-items-center h-screen'>
            <Header/>
            <main>
                <section>
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    )
}
