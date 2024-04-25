import {FavouriteContext} from "../context/index.js";
import {useLocalStorage} from "../hooks/index.js";


const FavouriteProvider = ({children}) => {

    // Get Items from Local Storage
    const [favourites, setFavourites] = useLocalStorage("favourites", []);

    // Add Data to favorites
    const addToFavourites = (latitude, longitude, location) => {
        setFavourites([...favourites, {
                latitude: latitude,
                longitude: longitude,
                location: location,
        }]);
    };

    // Add Data From favorites
    const removeFromFavourites = (location) => {
        const restFavourites = favourites.filter(fav => fav.location !== location);
        setFavourites(restFavourites)
    }

    // Favourite Context Provider
    return (
        <FavouriteContext.Provider value={{favourites, removeFromFavourites, addToFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
};

export default FavouriteProvider;
