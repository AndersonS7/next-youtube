import CardPreference from "../cardpreference";

const Preference = () => {
    return (
        <div className='flex gap-4 text-sm truncate'>
            <CardPreference key={1} active={true} titlte='tudo' />
            <CardPreference titlte='Música' />
            <CardPreference titlte='Jogos' />
            <CardPreference titlte='Dark Ambient' />
            <CardPreference titlte='Música Ambiente' />
            <CardPreference titlte='Mixes' />
            <CardPreference titlte='Ao vivo' />
            <CardPreference titlte='Jogos de simulação de vida' />
            <CardPreference titlte='Jogos de aventura' />
            <CardPreference titlte='Vocal Music' />
            <CardPreference titlte='Podcast' />
            <CardPreference titlte='Emviados recentemente' />
            <CardPreference titlte='Assistidos' />
            <CardPreference titlte='Vídeos da Semana' />
            <CardPreference titlte='Lançamentos' />
        </div>
    )
}

export default Preference;