import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => alert(error+`  Error FakeApi: a veces se cae Cloudfare y hay Error Code 502: Bad gateway`))
            
    }
    useEffect(() => {
        getData()
    },[])
    return [data]
}

export default useFetch