import { EllipsisVertical } from 'lucide-react'
import Image from 'next/image';

interface IProps {
    title: string,
    name: string,
    view: number,
    time: string,
    timenumber: number
    covervideo: any
    image: any
}

const CardVideo = ({ covervideo, image, title, name, time, timenumber, view }: IProps) => {
    return (
        <div className='flex flex-col w-full px-2 mb-6'>
            {covervideo}
            <div className='flex justify-between gap-4 mt-3 w-full'>
                <div className='w-12'>
                    {image}
                </div>
                <div className='flex flex-col gap-2 w-72 h-28 text-sm xl:text-lg'>
                    <div className='overflow-y-hidden'>
                        <h3 className='line-clamp-2'>{title}</h3>
                    </div>
                    <div className='flex flex-col overflow-y-hidden text-xs lg:text-sm text-zinc-400'>
                        <span className='line-clamp-2'>{name}</span>
                        <span className='line-clamp-2'>{view} mil visualizações • há {timenumber} {time}</span>
                    </div>
                </div>
                <div className=''>
                    <a href="#">
                        <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardVideo;