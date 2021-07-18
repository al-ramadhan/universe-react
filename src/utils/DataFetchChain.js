import { useState, useEffect } from 'react';

const DataFetchChain = (firstUrl, secondUrl) => {
  const [data, setData] = useState([]);
  const [dataChain, setDataChain] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(firstUrl, { signal: abort.signal })
      .then(res => {
        if(!res.ok){
          throw Error('Data fetching failed!');
        }
        
        return res.json();
      })
      .then((data) => {
        setData(data);

        fetch(secondUrl + data.userId, { signal: abort.signal })
        .then(res => {
          if(!res.ok){
            throw Error('Data fetching failed!');
          }
          
          return res.json();
        })
        .then((dataChain) =>{
          setDataChain(dataChain);
          setIsPending(false);
          setError(null);
        })
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
  },[firstUrl, secondUrl]);

  return {data, dataChain, isPending, error};
}

export default DataFetchChain;