interface IProps {
    children: any
}

const NavBox = ({ children }: IProps) => {
    return (
        <nav className='flex flex-col w-full pl-2'>
            {children}
        </nav>
    )
}

export default NavBox;