import useTrailers from '../hooks/useTrailers'

interface Props{
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
   const {data, isLoading, error} = useTrailers(gameId);
    console.log(data)
   if(isLoading) return null;

   if(error) throw error;
   
    const first = data?.results[0];
    return first ? (
     <video src={first.data.max}
        poster={first.preview} controls className='video'/>
    ): null
}

export default GameTrailer
