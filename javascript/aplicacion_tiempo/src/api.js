const fetchWeatherData = async (location) => {
    const apiKey = '8ZC6V5LL3J457Z8QVXSX6GKS2';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
};



export { fetchWeatherData };