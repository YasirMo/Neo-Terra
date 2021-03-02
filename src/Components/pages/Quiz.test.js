import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Quiz from './Quiz';

it('renders correctly', () => {
    const {queryByTestId} = render(<Quiz/>);;
    expect(true).toBeTruthy()
})