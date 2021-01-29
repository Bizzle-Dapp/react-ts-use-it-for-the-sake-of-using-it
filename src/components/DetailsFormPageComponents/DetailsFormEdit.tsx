import React from 'react';
import '../../styles/App.css';
import { IEditableDetailsObj } from '../../InterfacesTypesAndEnums';

export const DetailsFormEdit: React.FC<IEditableDetailsObj> = (props: IEditableDetailsObj) => {

    return(
        <>
            <input className="Details-Form-Input" 
                    placeholder="Name" 
                    value={ props.Details.name ? props.Details.name : '' } 
                    onChange={(e) => props.updateDetails({ type: 'SET_NAME', payload: e.target.value })} />
            <br/><br/>
            <input className="Details-Form-Input" 
                    placeholder="Age" 
                    value={ props.Details.age } 
                    onChange={(e) => props.updateDetails({ type: 'SET_AGE', payload: e.target.value })} />
            <br/><br/>
            <input className="Details-Form-Input" 
                    placeholder="Email"  
                    value={ props.Details.email ? props.Details.email : '' }
                    onChange={(e) => props.updateDetails({ type: 'SET_EMAIL', payload: e.target.value })} />
            <br/><br/>
            <button className="Details-Form-Tab-Button" 
                    onClick={() =>  props.updateDetails({ type: 'CLEAR_DETAILS' })} >
                Clear Details
            </button>
        </>
    )
}