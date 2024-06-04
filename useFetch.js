const { useState, useEffect } = React;

export default function useFetch(api,defaultValue) {
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState('')
  
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setAdvance(data.slip)
      }).finally(() => setloading(false))
  }, []);

  return {
    loading,
    data,
    setdata,
    setloading
  }
}
