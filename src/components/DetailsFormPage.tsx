import React, { useReducer, useState } from 'react';
import { defaultDetailsState, detailsReducer } from '../reducers/DetailsFormReducer';
import '../styles/App.css';
import { DetailsFormEdit, DetailsFormView } from './index';

enum DetailsFormTabSelect {
    Edit = "Edit",
    View = "View"
}

export const DetailsFormPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<DetailsFormTabSelect>(DetailsFormTabSelect.Edit);
    const [detailsState, detailsDispatch ] = useReducer(detailsReducer, defaultDetailsState);



    const renderComponent = () => {
        switch(selectedTab) {
            case DetailsFormTabSelect.Edit:
                return (<DetailsFormEdit Details={detailsState.Details} updateDetails={detailsDispatch} />);
            case DetailsFormTabSelect.View:
                return (<DetailsFormView Details={detailsState.Details} />);
        }
    }    

    return(
        <>
        <div>
        <h1>Details Form</h1>
            <span className="Details-Form-Tab-Container">
                <button onClick={() => { setSelectedTab(DetailsFormTabSelect.Edit) }} className="Details-Form-Tab-Button">
                    {DetailsFormTabSelect.Edit}
                </button>
                <button onClick={() => { setSelectedTab(DetailsFormTabSelect.View) }} className="Details-Form-Tab-Button">
                    {DetailsFormTabSelect.View}
                </button>
            </span>
        </div>
        <div className="Form-Container">
            { renderComponent() }
        </div>
        </>
    )

}