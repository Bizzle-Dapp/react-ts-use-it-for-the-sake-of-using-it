import React, {useState} from 'react';
import '../styles/App.css';



export const LandingPage: React.FC = () => {
    // Path for the image on page, the reason for this is to have a visible example of stateful change on input
    const [imageOnPage, setImageOnPage] = useState<string>("https://cdn.pixabay.com/photo/2020/10/02/13/38/sea-5621150_960_720.jpg");
    const [outputDescending, setOutputDescending] = useState<boolean>(false);
    const [numberList, setNumberList] = useState<string>('');

    const sortMe = (desc: boolean, numbers: string) => {
        return numbers.split(',').sort((a: string, b: string) => {
            return desc ? Number(b) - Number(a) : Number(a) - Number(b);
        }).join(', ').toString();
    }


    return(
    <>
        <h1>Home</h1>
        <p>
            Welcome to the interactive playground. This application has been designed to act as a central point for just simply
            using tools <i>for the sake of using them</i>. A point of reference on how something has previously been done.
        </p>
        <div>
            <p>Change the value of this input box to the path of any image on the internet. Providing CORS is open, the image will display in the box below...</p>
            {/* Input value bound to state, wiht an onChange function that updates the state. */}
            <input className="Image-Path-Input" value={imageOnPage} onChange={(e) => { setImageOnPage(e.target.value) }}></input>
            <br/><br/>
            <img src={imageOnPage} style={{width:"300px"}} alt={`Unable to show path of: ${imageOnPage}`}/>
            <br/><br/>
            <p>Or perhaps you need to sort some numbers? <br/> Enter a list of numbers separated by a comma below...</p>
            <span>Input: 
                <input className="Details-Form-Input"
                    onChange={(e) => { setNumberList(e.target.value) }}/>
            </span>
            <br/><br/> 
            <button onClick={() => { setOutputDescending(!outputDescending) }}>
                { outputDescending ? 'Descending' : 'Ascending' }
            </button>
            <br/><br/>
            <span>Output: 
                <input className="Details-Form-Input Locked-Input"
                    value={ sortMe(outputDescending, numberList) }
                    readOnly />
            </span>
        </div>
    </>
    )
}