import { Grid, GridItem, Flex, Box, Icon, Button} from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import { BsChevronLeft} from 'react-icons/bs';
import { useEffect, useRef, useState } from "react"



const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth'});
    };
  return (
    <>
    <Box pos={'relative'}>
    {isVisible && <Button pos={'fixed'} padding={2} borderRadius={'50%'} color={'blackAlpha.900'} bgColor={'white'} zIndex={2} bottom={1} right={0}  onClick={handleClick}><Icon fontSize={'18px'} transform={'rotate(90deg)'} as={BsChevronLeft}/></Button>}
      <Grid templateAreas={{
        base: `"aside"
               "main"`,
        lg: `"aside main"`
      }} templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }} >
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
        <GridItem area='main'>
          <Box paddingLeft={2} ref={ref}>
            <GameHeading />
            <Flex marginBottom={5} direction={{base: 'column', md: 'row'}} gap={{base: '2'}} >
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <Box>
                <SortSelector />
              </Box>
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </Box>
    </>
  ) 
}

export default HomePage
