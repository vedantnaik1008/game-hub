import React from 'react'
import { Game } from '../entities/Game';
import { SimpleGrid, Heading, Text} from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
import ExpandableText from './ExpandableText';

interface Props{
    game: Game;
}

const GameAttributes = ({game}: Props) => {
  return (
    <>
        <SimpleGrid columns={2} as='dl'>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <DefinitionItem term="Platforms" >
            {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
            <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term='Genres'>
            {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
            {game.plubishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
        </SimpleGrid>
    </>
  )
}

export default GameAttributes
