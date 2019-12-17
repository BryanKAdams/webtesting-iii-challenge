// Test away!

import React from 'react';
import { render } from '@testing-library/react'
import Controls from './Controls'
import '@testing-library/jest-dom/extend-expect';

test("Must be unlocked before opening", () => {
    const locktestOpen = render(<Controls locked={true} closed={true} />)
    expect(locktestOpen.getByTestId("handle")).not.toBeEnabled();
})

test("Must be unlocked before closing", () => {
    const locktestClosed = render(<Controls locked={true} closed={false} />)
    expect(locktestClosed.getByTestId("handle")).not.toBeEnabled()
})