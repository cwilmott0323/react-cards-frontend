import images from "./images";
import logo from "./1.png";
import React, {useState} from "react";

// class FooBar extends React.Component {
//     defaultStyle = cont => () => {
//         return (
//             <div className="container">
//                 <h3 className="title"> Card Database </h3>
//                 <div className="products-container">
//                     {cont.map((d, index) =>
//                         <div key={d.id} className="product">
//                             {/*<img key={images.id} src={images[index].image}  alt={""}/>*/}
//                             <img key={images.id} src={logo}  alt={logo}/>
//                             <h3>{d.name}</h3>
//                             <div className="price">{d.description}</div>
//                         </div>)}
//                 </div>
//             </div>
//         )
//     };
// }

// <div className="Hover">
//     <button
//         onMouseOver={() => setIsShown(true)}
//         onMouseLeave={() => setIsShown(false)}>
//         Hover over me!
//     </button>
//     {isShown && (
//         <div>
//             I'll appear when you hover over the button.
//         </div>
//     )}
// </div>
export function DefaultStyle({prop}) {
    const [isShown, setIsShown] = useState(false);

    console.log("Inside Default: ", {prop})
    return (
        <div className="container">
            <h3 className="title"> Card Database </h3>
            <div className="products-container">
                {prop.map((d, index) =>
                    <div key={d.id} className="product">
                        {/*<img key={images.id} src={images[index].image}  alt={""}/>*/}
                        <img key={images.id} src={logo}  alt={logo}
                        onMouseOver={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        />
                        <h3>{d.name}</h3>
                        <div className="price">{d.description}</div>
                        {isShown && (
                            <div className="stats">{"Attack: " + d.attack}</div>
                        )}
                    </div>)}
            </div>
        </div>
    )
}