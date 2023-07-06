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
            <MenuButton transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px' as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList bg={'transparent'} backdropFilter={'blur(20px)'}>
                {data?.results.map((platform) => (
                    <MenuItem
                        onClick={() => setSelectedPlatformId(platform.id)}
                        key={platform.id} bg={'transparent'} _hover={{bg:'whiteAlpha.300'}}>
                        {platform.name} 
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
