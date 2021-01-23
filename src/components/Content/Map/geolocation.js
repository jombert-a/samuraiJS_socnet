export const getLocation = (setCoords) => {
    navigator.geolocation.getCurrentPosition(
        (position) => setCoords({
            lat: position.coords.latitude,
            long: position.coords.latitude
        })
    );
}

export const getUserCoordinates = () => {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                console.log(coords);
                resolve(coords);
            });
        }
    });
};

export const fetchCurrentTemp = async () => {
    const coordinates = getUserCoordinates();
    console.log('coords:', coordinates);
};