import { useState } from "react";
import arrowBack from "../assets/arrow_back.svg";
import arrowUp from "../assets/arrow_up.svg";

export default function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {setIsOpen(!isOpen)};
    return (
        <div className="Collapse">
            <div className="Collapse-header" onClick={toggleCollapse}>           
                 <h2>{title}</h2> 
                 {isOpen? <img src={arrowUp} alt="arrow up" /> : <img src={arrowBack} alt="arrow back" />}
            </div>
            {isOpen && <div className="Collapse-content">{content}</div>  }
        </div>
    )
}