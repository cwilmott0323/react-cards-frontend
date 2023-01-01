import React, {useEffect} from 'react';
import axios from "axios";
import useToken from "./useToken";
import IsAuth from "./IsAuth";
import { useNavigate } from "react-router-dom";
import {DefaultStyle} from "./DefaultStyle";

export default function Dashboard() {
    const { token, setToken } = useToken();
    const [userCont, setUserCont] = React.useState([])


    const x = IsAuth(token, setToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!x) {
            navigate("/login");
        }
    }, [x, navigate]);

    useEffect(() => {
        getDataAxiosUser(token).then(r => {
            console.log("Data", r.data[0])
            setUserCont(r.data[0])
        }).catch(
            e => e
        );
    }, [token]);

    return(
        <DefaultStyle prop={userCont}/>
    );
}

async function getDataAxiosUser(token) {
    try {
        return await axios.get('http://52.56.192.168:443/cards/me',
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
            );

    } catch (e) {
        console.log(`Error! status: ${e}`)
    }
}