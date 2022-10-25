import FilterCta from '@/components/common/FilterCta';
import { render, screen } from '@testing-library/react';

describe('FilterCta Tests', () => {

    test('button should show the correct text', () => {
        render(<FilterCta />);
        const textValue = screen.getByText("Filters");
        expect(textValue).toBeInTheDocument();
    });

})