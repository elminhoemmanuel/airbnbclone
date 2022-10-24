import React from 'react'

type HouseCategory = {
    id: number;
    title: string;
    icon: React.ReactNode;
}

type props = {
    data: HouseCategory;
    active: boolean;
    onClick: ()=>void
}

const CategoriesCard = ({ data, active, onClick }: props) => {
    return (
        <button className={`flex items-center justify-center flex-col border-b-2
         border-white focus:outline-none ${active? "border-gray-700": "border-white hover:border-gray-200"}`}
         onClick={onClick}
        >
            <div className={`mb-1 ${active? "text-gray-800": ""}`}>{data.icon}</div>
            <p className={`mb-1 ${active? "text-gray-800": ""}`}>{data.title}</p>
        </button>
    )
}

export default CategoriesCard