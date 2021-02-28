import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"; // This allows the use of DOM extensions such as .value and .toHaveValue
import { DetailsFormView } from '../DetailsFormPageComponents/DetailsFormView';
import { IDetailsObj } from '../../interfacesAndTypes';

// Creating mock data
const mockPositiveProps: IDetailsObj = {
    details: {
        name: "John Smith",
        email: "John.Smith@ExtraSmooth.test",
        age: 31
    }
}
const mockNegativeProps: IDetailsObj = {
    details: {
        name: '',
        email: '',
        age: 0
    }
}

describe("Check input functionality", () => {
    test("if given props are passed to input boxes and inputs are readonly", () => {
        render(<DetailsFormView details={mockPositiveProps.details}/>)

        const nameInput = screen.getByTestId('Name-Form-Input');
        const emailInput = screen.getByTestId('Email-Form-Input');
        const ageInput = screen.getByTestId('Age-Form-Input');

        expect(nameInput).toHaveValue("John Smith");
        expect(emailInput).toHaveValue("John.Smith@ExtraSmooth.test");
        expect(ageInput).toHaveValue("31");
        
        expect(nameInput).toHaveAttribute("readonly");
        expect(emailInput).toHaveAttribute("readonly");
        expect(ageInput).toHaveAttribute("readonly");
    })

    // Further reading about controlled/uncontrolled components in React:
    // https://reactjs.org/docs/forms.html#controlled-components
    // vs...
    // https://reactjs.org/docs/uncontrolled-components.html
    test("if inputs, when passed a empty values of IDetails, still have a value attribute associated with them", () => {
        render(<DetailsFormView details={mockNegativeProps.details}/>)

        const nameInput = screen.getByTestId('Name-Form-Input');
        const emailInput = screen.getByTestId('Email-Form-Input');
        const ageInput = screen.getByTestId('Age-Form-Input');

        expect(nameInput).toHaveAttribute("value");
        expect(emailInput).toHaveAttribute("value");
        expect(ageInput).toHaveAttribute("value");

        expect(nameInput).toHaveValue("");
        expect(emailInput).toHaveValue("");
        expect(ageInput).toHaveValue("0");
    })
    
})