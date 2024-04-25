import SearchIcon from "../../assets/search.svg";
import {useContext, useState} from "react";
import {LocationContext} from "../../context/index.js";
import {getLocationByName} from "../../data/location-data.js";

const Search = () => {
    const[ searchTerm, setSearchTerm ] = useState('');
    const {setSelectedLocation} = useContext(LocationContext);


    function handleSubmit(e) {
        e.preventDefault();
        const fetchedLocation = getLocationByName(searchTerm);
        setSelectedLocation({ ...fetchedLocation });
        console.log(fetchedLocation)
    }


    return (
        <form action="#" onSubmit={handleSubmit}>
            <div
                className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">

                <input onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required/>

                <button type="submit">
                    <img src={SearchIcon} alt='Search Icon'/>
                </button>
            </div>
        </form>
    );
};

export default Search;
