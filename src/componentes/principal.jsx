import React, { useEffect, useState } from 'react';
import Hijouno from './hijoUno';

const Principal = () => {
    const [data, setData] = useState(null)
    const [temperatura, setTemperatura] = useState(0)
    const [pais, setPais] = useState('')
    const [maxTemp, setMaxTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [humedad, setHumedad] = useState(0)
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=e06b44244ab738b80a6ae76d0da6c1eb`)
        .then((res)=>res.json())
        .then((res)=> {
            setData(res)
            setTemperatura(res.main.temp)
            setPais(res.name)
            setMaxTemp(res.main.temp_max)
            setMinTemp(res.main.temp_min)
            setHumedad(res.main.humidity)
        })
    }, []);
    return (
        <div>
            {
                data !== null ? <Hijouno
                temperatura={temperatura}
                pais={pais}
                maxTemp={maxTemp}
                minTemp={minTemp}
                humedad={humedad}
                /> : null
            }
        </div>
    );
}

export default Principal;
