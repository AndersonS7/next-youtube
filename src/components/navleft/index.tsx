import { ArrowDownToLine, BookCopy, ChevronDown, ChevronRight, Clock4, History, HomeIcon, ListVideo, Podcast, SquarePlay, ThumbsUp, TvMinimal, TvMinimalPlay } from 'lucide-react'
import Image from 'next/image';
import NavButton from '../navbutton';
import NavBox from '../nav';
import CardSubscribe from '../cardsubscribe';
import Separator from '../separator';

const LeftNav = () => {
    return (
        <div className='flex flex-col flex-1 py-2'>
            <NavBox>
                <NavButton isAcitve icon={<HomeIcon className=' stroke-1' />} title='Início' />
                <NavButton icon={<TvMinimalPlay className=' stroke-1' />} title='Shorts' />
                <NavButton icon={<BookCopy className=' stroke-1' />} title='Inscrições' />
                <NavButton icon={<Podcast className=' stroke-1' />} title='YouTube Music' />
            </NavBox>
            <Separator margin={5} />
            <NavBox>
                <a href="#" className='flex items-center gap-2 px-4 py-2 rounded-lg text-lg hover:bg-zinc-700'>
                    Você
                    <ChevronRight size={18} />
                </a>
                <NavButton icon={<TvMinimal className=' stroke-1' />} title='Seu canal' />
                <NavButton icon={<History className=' stroke-1' />} title='Histórico' />
                <NavButton icon={<ListVideo className=' stroke-1' />} title='Playlist' />
                <NavButton icon={<SquarePlay className=' stroke-1' />} title='Seus Vídeos' />
                <NavButton icon={<Clock4 className=' stroke-1' />} title='Assistir mais tarde' />
                <NavButton icon={<ThumbsUp className=' stroke-1' />} title='Vídeos com "gostei"' />
                <NavButton icon={<ArrowDownToLine className=' stroke-1' />} title='Downloads' />
            </NavBox>
            <Separator />
            <NavBox>
                <span className='flex items-center gap-2 px-4 py-2   rounded-lg text-lg'>Inscrições</span>
                <CardSubscribe
                    image={<Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem' />}
                    title='Rocketseat ' />
                <CardSubscribe
                    image={<Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem' />}
                    title='Crie Seus Jogos' />
                <CardSubscribe
                    image={<Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem' />}
                    title='Manual do mundo' />
                <CardSubscribe
                    image={<Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem' />}
                    title='MaxPalaro' />
                <CardSubscribe
                    image={<Image
                        className='rounded-full'
                        src="/char.png"
                        height={24}
                        width={24}
                        alt='uma descrição legal da imagem' />}
                    title='CNN - Brasil' />
                <a href="#" className='flex items-center gap-6 px-4 py-2 mt-2 rounded-lg text-sm'>
                    <ChevronDown strokeWidth={1} absoluteStrokeWidth />
                    Mostrar mais
                </a>
            </NavBox>
        </div>
    )
}

export default LeftNav;