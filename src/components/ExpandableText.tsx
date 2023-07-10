import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props{
    children: string;
}

const ExpandableText = ({children}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if(!children)return null;

    if(children.length <= limit)
    return <Text>{children}</Text>;

    const summary = expanded? children : children.substring(0, limit) + '...';
  return (
    <>
        <Text>{summary}<Button marginLeft={1} size={'xs'} fontWeight='bold'bg={'transparent'} _hover={{bg:'whiteAlpha.300'}} borderRadius='md'
        borderWidth='2px' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Read More'}</Button>
        </Text>
    </>
  )
}

export default ExpandableText
