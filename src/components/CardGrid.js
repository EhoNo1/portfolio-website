import React from "react";
import Card  from "./Card";


export default function CardGrid(props) {
    let cardData = props.data;
    let cards = [];
    //console.log(cards[0]);

    for (let i = 0; i < cardData.length; i++) {
        cards[i] = <Card data={cardData[i]} key={cardData[i].title} />;
    }

    return (
        <div className="container text-center">
            <div className="row contentcenter">
            {cards}
            </div>
        </div>
    );
}
