import { Box, Button, Card, CardBody, Center, HStack, Heading, Image, Text } from '@chakra-ui/react';
import  Game  from '../entities/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Link to={'/games/' + game.slug}>
            <Card bgColor='#ffffff40' backdropFilter='blur(4px)' boxShadow='lg' _hover={{bgGradient: 'linear(to-r, #9e1f63 , #392d91)'}} transition={'all .15s ease-in'}>
                <Image src={getCroppedImageUrl(game.background_image)} objectFit='cover' />
                <CardBody>
                    <Heading fontSize='2xl'>
                        <Text>{game.name}</Text>
                    </Heading>
                    <HStack marginTop={3} justifyContent='space-between'>
                        <PlatformIconList
                            platform={game.parent_platforms.map((p) => p.platform)}
                        />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Box marginTop={1}>
                        <Emoji rating={game.rating_top} />
                        <Center marginTop={5}>
                                <Button gap={2} width="100%" variant='solid'><MdAdd fontSize={'20px'}/> Add to cart</Button>
                        </Center>
                    </Box>
                </CardBody>
            </Card>
        </Link>
    );
};

export default GameCard;
