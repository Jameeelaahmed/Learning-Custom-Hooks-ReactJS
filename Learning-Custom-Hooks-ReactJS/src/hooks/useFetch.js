import { useEffect, useState } from 'react';
export function useFetch(fetchFn, initialData) {
    const [isFetching, setIsFetching] = useState(false);
    const [fetchedData, setFetchedData] = useState(initialData);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchedData(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchedData,
        setFetchedData,
        error,
    }
}