import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

import { useState } from "react";

export default function Question({ question, answer }) {
    const mins = <img src={minusIcon} alt="plusIcon" className="Icon" />;
    const plus = <img src={plusIcon} alt="plusIcon" className="Icon" />;

    const [isHidden, setIsHidden] = useState(true);
    const handleClick = () => {
        setIsHidden((pre) => !pre);
    };

    return (
        <div className="FAQ-text">
            <div className="FAQ-text__title">
                <h2 className="FAQ__question">{question}</h2>
                <button onClick={handleClick}>{isHidden ? plus : mins}</button>
            </div>
            {isHidden ? null : <p className="answer">{answer}</p>}
        </div>
    );
}
