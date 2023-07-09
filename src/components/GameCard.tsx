import { Box, Button, Card, CardBody, Center, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import useGameQueryStore from '../store';
import  Game  from '../entities/Game';
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const add = useGameQueryStore(s => s.game.add)
    const items = useGameQueryStore(s => s.game)
    const addToCart = () => {
        if(!items.game.some(item => item.id === game.id)){
          add(game)   
        }
      }
    return (
            <Card bgColor='#ffffff40' backdropFilter='blur(4px)' boxShadow='lg' bgGradient='linear(to-r,#0f2027 0%, #203a43 100%)' transition={'all .15s ease-in'}>
                <Link to={'/games/' + game.slug}><Image src={getCroppedImageUrl(game.background_image)} objectFit='cover' w={'100%'}/></Link>
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
                                <Button transition={'all .15s ease-in'}
                                bgColor='#2575fc' borderColor='#2575fc' _hover={{bgColor: '#2575fc'}} color='white'  onClick={addToCart} gap={2} width="100%" variant='solid'><MdAdd fontSize={'20px'}/> Add to Library</Button>
                        </Center>
                    </Box>
                </CardBody>
            </Card>
    );
};

export default GameCard;
