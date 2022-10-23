
type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<"button">, "children">

const PrimaryBtn = ({ children, className, ...rest }: ButtonProps) => {
    let style = `py-2 px-4 focus:outline-none block text-gray-800 text-sm 
    hover:bg-gray-100 hover:border hover:border-gray-100  hover:rounded-full ${className}`
    return (
        <button className={style} {...rest} >{children}</button>
    )
}

export default PrimaryBtn