import { useState, useEffect } from 'react';


const useCustomFetch = (url:any, method:string , body:any) => {
  const [resdata, setResdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApiCall = async () => {
    setIsLoading(true);

    try {
      const options = {
        method,
        headers: { 'Content-Type': 'application/json' },        
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }else{
        setResdata(responseData);
        console.log("responseData", responseData);      
        //setError("");
      }
      
    } catch (error:any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // console.log("------------");
  // console.log(resdata);

  return { resdata, isLoading, error, fetchApiCall };
};

export default useCustomFetch;
