import React, { useState } from "react";
import { ElementStatus } from "../state";

import {calcColor} from "../utils";

type Props = {
    wishID: number;
    wishStatus: ElementStatus;
    onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const WishCalendarElement: React.FC<Props> = ({ wishID, wishStatus, onClick }) => {
    const calcSide = Math.floor(Math.random() * 39) + 60;
    let [side, setSide] = useState(calcSide);
    let [glowColor, setGlowColor] = useState(calcColor(wishID));
    let opacity = "0.5";
    let pointerEvents: ("none" | "auto") = "none";

    if(wishStatus == ElementStatus.AvailableForViewing) {
        opacity = "1";
        pointerEvents = "auto";
    }
    
    let spanStyle: React.CSSProperties = {
        animationDelay: `-${0.4 * wishID}s`,
        width: `${side}px`,
        height: `${side}px`,
        color: glowColor,
        backgroundColor: glowColor+"50",
        opacity: opacity,
        pointerEvents: pointerEvents,
    };

    let pStyle: React.CSSProperties = {
        lineHeight: `${side * 0.88}px`,
        fontSize: `${side / 2}px`
    }

    return (
        <li className="wishCalendarElement">
            <span onClick={onClick} style={spanStyle}>
                <p style={pStyle}>{wishID + 1}</p>
            </span>
        </li>
    );
}

export default WishCalendarElement;