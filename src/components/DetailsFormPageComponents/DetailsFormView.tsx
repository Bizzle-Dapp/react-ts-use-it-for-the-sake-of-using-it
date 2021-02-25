import React from 'react';
import '../../styles/App.css';
import { IDetailsObj } from '../../interfacesTypesAndEnums';

// This is a base component with no inherent functionality. All data and data manupulated is injected through props. But wait .. 
// .. there is no data manipulation.
export const DetailsFormView: React.FC<IDetailsObj> = (props: IDetailsObj) => {
    return(
        <>
            <form>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Name" 
                        readOnly 
                        value={ props.details.name ? props.details.name : '' } />
                <br/><br/>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Age" 
                        readOnly 
                        value={ props.details.age } />
                <br/><br/>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Email" 
                        readOnly 
                        value={ props.details.email ? props.details.email : '' } />
            </form>
        </>
    )
}