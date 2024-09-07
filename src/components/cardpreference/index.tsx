interface IProps {
    active?: boolean,
    titlte: string
}

const CardPreference = ({ active, titlte }: IProps) => {
    const styleActive = active ? 'flex justify-center items-center rounded-md bg-white text-zinc-900 py-1 px-2' : 'flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'

    return (
        <a href="#" className={styleActive}>
            {titlte}
        </a>
    )
}

export default CardPreference;