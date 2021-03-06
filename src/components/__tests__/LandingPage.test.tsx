import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LandingPage } from '../../components/index';

test("When Image-Path-Input value is change, the src of the image should update", () => {
    render(<LandingPage/>)
    
    const imagePath = screen.getByTestId("Image-Path-Input");
    expect(imagePath).toBeDefined();

    userEvent.clear(imagePath);
    userEvent.type(imagePath, "TestPath.jpg");
    
    const imageElement = screen.getByTestId("Image-Path-Output");

    // using toContain("TestPath.jpg") here meant that this passed without.. 
    // userEvent.clear(imagePath), toEqual("TestPath.jpg") meant the strings.. 
    // had to match.
    expect(imageElement.getAttribute("src")).toEqual("TestPath.jpg")
})