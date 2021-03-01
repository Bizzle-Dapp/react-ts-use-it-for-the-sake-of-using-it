import React from 'react';
import '../styles/App.css';

interface ITimeOnAppPageProps {
    timeRef: Number
}

export const TimeOnAppPage: React.FC<ITimeOnAppPageProps> = (props: ITimeOnAppPageProps) => {
    return(
    <>
        <h1 data-testid="Page-Title">Time on App</h1>
        <h2>{props.timeRef} seconds.</h2>
        <p>That's {(Number(props.timeRef) / 60).toFixed(3)} minutes.</p>
        <p>That's {(Number(props.timeRef) / 60 / 60).toFixed(4)} hours.</p>
        <p>That's {(Number(props.timeRef) / 60 / 60/ 24).toFixed(5)} days.</p>
        <p>That's approximately {(Number(props.timeRef) / 60 / 60/ 24/ 365).toFixed(10)} years!!!</p>
        <p>Woah, what a way to go!</p>
    </>
    )
}