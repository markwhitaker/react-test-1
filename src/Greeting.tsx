import React from "react";

export default function Greeting() {
    const greetings : string[] = [
        "Learn React",
        "Howdy",
        "Hello world",
        "Ten-SHUN! Officer on deck"
    ];
    const greeting : string = greetings[Math.floor(Math.random() * greetings.length)];
    return (
        <div>{greeting}</div>
    );
}