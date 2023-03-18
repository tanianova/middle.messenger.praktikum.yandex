import Block from "../../utils/Block";
import { LinkProps } from "./types";
import template from "./ui.hbs";
import { withRouter } from "../../hocs/withRouter";
import { ButtonArrow } from "../buttonArrow";

class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: { click: () => this.navigate() },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: "button",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const LinkToChat = withRouter(Link);
