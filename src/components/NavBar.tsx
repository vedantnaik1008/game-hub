import { HStack, Icon, Image, Text} from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import Searchinput from "./Searchinput"
import { Link } from "react-router-dom"
import {GrCart} from 'react-icons/gr'

const NavBar = () => {
  return (
    <div>
      <HStack  padding='10px' pos={'relative'}>
        <Link to='/'>
          <Image src={logo} boxSize='60px' objectFit='cover'/>
        </Link>
      <Searchinput />
       <Text pos={'absolute'} top={1} right={5} color={'white'} fontSize={'18px'} fontWeight={'bold'}>0</Text>
       <Icon as={GrCart} boxSize={9}  color='white'/>
      </HStack>
    </div>
  )
}

export default NavBar
