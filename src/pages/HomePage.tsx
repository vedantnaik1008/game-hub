import { Grid, Show, GridItem, Flex, Box, Text} from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import { BsChevronLeft} from 'react-icons/bs';

const HomePage = () => {
  return (
    <><Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
      <Box pos={'absolute'} top='0px' right={'0px'}>
        <Show breakpoint='(max-width: 992px)'>
         <Text>
           Genres<BsChevronLeft />
         </Text>
        </Show>
      </Box>
    </>
  ) 
}

export default HomePage
