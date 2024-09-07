import { ArrowDownToLine, BookCopy, ChevronDown, ChevronRight, Clock4, History, HomeIcon, ListVideo, Podcast, SquarePlay, ThumbsUp, TvMinimal, TvMinimalPlay } from 'lucide-react'
import Image from 'next/image';

const LeftNav = () => {
    return (
        <div className='flex flex-col flex-1 py-4'>
            <nav className='flex flex-col w-full px-6 space-y-4 '>
                <a href="#" className='flex gap-6 items-cente'>
                    <HomeIcon strokeWidth={1} absoluteStrokeWidth />
                    <span className='text-sm'>Início</span>
                </a>
                <a href="#" className='flex gap-6 items-cente'>
                    <TvMinimalPlay strokeWidth={1} absoluteStrokeWidth />
                    <span className='text-sm'>Shorts</span>
                </a>
                <a href="#" className='flex gap-6 items-cente'>
                    <BookCopy strokeWidth={1} absoluteStrokeWidth />
                    <span className='text-sm'>Inscrições</span>
                </a>
                <a href="#" className='flex gap-6 items-cente'>
                    <Podcast strokeWidth={1} absoluteStrokeWidth />
                    <span className='text-sm'>YouTube Music</span>
                </a>
            </nav>
            <hr className=' items-center mt-5 mb-5 ml-5 border-zinc-700' />
            <nav className='flex flex-col gap-4 px-6 text-sm'>
                <a href="#" className='flex items-center gap-2 text-lg'>
                    Você
                    <ChevronRight size={18} />
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <TvMinimal strokeWidth={1} absoluteStrokeWidth />
                    Seu canal
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <History strokeWidth={1} absoluteStrokeWidth />
                    Histórico
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <ListVideo strokeWidth={1} absoluteStrokeWidth />
                    Playlist
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <SquarePlay strokeWidth={1} absoluteStrokeWidth />
                    Seus Vídeos
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <Clock4 strokeWidth={1} absoluteStrokeWidth />
                    Assistir mais tarde
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <ThumbsUp strokeWidth={1} absoluteStrokeWidth />
                    Vídeos com "gostei"
                </a>
                <a href="#" className='flex items-center gap-6'>
                    <ArrowDownToLine strokeWidth={1} absoluteStrokeWidth />
                    Downloads
                </a>
            </nav>
            <hr className='mt-5 mb-5 border-zinc-700' />
            <nav className='flex flex-col gap-4 px-6 text-sm'>
                <a href="#" className='flex items-center gap-2 text-lg'>
                    Inscrições
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem'
                    />
                    Rocketseat
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem'
                    />
                    Crie Seus Jogos
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem'
                    />
                    Manual do mundo
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem'
                    />
                    MaxPalaro
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem'
                    />
                    CNN - Brasil
                </a>
                <a href="#" className='flex text-start gap-6 items-center'>
                    <ChevronDown strokeWidth={1} absoluteStrokeWidth />
                    Mostrar mais
                </a>
            </nav>
        </div>
    )
}

export default LeftNav;