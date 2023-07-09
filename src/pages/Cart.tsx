import { Box, Button, Card, CardBody, Center, HStack, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react'
import CriticScore from '../components/CriticScore'
import Emoji from '../components/Emoji'
import PlatformIconList from '../components/PlatformIconList'
import getCroppedImageUrl from '../services/image-url'
import { Link } from 'react-router-dom'
import useGameQueryStore from '../store'


const Cart = () => {
   const items = useGameQueryStore(s=> s.game)
   const remove = useGameQueryStore(s => s.game.remove)
   const clear = useGameQueryStore(s => s.game.clear)
  return (
    <>
      <Box paddingBottom='10px' height={'1000vh'}>
        <Button bgColor='red' borderColor={'red'} _hover={{bgColor: 'red'}} marginBottom={5} onClick={()=> clear()}>🗑<Text marginLeft={1}>Clear all</Text></Button>
          <SimpleGrid  columns={{sm: 1, md: 2, lg: 3, xl: 4}}  spacing={6}>
                {items.game.map(g=> (
                    <Card key={g.id} bgColor='#ffffff40' bgGradient='linear(to-r,#0f2027 0%, #203a43 100%)' backdropFilter='blur(4px)' boxShadow='lg' transition={'all .15s ease-in'} overflow={'hidden'}>
                    <Link to={'/games/' + g.slug}><Image src={getCroppedImageUrl(g.background_image)}objectFit='cover' /></Link>
                    <CardBody>
                        <Heading fontSize='2xl'>
                            <Text>{g.name}</Text>
                        </Heading>
                        <HStack marginTop={3} justifyContent='space-between'>
                            <PlatformIconList
                                platform={g.parent_platforms.map((p) => p.platform)}
                            />
                            <CriticScore score={g.metacritic} />
                        </HStack>
                        <Box marginTop={1}>
                            <Emoji rating={g.rating_top} />
                            <Center marginTop={5}>
                                    <Button onClick={()=> remove(g.id)} gap={2} width="100%" variant='solid' textColor='chakra-body-text._light' transition={'all .15s ease-in'}  color='white' bgColor='red' borderColor='red' _hover={{bgColor:'red', borderColor:'red'}}> Remove</Button>
                            </Center>
                        </Box>
                    </CardBody>
                </Card>
                ))}
          </SimpleGrid>
      </Box>
    </>
  )
}

export default Cart
