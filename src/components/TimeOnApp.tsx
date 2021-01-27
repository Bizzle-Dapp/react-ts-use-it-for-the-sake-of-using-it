import React from 'react';
import '../styles/App.css';

interface IUseRefPageProps {
    timeRef: React.MutableRefObject<Number>
}

export const TimeOnApp: React.FC<IUseRefPageProps> = (props: IUseRefPageProps) => {
    return(
    <>
        <h1>Time on App:</h1>
        <h2>{props.timeRef.current} seconds.</h2>
        <p>That's {(Number(props.timeRef.current) / 60).toFixed(2)} minutes.</p>
        <p>That's {(Number(props.timeRef.current) / 60 / 60).toFixed(2)} hours.</p>
        <p>That's {(Number(props.timeRef.current) / 60 / 60/ 24).toFixed(2)} days.</p>
        <p>That's approximately {(Number(props.timeRef.current) / 60 / 60/ 24/ 365).toFixed(10)} years!!!</p>
        <p>Woah, what a way to go!</p>
    </>
    )
}