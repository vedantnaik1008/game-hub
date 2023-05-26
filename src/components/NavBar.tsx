import { HStack, Image} from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import Searchinput from "./Searchinput"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <HStack  padding='10px'>
        <Link to='/'>
          <Image src={logo} boxSize='60px' objectFit='cover'/>
        </Link>
      <Searchinput />
      <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default NavBar
