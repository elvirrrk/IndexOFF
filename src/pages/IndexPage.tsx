import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GridLayout } from "../components/GridLayout/GridLayout";
import { Cards } from "../data/cardData";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { Articles, ArticleData } from "../data/articleData";
import styles from "./IndexPage.module.less";
import { Header } from "../components/Header/Header";

export function IndexPage(): ReactElement {
  return (
    <div className={styles.mainContentBox}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GridLayout items={Cards} />} />
          {Articles.map((item: ArticleData) => {
            const { id, img } = item;
            return (
              <Route
                key={id}
                path={Cards[id].link}
                element={
                  <ArticleCard
                    id={id}
                    title={Cards[id].title}
                    img={img}
                    intro={""}
                    about={""}
                    whoCount={""}
                    howCount={""}
                    disadvantages={""}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
