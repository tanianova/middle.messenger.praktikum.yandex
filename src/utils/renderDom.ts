import { Navigation } from "../components/navigation";
import Block from "./Block";

export const renderDom = (block: Block) => {
  const root = document.querySelector("#app")!;
  root.innerHTML = "";

  const navigation = new Navigation({});
  root.appendChild(navigation.element);

  root.append(block.getContent());
  block.dispatchComponentDidMount();
};
