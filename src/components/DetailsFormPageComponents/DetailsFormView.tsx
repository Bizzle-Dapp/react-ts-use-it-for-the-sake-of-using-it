import React from 'react';
import '../../styles/App.css';
import { IDetailsObj } from '../../interfacesTypesAndEnums';

export const DetailsFormView: React.FC<IDetailsObj> = (props: IDetailsObj) => {

    return(
        <>
            <form>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Name" 
                        readOnly 
                        value={ props.Details.name ? props.Details.name : '' } />
                <br/><br/>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Age" 
                        readOnly 
                        value={ props.Details.age } />
                <br/><br/>
                <input className="Details-Form-Input Locked-Input" 
                        placeholder="Email" 
                        readOnly 
                        value={ props.Details.email ? props.Details.email : '' } />
            </form>
        </>
    )
}