import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DetailsFormEdit } from '../DetailsFormPageComponents/DetailsFormEdit';
import { IEditableDetailsObj } from '../../interfacesAndTypes';


// Creating mock data
const mockProps: IEditableDetailsObj = {
    details: {
        name: "Steve",
        email: "Steve@email.co.uk",
        age: 0
    },
    updateDetails: jest.fn()
}

describe("Input Box tests", () => {
    test("If our set state is called with the correct value when name input is changed", () => {
        render(<DetailsFormEdit details={mockProps.details} 
                    updateDetails={mockProps.updateDetails}/>);
    
        const nameInput = screen.getByTestId("Name-Form-Input");
        
        userEvent.clear(nameInput);
        expect(mockProps.updateDetails).toBeCalledWith({"payload": "", "type": "SET_NAME"})
    
        // userEvent.type triggers for each character in the string
        userEvent.type(nameInput, `Dave`);
        // so we have to waitFor events to complete before our expects can resolve correctly
        waitFor(() => {
            expect(mockProps.updateDetails).toBeCalledWith({"payload": "Dave", "type": "SET_NAME"});
            expect(mockProps.updateDetails).toBeCalledTimes(4);
        })
    })

    test("If our set state is called with the correct value when age input is changed", () => {
        render(<DetailsFormEdit details={mockProps.details} 
                    updateDetails={mockProps.updateDetails}/>);
    
        const ageInput = screen.getByTestId("Age-Form-Input");
        
        userEvent.clear(ageInput);
        expect(mockProps.updateDetails).toBeCalledWith({"payload": "", "type": "SET_AGE"})
    
        // userEvent.type triggers for each character in the string
        userEvent.type(ageInput, `6`);
        // so we have to waitFor events to complete before our expects can resolve correctly
        waitFor(() => {
            expect(mockProps.updateDetails).toBeCalledWith({"payload": "6", "type": "SET_AGE"});
            expect(mockProps.updateDetails).toBeCalledTimes(1);
        })
    })

    test("If our set state is called with the correct value when email input is changed", () => {
        render(<DetailsFormEdit details={mockProps.details} 
                    updateDetails={mockProps.updateDetails}/>);
    
        const emailInput = screen.getByTestId("Email-Form-Input");
        
        userEvent.clear(emailInput);
        expect(mockProps.updateDetails).toBeCalledWith({"payload": "", "type": "SET_EMAIL"})
    
        let entry = `Dave@Email.co.uk`;
        // userEvent.type triggers for each character in the string
        userEvent.type(emailInput, entry);
        // so we have to waitFor events to complete before our expects can resolve correctly
        waitFor(() => {
            expect(mockProps.updateDetails).toBeCalledWith({"payload": entry, "type": "SET_EMAIL"});
            expect(mockProps.updateDetails).toBeCalledTimes(entry.length);
        })
    })

})
