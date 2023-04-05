import { Block } from "../../utils/Block";
import { LinkProps } from "./types";
import  template  from "./ui.hbs";
import { withRouter } from "../../hocs/withRouter";

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: { click: () => this.navigate() },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const Link = withRouter(BaseLink);
