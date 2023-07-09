import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Box bgGradient={'linear(to-r,#6a11cb 0%, #2575fc 100%)'} scrollBehavior={'smooth'} height={'100%'}>
        <NavBar />
        <Box padding={5}>
          <Outlet/>
        </Box>
      </Box>
    </>
  )
}

export default layout
