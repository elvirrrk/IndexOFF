import IndexCard from "../IndexCard/IndexCard";
import { CardData } from "../../data/cardData";
import { ReactNode } from "react";
import styles from "./GridLayout.module.less";

interface Props {
  items: CardData[];
}

export function GridLayout({ items }: Props): ReactNode {
  return (
    <div className={styles.simpeGrid}>
      {items.map((item) => {
        const { id, title, img, link, tag } = item;
        return (
          <IndexCard
            key={id}
            id={id}
            link={link}
            title={title}
            img={img}
            tag={tag}
          />
        );
      })}
    </div>
  );
}
