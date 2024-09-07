interface IProps {
    margin?: number
}

const Separator = ({ margin }: IProps) => {
    let m = margin
    let customStyle = `items-center mt-2 pb-2 ml-${margin} border-zinc-700`

    return <hr className={customStyle} />
}

export default Separator;