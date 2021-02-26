import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DetailsFormEdit } from '../../components/DetailsFormPageComponents/DetailsFormEdit';
import { IEditableDetailsObj } from '../../interfacesTypesAndEnums';


// Creating mock data
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

    // userEvent.type triggers for each character in the string
    userEvent.type(detailsInput, `Dave`);
    // so we have to waitFor events to complete before our expects can resolve correctly
    waitFor(() => {
        expect(mockProps.updateDetails).toBeCalledWith({"payload": "Dave", "type": "SET_NAME"});
        expect(mockProps.updateDetails).toBeCalledTimes(4);
    })
})