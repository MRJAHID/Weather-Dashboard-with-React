import {useEffect, useState} from "react";


// TODO: Get and Set Value on LocalStorage
const useLocalStorage = (storageKey, defaultValue) => {
    // Get Value From LocalStorage
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);

    // Set Value On LocalStorage
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
}

export default useLocalStorage;
