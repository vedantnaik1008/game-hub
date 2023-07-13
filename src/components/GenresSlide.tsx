import { Button, Flex, HStack, Heading, ListItem, Spinner, UnorderedList, Image, Text, Icon, Box } from "@chakra-ui/react";
import { useState } from "react";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import { BsBoxArrowRight } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

const GenresSlide = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Button onClick={() => setShowNavbar(true)} pos={'fixed'} top={'50%'} left={'-13px'} zIndex={'20'} color={'black'} bgColor={'white'} border={'1px solid white'} fontSize={'18px'} padding={'5px'} transition={'Button .15s ease-in'}><Icon as={BsBoxArrowRight}/></Button>

      {showNavbar && (
        <>
              <Box pos={'fixed'} top={'0px'} left={'0px'} bg={'transparent'} backdropFilter={'blur(100px)'} zIndex={'99'} w={'full'} h={'100vh'} overflowY={'scroll'}>
                  <Button onClick={() => setShowNavbar(false)} pos={'absolute'} top={'2px'} right={'3px'} bg={'transparent'} _hover={{bg: 'unset'}} _active={{bg: 'unset'}} _focusVisible={{boxShadow: 'unset'}}><Icon fontSize={'30px'} color={'white'}  as={MdOutlineClose} /></Button>
                          <Heading fontSize='3xl' marginTop={9} marginBottom={3} marginLeft={2} textAlign={{ base: 'start', lg: 'start' }} color={'white'}>Genres</Heading>
                          <UnorderedList as={'ul'} listStyleType={'none'}>
                              <Flex flexDirection={'column'} justifyContent={'center'}>
                                  {data?.results.map((genre) => (
                                      <ListItem key={genre.id} paddingY='10px' >
                                          <HStack>
                                              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                                              <Button whiteSpace='normal' textAlign={{ lg: 'left' }} padding={{ base: '2', md: '3', lg: 'unset', xl: 'unset' }} borderRadius={{ base: '2xl', md: '2xl', lg: 'unset', xl: 'unset' }} fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre.id)} fontSize='md' variant={{ base: 'ghost', md: 'ghost', lg: 'link', xl: 'link' }} _active={{ color: 'white' }} _hover={{ color: 'white', bgColor: 'unset' }}><Text textColor={'white'}>{genre.name}</Text></Button>
                                          </HStack>
                                      </ListItem>))}
                              </Flex>
                          </UnorderedList>
              </Box>
        
                </>
      )}
    </>
  );
}

export default GenresSlide;