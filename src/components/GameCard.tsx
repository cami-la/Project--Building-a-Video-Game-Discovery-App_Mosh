import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlataformIconList from "./PlataformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlataformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
