import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe("All NavBar Buttons route to correct url", () => {
    test("if Time On App NavBar selection requests page change to 'Home'", () => {
        render(<App/>)

        expect(screen.getByTestId("Page-Title")).toBeDefined();
        expect(screen.getByTestId("Page-Title").innerHTML).toContain("Home");
        
        
        const timeOnAppButton = screen.getByTestId("Time-On-App-Button");
        userEvent.click(timeOnAppButton);

        expect(screen.getByTestId("Page-Title").innerHTML).toContain("Time on App");
    })
})
