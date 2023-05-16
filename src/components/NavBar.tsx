import { HStack, Image} from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import Searchinput from "./Searchinput"
const NavBar = () => {
  return (
    <div>
      <HStack  padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <Searchinput />
      <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default NavBar
