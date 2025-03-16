import { Box, Heading } from "@chakra-ui/react";
import { ArticleData } from "../../data/articleData";
import { ReactNode } from "react";
import styles from "./ArticleCard.module.less";

export function ArticleCard({
  id,
  title,
  img,
  intro,
  about,
  whoCount,
  howCount,
  disadvantages }: ArticleData): ReactNode {
  return (
    <Box key={id} className={styles.articleContainer}>
      <Heading>{title}</Heading>
      <p>{intro}</p>
      <p>{about}</p>
      <p>{whoCount}</p>
      <p>{howCount}</p>
      <p>{disadvantages}</p>
      <img src={img["background"]} />
    </Box>
  )
}