import React from "react";
import { IWish } from "../state";
import {getMedia} from "../data";
import  {calcColor, shadeColor} from "../utils";

type Props = {
    selectedWish: (IWish | null);
    returnToCalendar: (id: number , event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const WishView: React.FC<Props> = ({ selectedWish, returnToCalendar }) => {

    let style = {};
    if(selectedWish) {
        let elementColor = calcColor(selectedWish.id);
        style = {
            backgroundColor: shadeColor(elementColor,-70),
            color: elementColor
        }
    }

    return (
        selectedWish ?
            <div onClick={(e) => returnToCalendar(-1, e)} className="overlay">
                <div className="wishView" style={style}>
                    <section>
                        <p className="date">
                            <span>{`DAY: ${selectedWish.id + 1}`}</span>
                        </p>
                        <p className="text">
                            <h3>{selectedWish.title}</h3>
                            {selectedWish.text}
                        </p>
                    </section>
                    {
                        selectedWish.mediaType == "image" ? 
                        <img src={getMedia(selectedWish.id)}/> :
                        <video autoPlay muted loop className="wishViewVideo">
                            <source src={getMedia(selectedWish.id)} />
                        </video>
                    }
                    {selectedWish.source ? <a href={selectedWish.source}>Source</a> : null}
                </div>
            </div> : null
    );
}

export default WishView;