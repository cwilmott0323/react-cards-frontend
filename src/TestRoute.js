import {render} from "react-dom";
import {useState} from "react";

export function TestOne() {
    return (
        <div className="container">
            <h1>Test One</h1>
        </div>
    );
}

export function TestTwo() {
    return (
        <div className="container">
            <h1>Test Two</h1>
        </div>
    );
}

export default function TestRoute() {

    const [isShown, setIsShown] = useState(false);

    return(
        <div>
        <div>
            <TestOne/>
            <TestTwo/>
        </div>
    <div className="Hover">
        <button
            onMouseOver={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Hover over me!
        </button>
        {isShown && (
            <div>
                I'll appear when you hover over the button.
            </div>
        )}
    </div>
        </div>
    );
}
