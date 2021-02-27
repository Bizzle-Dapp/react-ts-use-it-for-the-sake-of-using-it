import React from 'react';
import '../../styles/App.css';
import { IEditableDetailsObj } from '../../interfacesAndTypes';

// This is a base component with no inherent functionality. All data and data manupulated is injected through props.
export const DetailsFormEdit: React.FC<IEditableDetailsObj> = (props: IEditableDetailsObj) => {
    return(
        <>
            <input className="Details-Form-Input" 
                    data-testid="Details-Form-Input"
                    placeholder="Name" 
                    value={ props.details.name ? props.details.name : '' } 
                    onChange={(e) => props.updateDetails({ type: 'SET_NAME', payload: e.target.value })} />
            <br/><br/>
            <input className="Details-Form-Input" 
                    placeholder="Age" 
                    value={ props.details.age } 
                    onChange={(e) => props.updateDetails({ type: 'SET_AGE', payload: e.target.value })} />
            <br/><br/>
            <input className="Details-Form-Input" 
                    placeholder="Email"  
                    value={ props.details.email ? props.details.email : '' }
                    onChange={(e) => props.updateDetails({ type: 'SET_EMAIL', payload: e.target.value })} />
            <br/><br/>
            <button className="Details-Form-Tab-Button" 
                    onClick={() =>  props.updateDetails({ type: 'CLEAR_DETAILS' })} >
                Clear Details
            </button>
        </>
    )
}