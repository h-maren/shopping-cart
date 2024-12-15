
import {render, screen} from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';
import {describe, it, expect} from 'vitest';
import Home from './Home.jsx';

//home component testing
describe('home component heading text', () => {
    it('first heading renders correct title', () => {
        render(<Home />)
        expect(screen.getByText(/Need Some Basic Clothes/i)).toBeInTheDocument();
    })                      
    it('second heading renders correct title', () => {
        render(<Home />)
        expect(screen.getByText(/Looking for something more basic than Stitch Fix,/i)).toBeInTheDocument();
    })    
    it('third heading renders correct title', () => {
        render(<Home />)
        expect(screen.getByText(/Shop Here, at Basic Clothes Inc!/i)).toBeInTheDocument();
    })                                                                        
})

describe('background image correct', () => {
    it('get correct background image styling', () => {
        render(<Home />)
        expect(screen.getByTestId('homeText')).toHaveStyle(`background-image: 'url(./images/clothes.jpg)'`)
    })
})