import { ArrowDownToLine, Bell, BookCopy, ChevronDown, ChevronRight, Clock4, EllipsisVertical, History, HomeIcon, ListVideo, Menu, Mic, Play, Podcast, Search, SquarePlay, SquarePlus, ThumbsUp, TvMinimal, TvMinimalPlay } from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className='flex justify-around items-center px-6 py-2'>
        <div className='flex flex-row flex-grow items-center gap-6'>
          <Menu size={24} />
          <div className='flex flex-row items-center gap-1'>
            <Play size={22} className=' bg-red-500 w-10 rounded-md p-1' />
            <strong className=' font-semibold text-xl'>Premium</strong>
            <span className=' font-normal text-xs text-zinc-200 mb-4'>BR</span>
          </div>
        </div>
        <div className='flex flex-row flex-grow gap-4 items-center'>
          <div className='flex flex-row w-4/5 items-center'>
            <input type="text" placeholder='Pesquisar' className='rounded-l-3xl text-zinc-300 bg-transparent border border-zinc-600 p-4 pl-8 h-10 w-full' />
            <button className='flex justify-center items-center text-zinc-300 border border-zinc-600 bg-zinc-700 rounded-r-3xl p-4 pl-2 h-10 w-16'>
              <Search size={24} />
            </button>
          </div>
          <div className='flex justify-between items-center bg-zinc-700 p-2.5 rounded-full'>
            <Mic size={22} />
          </div>
        </div>
        <div className='flex flex-row flex-grow items-center justify-end gap-8'>
          <SquarePlus size={22} />
          <Bell size={22} />
          <Image className=' rounded-full'
            src="/char.png"
            width={28}
            height={28}
            alt="char" />
        </div>
      </nav>
      <div className='flex gap-4 h-screen w-full mt-2 pr-4'>
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
        <main className='flex-grow p-2 w-9/12'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-4 text-sm'>
              <a href="#" className='flex justify-center items-center rounded-md bg-white text-zinc-900 py-1 px-2'>
                Tudo
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Música
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Jogos
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Dark Ambient
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Música Ambiente
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Mixes
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Ao vivo
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Jogos de simulação de vida
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Jogos de aventura
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Vocal Music
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Podcast
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Emviados recentemente
              </a>
              <a href="#" className='flex justify-center items-center rounded-md bg-zinc-700 py-1 px-2'>
                Assistidos
              </a>
            </div>
            <ChevronRight strokeWidth={1} absoluteStrokeWidth />
          </div>
          <div className='grid grid-cols-5 mt-8'>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-2 justify-center mb-12'>
              <Image
                width={320}
                height={80}
                src="/capa.jpg"
                alt='uma capa de um vídeo legal do Youtube'
                className=' rounded-xl'
              />
              <div className='flex mt-3 gap-3'>
                <div>
                  <Image
                    width={48}
                    height={48}
                    src="/char.png"
                    alt='Capa do canal'
                    className=' rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-1 text-sm'>
                  <h3>Um vídeo muito legal do Youtube | Que vai ensinar algo...</h3>
                  <div className='flex flex-col text-zinc-400'>
                    <span>Canal das ideias</span>
                    <span>94 mil visualizações • há 2 meses</span>
                  </div>
                </div>
                <div>
                  <a href="#">
                    <EllipsisVertical strokeWidth={1} absoluteStrokeWidth />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
