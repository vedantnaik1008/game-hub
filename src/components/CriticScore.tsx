import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? '#2ecc71': score > 60 ? '#f1c40f' : ''; 
  return (
    <div>
      <Badge color={color} bg={'black'}  fontSize='14px' borderRadius='4px' paddingX={2}>{score}</Badge>
    </div>
  )
}

export default CriticScore
