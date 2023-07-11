import {
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginTop={9} marginBottom={3} textAlign={{base: 'center',md: 'center', lg: 'start'}}>
                Genres
            </Heading> 
           
                <List>
                    <Flex flexDirection={{base: 'row', md: 'row', lg: 'column'}} wrap={{base: 'wrap', md: 'wrap', lg: 'nowrap'}} gap={{base: '0', md: '1'}} justifyContent={'center'}>
                        {data?.results.map((genre) => (
                            <ListItem key={genre.id} paddingY='5px'>
                                    <HStack>
                                            <Image boxSize='32px'borderRadius={8}objectFit='cover'src={getCroppedImageUrl(genre.image_background)} display={{base: 'none', md: 'none', lg: 'block'}}/>
                                        <Button whiteSpace='normal' textAlign={{lg: 'left'}} bgColor={{base: 'transparent', md: 'transparent',lg: 'unset', xl: 'unset'}} borderWidth={{base: 'thin',  lg: '0'}} padding={{base: '2', md: '3',lg: 'unset', xl: 'unset'}} borderRadius={{base: '2xl',md: '2xl', lg: 'unset', xl: 'unset'}} fontWeight={genre.id === selectedGenreId? 'bold': 'normal'} color={'white'} onClick={() => setSelectedGenreId(genre.id)} fontSize='md' variant={{base: 'ghost', md: 'ghost',lg:'link', xl: 'link'}}>{genre.name}</Button>
                                    </HStack>
                            </ListItem>))}
                    </Flex>
                </List>
            
        </>
    );
};

export default GenreList;
