import { useState, useEffect } from "react";

const useAxios = (configObj) => {
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;

    const [advice, setAdvice] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1);

    useEffect(() => {
        //let isMounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal: controller.signal
                });
               console.log(res)
               setAdvice(res.data.slip);
               setError('')
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        // call the function
        fetchData();

        // useEffect cleanup function
        return () => controller.abort();

        // eslint-disable-next-line
    }, [reload]);

    return [advice, error, loading, refetch];
}

export default useAxios