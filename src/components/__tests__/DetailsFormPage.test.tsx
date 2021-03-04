import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"; // This allows the use of DOM extensions such as .value and .toHaveValue
import userEvent from '@testing-library/user-event';
import { DetailsFormPage } from '../';


describe("Details Form Page Default", () => {
    test("if default component being rendered is the DetailsFormEdit", () => {
        render(<DetailsFormPage/>);

        const nameInput = screen.getByTestId('Name-Form-Input');
        const clearFormButton = screen.getByTestId('Form-Clear-Button');

        expect(nameInput.getAttribute("readonly")).toEqual(null);
        expect(clearFormButton).toBeInTheDocument();
    })
})

describe("Details Form Navigation", () => {
    test("if selecting 'View' directs to the readonly inputs component and select 'Edit' after directs back to editable inputs component", () => {
        render(<DetailsFormPage/>);
        const nameInput = screen.getByTestId('Name-Form-Input');
        expect(nameInput.getAttribute("readonly")).toEqual(null);

        userEvent.click(screen.getByTestId("Details-Form-Tab-View"));

        waitFor(() => {
            expect(nameInput.hasAttribute("readonly")).toBeTruthy();
        });

        userEvent.click(screen.getByTestId("Details-Form-Tab-Edit"));

        waitFor(() => {
            expect(nameInput.getAttribute("readonly")).toEqual(null);
        });
    })
})