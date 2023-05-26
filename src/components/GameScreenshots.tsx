import useScreenshots from '../hooks/useScreenshots';
import { SimpleGrid, Image } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    if (error) throw error;

    if (isLoading) return null;

    return <>
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
        {data?.results.map(file => 
        <Image key={file.id} src={file.image} width={file.width} height={file.height} />)}
    </SimpleGrid>;
    </>
};

export default GameScreenshots;
