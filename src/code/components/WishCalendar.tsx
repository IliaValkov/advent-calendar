import React from "react";
import WishCalendarElement from "./WishCalendarElement";
import {IWish} from "../state";

type Props = {
    wishes: IWish[];
    elementOnClick: (id:number, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;    
}

const WishCalendar: React.FC<Props> = ({wishes, elementOnClick}) => {
    
    const calendarElements = wishes.map( wish => <WishCalendarElement onClick={(e) => elementOnClick(wish.id, e)} wishID={wish.id} wishStatus={wish.status} key={wish.id}/>)
    
    return (
        <ul className="wishCalendar">
            {calendarElements}
        </ul>
    );
}

export default WishCalendar;