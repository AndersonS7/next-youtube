
interface IProps {
    title: string,
    isAcitve?: boolean | false,
    icon: any
}

const NavButton = ({ title, icon, isAcitve }: IProps) => {
    const styleActive = isAcitve ? 'flex gap-6 px-4 py-2 rounded-lg items-cente bg-zinc-700' : 'flex gap-6 px-4 py-2 rounded-lg items-cente hover:bg-zinc-700'

    return (
        <a href="#" className={styleActive}>
            {icon}
            <span className='text-sm'>{title}</span>
        </a >
    )
}

export default NavButton;