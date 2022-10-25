import CategoriesCard from '@/components/page-elements/CategoriesCard';
import { render, screen } from '@testing-library/react';
import { TbRocket } from "react-icons/tb"

const sampleData = {
    id: 1,
    title: 'OMG!',
    icon: <TbRocket className="h-5 w-5" />
}

describe('CategoriesCard Tests', () => {

    test('button should show the correct child element', () => {
        render(<CategoriesCard data={sampleData} active onClick={()=>jest.fn()} />);
        const textValue = screen.getByText("OMG!");
        expect(textValue).toBeInTheDocument();
    });

})