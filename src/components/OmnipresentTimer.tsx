import { useState, useEffect } from 'react';

function OmnipresentTimer() {
  // State to retain the time spent on App
    const [timeOnApp, setTimeOnApp] = useState<number>(0);

    // Use a continous looping useEffect to create a timer for how long someone has been on the app, in seconds.
    useEffect(() => {
        let timer = setInterval(() => {
        setTimeOnApp(timeOnApp + 1);
    }, 1000);
    return () => clearInterval(timer);
    })

    return { timeOnApp }
}

export default OmnipresentTimer;