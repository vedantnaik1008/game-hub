import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'}
    ]
        const setSortOrder = useGameQueryStore(s => s.setSortOrder);
        const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
        const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu >
    <MenuButton as={Button} bgColor={'whiteAlpha.200'} _hover={{bgColor: 'whiteAlpha.400'}}  color={'white'} _active={{bgColor: 'whiteAlpha.600'}} rightIcon={<BsChevronDown />} transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'>
        Order by: {currentSortOrder?.label || 'Relevance'}
    </MenuButton>
    <MenuList bg={'transparent'} backdropFilter={'blur(50px)'} borderWidth={'1px'}>
     {sortOrders.map(order => <MenuItem key={order.value} value={order.value} onClick={()=> setSortOrder(order.value)}  bg={'transparent'} _hover={{bg:'whiteAlpha.300'}} color={'white'}>{order.label}</MenuItem>)}
    </MenuList>
    
</Menu>
  )
}

export default SortSelector
