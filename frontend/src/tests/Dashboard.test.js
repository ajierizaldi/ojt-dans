import React from 'react';
import { render, screen } from '@testing-library/react';


// import Dashboard from '../components/pages/Dashboard';
import TimeNow from '../components/partials/TimeNow';

describe('Dashboard', () => {
    it('if time is less than 12pm, it should say Good Morning', () => {
        const { getByText } = render(<TimeNow />);
        expect(getByText('Selamat Sore')).toBeInTheDocument();
    })
})
