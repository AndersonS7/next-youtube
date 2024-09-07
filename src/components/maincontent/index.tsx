import { ChevronRight } from 'lucide-react'
import Image from 'next/image';
import CardVideo from '../cardvideo';
import Preference from '../preference';

const MainContent = () => {
    return (
        <main className='flex-grow p-2 w-9/12'>
            <div className='flex justify-between items-center'>
                <Preference />
                <ChevronRight strokeWidth={1} absoluteStrokeWidth />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8'>
                <CardVideo key={1}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='O gato que fala chinês e cozinha macarrão: Uma aventura felina hilária e culinária!'
                    name='Mentes Curiosas'
                    time='dias'
                    timenumber={5}
                    view={150} />
                <CardVideo key={2}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Desvendando os mistérios da Lua: Uma jornada espacial caseira: Ciência divertida e acessível para todos.'
                    name='Mundo Bizarro'
                    time='meses'
                    timenumber={2}
                    view={92} />
                <CardVideo key={3}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Dançando Gangnam Style com um T-Rex: Uma combinação inesperada! Humor e nostalgia em um só vídeo.'
                    name='Cerveja e Código'
                    time='meses'
                    timenumber={1}
                    view={98} />
                <CardVideo key={4}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Como construir uma máquina do tempo com papelão e barbante: Criatividade e imaginação sem limites.'
                    name='Pixel e Papel'
                    time='meses'
                    timenumber={6}
                    view={28} />
                <CardVideo key={5}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='A receita secreta da vovó para fazer slime comestível: Diversão garantida para todas as idades!'
                    name='Na Cozinha com a Vovó'
                    time='meses'
                    timenumber={10}
                    view={288} />
                <CardVideo key={6}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Um dia na vida de um urso: Desvendando o mundo da floresta! Fantasia e aventura para crianças e adultos.'
                    name='Aventuras Urbanas'
                    time='anos'
                    timenumber={2}
                    view={859} />
                <CardVideo key={7}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='O cachorro que pinta quadros abstratos: Uma nova estrela da arte moderna! Talento animal e arte inusitada.'
                    name='Músicas para a Alma'
                    time='anos'
                    timenumber={2}
                    view={89} />
                <CardVideo key={8}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Viajando no tempo com um DeLorean de papelão: Uma aventura épica! Nostalgia e criatividade em um só vídeo.'
                    name='Jogando no Escuro'
                    time='anos'
                    timenumber={2}
                    view={102} />
                <CardVideo key={9}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='A batalha épica entre um ninja e um panda: Quem será o vencedor? Ação e comédia em um só vídeo.'
                    name='Ciência Divertida'
                    time='anos'
                    timenumber={8}
                    view={982} />
                <CardVideo key={10}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Como fazer um bolo em formato de pirâmide egípcia: Culinária e história se encontram! Criatividade e aprendizado em um só vídeo. '
                    name='Histórias para Dormir'
                    time='anos'
                    timenumber={5}
                    view={152} />
                <CardVideo key={11}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Um dia na vida de uma planta carnívora: Desvendando seus segredos! Ciência e natureza de forma divertida.'
                    name='Vida Simples'
                    time='dias'
                    timenumber={5}
                    view={152} />
                <CardVideo key={12}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='A receita secreta do elixir da juventude: Uma busca épica! Humor e aventura em um só vídeo.'
                    name='Atrás das Câmeras'
                    time='dias'
                    timenumber={8}
                    view={152} />
                <CardVideo key={13}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Desvendando os mistérios do Triângulo das Bermudas: Uma expedição marítima emocionante! Aventura e mistério para todos os públicos.'
                    name='Cozinhando com o Marido '
                    time='semandas'
                    timenumber={2}
                    view={152} />
                <CardVideo key={14}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='O gato que toca piano clássico como um profissional: Um talento incrível! Música e animais em um só vídeo.'
                    name='Viajando Solo'
                    time='semandas'
                    timenumber={2}
                    view={152} />
                <CardVideo key={14}
                    covervideo={<Image
                        width={345}
                        height={80}
                        src="/capa.jpg"
                        alt='uma capa de um vídeo legal do Youtube'
                        className=' rounded-xl'
                    />}
                    image={<Image
                        width={38}
                        height={38}
                        src="/char.png"
                        alt='Capa do canal'
                        className=' rounded-full'
                    />}
                    title='Como construir uma casa na árvore mais incrível do mundo: Uma aventura DIY épica! Criatividade e DIY para todos os amantes de aventuras.'
                    name='Mentes Criativas'
                    time='semandas'
                    timenumber={2}
                    view={152} />
            </div>
        </main>
    )
}

export default MainContent;