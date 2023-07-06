import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? '#6dc849': score > 60 ? '#fdca52' : ''; 
  return (
    <div>
      <Badge color={color} bg={'white'}  fontSize='14px' borderRadius='4px' paddingX={2}>{score}</Badge>
    </div>
  )
}

export default CriticScore
