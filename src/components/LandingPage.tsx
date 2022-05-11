import React, {useState} from 'react';
import '../styles/App.css';
import MailTo from './MailToButton';
import { NumberSorter } from './NumberSorter';



export const LandingPage: React.FC = () => {
    // Path for the image on page, the reason for this is to have a visible example of stateful change on input
    const [imageOnPage, setImageOnPage] = useState<string>("https://cdn.pixabay.com/photo/2020/10/02/13/38/sea-5621150_960_720.jpg");

    return(
    <>
        <h1 data-testid="Page-Title">Home</h1>
        <p>
            Welcome to the interactive playground. This application has been designed to act as a central point for just simply
            using tools <i>for the sake of using them</i>. A point of reference on how something has previously been done.
        </p>
        <div>
            <p>Change the value of this input box to the path of any image on the internet. Providing CORS is open, the image will display in the box below...</p>
            {/* Input value bound to state, wiht an onChange function that updates the state. */}
            <input className="Image-Path-Input" data-testid="Image-Path-Input" value={imageOnPage} onChange={(e) => { setImageOnPage(e.target.value) }}></input>
            <br/><br/>
            <img src={imageOnPage} data-testid="Image-Path-Output" style={{width:"300px"}} alt={`Unable to show path of: ${imageOnPage}`}/>
            <br/><br/>
            <NumberSorter />
            <br/><br/>
            <p>Example Mail To Button here:</p>
            <MailTo/>
        </div>
    </>
    )
}