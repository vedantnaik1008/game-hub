import { Grid, GridItem, Flex, Box, Icon, Button } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import { BsChevronLeft} from 'react-icons/bs';
import { useEffect, useRef, useState } from "react"
import GenresSlide from "../components/GenresSlide"


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
      if(ref.current){
        const offset = 100; 
        const targetPosition = ref.current?.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };
  return (
    <>
    <Box display={{base: 'block', lg: 'none'}}>
        <GenresSlide />
    </Box>
    <Box ref={ref}>
    {isVisible && <Button pos={'fixed'} padding={2} borderRadius={'50%'} color={'blackAlpha.900'} bgColor={'white'} zIndex={2} bottom={1} right={1}  onClick={handleClick}><Icon fontSize={'18px'} transform={'rotate(90deg)'} as={BsChevronLeft}/></Button>}
      <Grid templateAreas={{
        lg: `"aside main"`
      }} templateColumns={{
        lg: '200px 1fr'
      }} justifyContent={{base: 'center', lg: 'unset'}}>
        <GridItem area='aside' paddingX={{base: '0', lg: '5px'}} display={{base: 'none', md: 'none', lg: 'block'}}>
          <GenreList />
        </GridItem>
        <GridItem area='main'>
          <Box paddingLeft={2} >
            <GameHeading />
            <Flex marginBottom={5} direction={{base: 'column', md: 'row'}} gap={{base: '2'}}>
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
