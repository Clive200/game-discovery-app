import { Card, Heading, Image, HStack } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const imageUrl = getCroppedImageUrl(game.background_image);

  return (
    <Card.Root>
      {imageUrl ? <Image src={imageUrl} /> : null}
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={(game.parent_platforms ?? []).map((p) => p.platform)}
          />
          {typeof game.metacritic === "number" ? (
            <CriticScore score={game.metacritic} />
          ) : null}
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
