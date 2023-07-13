import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Box bgGradient={'linear(to right, #00b4db 0%,#602f6b 100%)'} scrollBehavior={'smooth'} display={'flex'} flexDirection={'column'}>
        <NavBar />
        <Box padding={5} flexGrow={{base: '1', md: '1', lg: '1', xl: '1'}}>
          <Outlet/>
        </Box>
      </Box>
    </>
  )
}

export default layout
