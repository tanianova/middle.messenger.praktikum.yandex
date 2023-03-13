import Block from "../../utils/Block";
import template from "./ui.hbs";
import { links } from "./const";
import { Link } from "../link";

export class Navigation extends Block {
  init() {
    this.children.links = links.map(link => {
      return new Link({ ...link });
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
