import { useState, useEffect } from 'react';

const DataFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abort.signal })
      .then(res => {
        if(!res.ok){
          throw Error('Data fetching failed!');
        }
        
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name==='AbortError') {
          console.log('Data fetch aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      })
    }, 1);

    return () => abort.abort();
  },[url]);

  return {data, isPending, error};
}

export default DataFetch;