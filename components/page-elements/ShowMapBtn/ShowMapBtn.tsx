import { FaMap } from "react-icons/fa"

const ShowMapBtn = () => {
    return (
        <div className="fixed bottom-24 flex items-center justify-center z-50 w-full">
            <button className="text-white flex items-center rounded-full py-4 px-6 bg-black hover:scale-110">
                <p className="mr-2">Show map</p>
                <FaMap className="w-5 h-5" />
            </button>
        </div>
    )
}

export default ShowMapBtn