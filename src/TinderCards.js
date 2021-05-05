import React, { useState } from 'react';
import "./TinderCards.css";

function TinderCards() {
    const [people, setState] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Felon-musk%2F&psig=AOvVaw3TvEUG3VT3cPyi6WsABPfI&ust=1620071836113000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCSv4Xkq_ACFQAAAAAdAAAAABAD"
        },
        {
            name: 'Jeff Bezos',
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fjeff-bezos%2F&psig=AOvVaw1QzZZi8IMpL4Q2bto7D0uV&ust=1620072235761000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjpxsXlq_ACFQAAAAAdAAAAABAD"
        }
    ]);
    return (
        <div className="tinderCards">
            {
                people.map((person) => (
                    <h1>{person.name}</h1>
                ))
            }
        </div>
    )
}

export default TinderCards
