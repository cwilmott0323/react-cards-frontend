import React, {useEffect, useState} from 'react';
import useToken from "./useToken";
import IsAuth from "./IsAuth";
import images from "./images";
import logo from "./1.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {DefaultStyle} from "./DefaultStyle";
import {render} from "react-dom";

export default function AddCards() {

    const [cardGen, setCardGen] = React.useState([])

    const { token, setToken } = useToken();

    const [ invalid, setInvalid ] = useState();

    const [code, setCode] = useState();

    const re = new RegExp('[A-Z0-9]{24}');

    const [visible, setVisible] = useState(true);

    const x = IsAuth(token, setToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!x) {
            navigate("/login");
        }
    }, [x, navigate]);

    const removeElement = () => {
        setVisible((prev) => !prev);
    };

    const handleSubmit = async e => {
        e.preventDefault();
            const {genCards, invalid} = await generateCards(token, code, re).catch(
                e => e
            );
        setInvalid(invalid)
        try {
            setCardGen(genCards.data[0])
            removeElement()
            console.log("Before Default: ", cardGen)
            // return DefaultStyle(cardGen)
        } catch (e) {
            console.warn(e)
        }
    }

    return(
        <div>
        <div className="login-wrapper">
            {console.log(cardGen)}
            {visible && (
                <form onSubmit={handleSubmit}>
                    <label>
                        <h1>Enter Pack Code</h1>
                        <h1 style={{ color: 'red' }}>{invalid}</h1>
                        <input type="text" onChange={e => setCode(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            )}
        </div>
            {!visible && cardGen !== undefined && (
                <DefaultStyle prop={cardGen}/>
                )}
        </div>
    );
}

async function generateCards(token, code, re) {
    try {
        if (!re.exec(code)) {
            throw new Error("invalid pack code")
        }

    } catch (e) {
        return {
            genCards: null,
            invalid: "Incorrect Pack Code"
        };
    }
    try {
        const url = 'http://52.56.192.168:443/cards/' + code
        console.log(url)
        const d =  await axios.get(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
        );
        console.log("Logging data: ", d)
        return {
            genCards: d,
            invalid: null
        };
    } catch (e) {
        console.log(`Error! status: ${e}`)
        return {
            genCards: null,
            invalid: "Incorrect Pack Code"
        };
    }
}