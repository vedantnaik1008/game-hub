import { Box, HStack, Icon, Image, Text} from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import Searchinput from "./Searchinput"
import { Link } from "react-router-dom"
import useGameQueryStore from "../store"
import { MdOutlineLibraryBooks } from "react-icons/md"

const NavBar = () => {
  const items = useGameQueryStore(s => s.game.game.length)
  return (
    <div>
      <HStack padding={{base: '10px', md:'10px'}} pos={'relative'}>
        <Link to='/'>
          <Image src={logo} boxSize={'60px'} objectFit='cover' alt='game-logo'/>
        </Link>
      <Searchinput />
       <Box>
         <Text pos={'absolute'} top={0} right={{base: '3', md: '4'}} color={'white'} fontSize={'18px'} fontWeight={'bold'}>{items}</Text>
         <Link to={"cart"}>
           <Icon as={MdOutlineLibraryBooks} color={'white'} boxSize={{base: '7', md: '9'}}/>
         </Link>
       </Box>
      </HStack>
    </div>
  )
}

export default NavBar
