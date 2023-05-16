import { HStack, Image} from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import Searchinput from "./Searchinput"

interface Props{
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <div>
      <HStack  padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <Searchinput onSearch={onSearch}/>
      <ColorModeSwitch />
      </HStack>
    </div>
  )
}

export default NavBar
