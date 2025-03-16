import "./App.less";
import { ReactElement } from "react";
import { IndexPage } from "./pages/IndexPage";

export function App(): ReactElement {
  return (
    <div className="mainPageContainer">
      <IndexPage />
    </div>
  );
}
