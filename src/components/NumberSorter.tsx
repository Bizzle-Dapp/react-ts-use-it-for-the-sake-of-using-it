import React, { useState } from 'react';

export const NumberSorter: React.FC = () => {
    const [outputDescending, setOutputDescending] = useState<boolean>(false);
    const [numberList, setNumberList] = useState<string>('');

    const sortMe = (desc: boolean, numbers: string) => {
        return numbers.split(',').sort((a: string, b: string) => {
            return desc ? Number(b) - Number(a) : Number(a) - Number(b);
        }).join(', ').toString();
    }


    return(
        <>
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
        </>
    )
}