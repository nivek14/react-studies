import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        }
        else if (method === "DELETE") {
            setConfig({
                method,
                headers: { "Content-Type": "application/json" },
            })
        }
        setMethod(method);
        setItemId(data);
    }

    useEffect(() => {

        setLoading(true);

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError("houve um erro");
            }

            setLoading(false);
        }
        fetchData();
    }, [url]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOption = [url, config];
                const res = await fetch(...fetchOption);
                const json = await res.json();
                setCallFetch(json);
            }
            else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);
                const json = await res.json();
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };

};