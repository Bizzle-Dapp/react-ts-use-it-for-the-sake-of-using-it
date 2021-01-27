import React, {useState} from 'react';
import '../styles/App.css';



export const LandingPage: React.FC = () => {
    const [imageOnPage, setImageOnPage] = useState<string>()
    


    return(
    <>
        <h1>Home</h1>
        <p>
            Welcome to the interactive playground. This application has been designed to act as a central point for just simply
            using tools <i>for the sake of using them</i>. A point of reference on how something has previously been done.
        </p>
    </>
    )
}