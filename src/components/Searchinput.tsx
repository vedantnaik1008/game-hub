import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

const Searchinput = () => {
    const ref = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current){
          setSearchText(ref.current.value);
          navigate('/')
        }
    }}>
        <InputGroup>
            <InputLeftElement children={< BsSearch color='white'/>}/>
    color: #0095ff;
            <Input ref={ref}  borderRadius={20} placeholder='Search games...' variant='filled'  _placeholder={{ color: 'white' }} color={'white'} bgColor={'whiteAlpha.100'} _hover={{bgColor: ''}} borderWidth={'1px'} borderColor={'white'} _focusVisible={{borderColor: ''}}/>
        </InputGroup>
    </form>
  )
}

export default Searchinput
