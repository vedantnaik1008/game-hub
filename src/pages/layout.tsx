import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Box bgGradient={'linear(to-r, #9e1f63 , #392d91)'}>
        <NavBar />
        <Box padding={5}>
          <Outlet/>
        </Box>
      </Box>
    </>
  )
}

export default layout
