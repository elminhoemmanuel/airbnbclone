import { IoIosMenu } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"

const UserToggle = () => {
  return (
    <button className="flex items-center focus:outline-none border border-gray-200 p-2 hover:shadow-md rounded-full">
        <IoIosMenu className="block h-5 w-5 mr-2" />
        <FaUserCircle className="block h-7 w-7" />
    </button>
  )
}

export default UserToggle