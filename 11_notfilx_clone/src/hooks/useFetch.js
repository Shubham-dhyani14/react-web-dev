import { useState, useEffect } from 'react';
import { options } from '../constants';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('fetching');
    fetch(url , options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useFetch;



//usage
/*
import useFetch from './useFetch';

function MyComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return 'Loading...';
  if (error) return 'Error: ' + error.message;

  return (
    <div>
      // Render your data here 
      </div>
      );
    }
    
*/ 