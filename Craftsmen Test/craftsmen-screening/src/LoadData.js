import React, { useEffect, useState } from 'react';

const LoadData = () => {
    // const [nextStep, setNextStep] = useState([])
    useEffect(() => {
        fetch("http://localhost:3272/step1", {
            method: "GET",
            headers: {
                "craftsmen-api-key": "UGxlYXNlRG9uJ3RDaGFuZ2VUaGlzVmFsdWU=",
                "email": "mdrokon7773@gmail.com"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            Load Data
        </div>
    );
};

export default LoadData;