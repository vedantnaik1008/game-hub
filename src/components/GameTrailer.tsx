import { Box, Spinner } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers'

interface Props{
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
   const {data, isLoading, error} = useTrailers(gameId);
    console.log(data)
   if(isLoading) return <Spinner color='white'/>;

   if(error) throw error;
   
    const first = data?.results[0];
    return first ? (
     <Box border={'2px solid white'} borderRadius={'25px'}>
         <video src={first.data.max}
            poster={first.preview} controls className='video'/>
     </Box>
    ): null
}

export default GameTrailer
