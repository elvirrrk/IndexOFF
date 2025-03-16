import { Card, Image, Span } from "@chakra-ui/react";
import { CardData } from "../../data/cardData";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
// import styles from "./IndexCard.module.less";

interface Props extends CardData {
  id: number;
  title: string;
  img?: string;
  link: string;
  tag?: string;
}

export default function IndexCard({
  id,
  link,
  tag,
  title,
  img,
}: Props): ReactNode {
  return (
    <Link to={link}>
      <Card.Root
        bgColor="gray.50"
        key={id}
        variant="elevated"
        width="24rem"
        height="24rem"
      >
        <Span visibility="hidden">{tag}</Span>
        <Image src={img} />
        <Card.Body gap="2">
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card.Root>
    </Link>
  );
}
