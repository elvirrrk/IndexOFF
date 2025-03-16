import { ReactElement } from "react";
import styles from "./Header.module.less";
import { Box, Link as ChackraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <Box className={styles.mainHeader} bg="gray.50">
      <Link className={styles.siteLogo} to="/">
        IndexOFF
      </Link>
      <Box display="flex" gap={10} alignItems="center">
        <ChackraLink className={styles.headerLinkUni} href="https://www.hse.ru/">
          <img className={styles.headerLinkImgUni} src="./icons/HSE.svg" width="41" height="41" alt="сайт вшэ" />
        </ChackraLink>
        <ChackraLink className={styles.headerLinkText} href="https://cmd.hse.ru/">
          Факультет
          <br />
          креативных
          <br />
          индустрий
        </ChackraLink>
        <ChackraLink className={styles.headerLinkUniMedia} href="https://cmd.hse.ru/media/">
          <img className={styles.headerLinkImgUniMedia} src="./icons/HSE-MEDIA.svg" width="75" height="37" alt="сайт вшэ медиа" />
        </ChackraLink>
      </Box>
    </Box>
  );
}
