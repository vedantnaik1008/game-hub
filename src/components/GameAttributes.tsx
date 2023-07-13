import Game from '../entities/Game';
import { SimpleGrid, Text} from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props{
    game: Game;
}

const GameAttributes = ({game}: Props) => {
  return (
        <SimpleGrid columns={2} as='dl' >
        <DefinitionItem term="Platforms">
            {game.parent_platforms?.map(({platform}) => <Text color={'white'} key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
            <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term='Genres'>
            {game.genres.map(genre => <Text color='white' key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
            {game.publishers?.map(publisher => <Text color={'white'} key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
        </SimpleGrid>
  )
}

export default GameAttributes
