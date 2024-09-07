import { Bell, Menu, Mic, Play, Search, SquarePlus } from 'lucide-react'
import Image from 'next/image';

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-6 py-2'>
            <div className='flex gap-6 justify-start items-center w-1/5'>
                <Menu strokeWidth={1} absoluteStrokeWidth size={24} />
                <div className='flex flex-row items-center gap-1'>
                    <Play strokeWidth={1} absoluteStrokeWidth size={20} className=' bg-red-500 w-10 rounded-md p-1' />
                    <strong className=' font-semibold text-xl'>Premium</strong>
                    <span className=' font-normal text-xs text-zinc-200 mb-4'>BR</span>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center w-2/5'>
                <div className='flex items-center pl-5 w-10/12'>
                    <input type="text" placeholder='Pesquisar' className='rounded-l-3xl text-zinc-300 bg-transparent border border-zinc-600 p-4 pl-4 h-10 w-full' />
                    <button className='flex justify-center items-center text-zinc-300 border border-zinc-600 bg-zinc-700 rounded-r-3xl p-2 h-10 w-16'>
                        <Search size={22} />
                    </button>
                </div>
                <div className='flex justify-between items-center bg-zinc-700 p-2.5 w-10 h-10 rounded-full'>
                    <Mic strokeWidth={1} absoluteStrokeWidth size={22} />
                </div>
            </div>
            <div className='flex gap-7 justify-end items-center pr-2 w-1/5'>
                <SquarePlus strokeWidth={1} absoluteStrokeWidth size={22} />
                <Bell strokeWidth={1} absoluteStrokeWidth size={22} />
                <Image className=' rounded-full'
                    src="/char.jpg"
                    width={32}
                    height={32}
                    alt="char" />
            </div>
        </nav>
    )
}

export default Header;