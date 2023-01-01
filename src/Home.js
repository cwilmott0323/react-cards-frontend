import React, {useEffect} from 'react';
import axios from "axios";
import {DefaultStyle} from "./DefaultStyle";

export default function Home() {
    const [cont, setCont] = React.useState([])

    useEffect(() => {
        getDataAxios().then(r => {
            setCont(r.data[0]);
        });
    }, []);

    return(
        <DefaultStyle prop={cont}/>
    );
}

function getDataAxios(){
    return axios.get("http://52.56.192.168:443/cards/all")
}

