interface IProps {
    image: any,
    title: string
}

const CardSubscribe = ({ image, title }: IProps) => {
    return (
        <a href="#" className='flex gap-6 px-4 py-2 rounded-lg items-cente text-sm'>
            {image}
            {title}
        </a>
    )
}
export default CardSubscribe;