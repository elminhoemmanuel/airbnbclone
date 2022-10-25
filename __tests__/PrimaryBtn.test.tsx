import PrimaryBtn from '@/components/common/PrimaryBtn';
import { render, screen } from '@testing-library/react';

describe('PrimaryBtn Tests', () => {

    test('button should show the correct child element', () => {
        render(<PrimaryBtn>Test</PrimaryBtn>);
        const textValue = screen.getByText("Test");
        expect(textValue).toBeInTheDocument();
    });

})