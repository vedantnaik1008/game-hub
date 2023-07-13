import useScreenshots from '../hooks/useScreenshots';
import { SimpleGrid, Image, Spinner } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    console.log(data)
    if (error) throw error;

    if (isLoading) return <Spinner color='white'/>;

    return <>
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5} marginY={4}>
        {data?.results.map(file => 
        <Image key={file.id} height={'100%'} width={'100%'} src={file.image} borderRadius={20} objectFit={'cover'} transition={'all .15s ease-in'} _hover={{
            transform: 'scale(1.06)'
        }}/>)}
    </SimpleGrid>
    </>
}
export default GameScreenshots;
