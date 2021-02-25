import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DetailsFormEdit } from '../components/DetailsFormPageComponents/DetailsFormEdit';
import { IEditableDetailsObj } from '../interfacesTypesAndEnums';



const mockProps: IEditableDetailsObj = {
    details: {
        name: "Steve",
        email: "",
        age: 0
    },
    updateDetails: jest.fn()
}

test("If our set state is called with the correct value when name input is changed", () => {
    render(<DetailsFormEdit details={mockProps.details} 
                updateDetails={mockProps.updateDetails}/>);

    const detailsInput = screen.getByTestId("Details-Form-Input");
    
    userEvent.clear(detailsInput);
    expect(mockProps.updateDetails).toBeCalledWith({"payload": "", "type": "SET_NAME"})

    userEvent.type(detailsInput, `Dave`);
    waitFor(() => {
        expect(mockProps.updateDetails).toBeCalledWith({"payload": "Dave", "type": "SET_NAME"});
        expect(mockProps.updateDetails).toBeCalledTimes(4);
    })
})