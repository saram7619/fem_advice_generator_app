import useAxios from "../hooks/useAxios";
import axios from '../api/adviceQuotes';

const Advice = () => {

    const [advice, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/advice',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US',
                //'Accept': 'text/html'
            }
        }
    });

    return (
        <article>

            <h3 className="title">Advice #{advice.id}</h3>

            {loading && <p>Loading...</p>}

            {!loading && error && <p className="errMsg">{error}</p>}

            {!loading && !error && advice && <p className="quote">"{advice?.advice}"</p>}

            {!loading && !error && !advice && <p>No quotes to display</p>}

            <div className="svg">
            <svg className="mobile" 
            width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g>
            </svg>

            <svg className="desktop" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g>
            </svg>
            </div>

            <button onClick={()=> refetch()}></button>
        </article>
    );
}

export default Advice;