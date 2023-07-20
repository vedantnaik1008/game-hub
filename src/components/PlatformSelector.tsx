import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown} from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);
    if (error) return null;

    return (
        <Menu>
            <MenuButton transition='all 0.2s' border={'1px solid white'} borderRadius='md' bgColor={'whiteAlpha.200'} _hover={{bgColor: 'whiteAlpha.400'}} color={'white'} _active={{bgColor: 'whiteAlpha.600'}} as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList bg={'transparent'} backdropFilter={'blur(40px)'} borderWidth={'1px'}>
                {data?.results.map((platform) => (
                    <MenuItem
                        onClick={() => setSelectedPlatformId(platform.id)}
                        key={platform.id} bg={'transparent'} _hover={{bg:'whiteAlpha.300'}} color={'white'}>
                        {platform.name} 
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
