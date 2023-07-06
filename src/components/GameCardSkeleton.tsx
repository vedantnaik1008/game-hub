import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card bgColor='#ffffff40' backdropFilter='blur(4px)' boxShadow='lg'>
        <Skeleton height='300px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
